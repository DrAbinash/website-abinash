# Deploying this website on your Synology NAS

This guide assumes no coding experience. It walks through getting the
website running on your Synology NAS using **Container Manager** (the
Docker app built into DSM 7.2+).

---

## 1. What you need first

- A Synology NAS with **Container Manager** installed (Package Center →
  search "Container Manager" → Install).
- Your domain (e.g. `hope.caredeoghar.com`) pointed at your NAS, if you want
  the site reachable on the internet (ask your domain registrar / IT
  person if you're unsure how — this is a one-time DNS setting).
- A GitHub account with this repository, and Git installed *or* just the
  "Download ZIP" button on GitHub if you don't want to use Git at all.

## 2. Get the code onto the NAS

**Easiest option — File Station:**
1. On GitHub, click the green **Code** button → **Download ZIP**.
2. In DSM, open **File Station**, create a folder, e.g.
   `/docker/hope-neurotrauma-website`.
3. Upload the ZIP there and extract it (right-click → Extract).

## 3. Set your real settings before building

Open **File Station**, navigate into the extracted folder, and edit
`docker-compose.yml` with the built-in text editor (right-click the file →
Open with → Text Editor), or use File Station's "Edit" option:

- Find the line `NEXT_PUBLIC_SITE_URL=https://hope.caredeoghar.com` and make
  sure it matches your real domain.
- Find `ADMIN_PASSWORD=${ADMIN_PASSWORD:-changeme123}` — **change
  `changeme123`** to a password only you know. This protects the page
  where you'll read patient enquiries sent through the contact form
  (`https://yourdomain/admin/enquiries`).

## 4. Build and run the container

1. Open **Container Manager** → **Project** (left sidebar) → **Create**.
2. **Project name:** `hope-neurotrauma-website`
3. **Path:** choose the folder you uploaded in Step 2 (it must contain
   `docker-compose.yml`).
4. Container Manager will detect `docker-compose.yml` automatically —
   choose "Use existing docker-compose.yml".
5. Click **Next**, then **Done**. The first build takes 3–8 minutes since
   it downloads everything the site needs — this is normal.
6. Once it says **Running**, the site is live inside your NAS on port
   `3008` (you can test by visiting `http://<your-NAS-IP>:3008` from a
   browser on the same network).

## 5. Make it reachable at your real domain (reverse proxy)

The included `Caddyfile` is a ready-made reverse proxy configuration that
takes visitors to `https://yourdomain.in` and forwards them to the
website container running on port 3008.

- If you already run a Caddy container/reverse proxy on your NAS for
  other sites, drop this `Caddyfile` into that setup.
- If you don't have a reverse proxy yet, DSM's own **Control Panel →
  Login Portal → Advanced → Reverse Proxy** is usually simpler: create a
  rule that forwards `hope.caredeoghar.com` (port 443, HTTPS) to
  `localhost:3008` (the container's published port). DSM will also handle
  the SSL certificate for you (**Control Panel → Security →
  Certificate**, use "Let's Encrypt").

> **Important:** the port in your reverse proxy setup must always match
> the **left-hand side** number in the `ports:` line of
> `docker-compose.yml` (currently `3008:3000`). If you ever change that
> number, update your reverse proxy (and the `Caddyfile`, if you use it)
> to match.

## 6. Check everything works

- Visit your site — all sections, images, and the appointment form should
  load.
- Submit a test message through the "Book an Appointment" form.
- Go to `https://yourdomain.in/admin/enquiries`, log in with the
  `ADMIN_PASSWORD` you set in Step 3, and confirm your test message shows
  up there. This is where you'll check patient enquiries from now on —
  bookmark it.

## 7. Updating the site later

Whenever you (or a developer) push changes to the GitHub repository:
1. Download the new ZIP (or `git pull` if using Git) into the same NAS
   folder, replacing the old files (keep your edited `docker-compose.yml`
   settings from Step 3).
2. In Container Manager → Project → select the project → **Action →
   Build** (or **Rebuild**), then **Start**.

Patient data and enquiries are stored in a Docker *volume*
(`hope-neuro-data`), which is kept separately from the code — rebuilding
or updating the site will **not** delete your enquiries.

## 8. Backups

Your enquiries and site data live in the `hope-neuro-data` Docker volume.
In Container Manager → **Volume**, you can find where this is stored on
disk and include that folder in your regular Synology Hyper Backup /
Snapshot Replication job, the same way you'd back up any other shared
folder.

---

### Troubleshooting

| Symptom | Likely cause |
|---|---|
| Site loads on `http://NAS-IP:3008` but not on your domain | Reverse proxy port doesn't match `3008`, or DNS isn't pointed at your NAS yet |
| Contact form says "could not save your message" | Container Manager → Project → Logs; check for database errors, or the `hope-neuro-data` volume may need more disk space |
| Can't log into `/admin/enquiries` | Double-check `ADMIN_PASSWORD` in `docker-compose.yml` matches what you're typing, then restart the project after any change to `docker-compose.yml` |
