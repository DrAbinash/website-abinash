# How to Edit Your Website — The Easy Way

Your website has two editing tools:

1. **The gear panel** — the round button at the bottom-right of the website.
   Quick settings: color theme (green by default, plus rose / amber /
   burgundy), the booking link (where every "Book Appointment" button goes),
   WhatsApp and phone numbers. Uses its own panel password.

2. **The full Settings panel** at `/admin` — everything else on the site.
   There is also a small **"Site settings"** link at the very bottom of the
   website (in the footer) that takes you straight there. It uses the staff
   login (the same `ADMIN_PASSWORD` as the enquiries page).

## What the /admin panel can change (almost everything!)

| Tab | What's inside |
|---|---|
| **Doctor & About** | Name, qualifications, title, tagline, intro, about paragraphs, degrees, **doctor's photo** |
| **Contact & Hours** | Phone, emergency number, email, WhatsApp, OPD timings |
| **Hospital & Map** | Hospital name, address, Google Maps links |
| **Services & Expertise** | The 6 expertise cards, condition tags, "why choose us" highlights |
| **Photos & Facilities** | The **hero (top) photo**, its floating card and trust badges, plus the facility photo cards |
| **Stats & Social** | The numbers (years, surgeries), social media links |
| **Design & Layout** | Booking button text, **show/hide and reword every section**, menu labels, footer credit, search keywords |

Edit anything, then press **Save changes** at the bottom.
Refresh the website — your changes appear **immediately, no rebuild needed**.

### Hiding or rewording a section

Go to **Design & Layout → Page sections**. Each section of the homepage has
an on/off switch and editable badge / heading / sub-heading text. Menu items
pointing to a hidden section disappear from the menu automatically.

### Changing photos

Click **Change photo** on any photo field and pick an image from your
computer or phone (JPG/PNG, up to 8 MB). Photos are stored in the Docker
data volume (`/app/data/uploads`), so they survive container rebuilds.

### Where do the Book buttons go?

The link is the **Booking URL** in the gear panel. Leave it empty to scroll
to the in-page contact form; set a full web address (e.g.
`https://caredeoghar.com`) to open an online booking page in a new tab.
The button *text* is editable in **/admin → Design & Layout**.

### Made a mess? Reset

**Design & Layout → Danger zone → Reset website to original content.**
All /admin edits are removed and the original built-in content returns.
Uploaded photos stay saved but are no longer shown.

---

## For reference: the old way still works

The file `src/config/site.config.ts` still holds the **default** content —
what the website shows before any edits are made in the panel. Anything you
save in the panel **overrides** those defaults. Use "Reset" first if you
want the config file's content to show again.
