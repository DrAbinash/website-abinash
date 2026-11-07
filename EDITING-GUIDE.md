# How to Edit Your Website — The Easy Way

Your website has one editing tool: the **Settings panel** at `/admin` —
every piece of text, photo, link and color on the site, plus the patient
enquiries inbox. There is also a small **"Site settings"** link at the very
bottom of the website (in the footer) that takes you straight there.

Sign in with your staff password. Until you set your own password in
**Design & Layout → Staff login password**, the server's bootstrap password
from `docker-compose.yml` applies.

## What the /admin panel can change (almost everything!)

| Tab | What's inside |
|---|---|
| **Doctor & About** | Name, qualifications, title, tagline, intro, about paragraphs, degrees, **doctor's photo** |
| **Contact & Hours** | Phone, emergency number, email, WhatsApp, OPD timings |
| **Hospital & Map** | Hospital name, address, hospital website link, areas served, Google Maps links and pin coordinates |
| **Services & Expertise** | The 6 expertise cards, condition tags, "why choose us" highlights |
| **Photos & Facilities** | The **hero (top) photo**, its floating card and trust badges, plus the facility photo cards |
| **Stats & Social** | The numbers (years, surgeries), social media links |
| **Design & Layout** | Color theme, booking link, booking button text, **show/hide and reword every section**, menu labels, footer credit, search keywords, Google Business Profile link, analytics token, staff password |

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

**Design & Layout → Online booking URL.** Leave it empty and the buttons use
the hospital's online booking page (with payment) at caredeoghar.com; set
`#contact` to scroll to the in-page enquiry form instead; any other full web
address opens there in a new tab. The button *text* is editable next to it.

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
