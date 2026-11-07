export const siteConfig = {
  /**
   * Text on the Book buttons. Where they LINK to is the "Booking URL" in
   * the on-page gear panel (SiteSettings.bookingUrl) — empty means the
   * in-page contact form.
   */
  booking: {
    label: "Book Appointment",
    shortLabel: "Book a Consultation",
  },
  hero: {
    image: "/hero-brain.png",
    imageAlt: "Illustration of the human brain symbolising neurosurgical care",
    floatingCardTitle: "Emergency",
    floatingCardText: "24×7 Cover",
    trustBadges: [
      "M.Ch. Neurosurgery",
      "10+ Years Experience",
      "24×7 Neurotrauma Cover",
    ],
  },
  doctor: {
    name: "Dr. Abinash Kumar",
    prefix: "Dr.",
    qualifications: ["MBBS", "M.S. (Master of Surgery)", "M.Ch. (Neurosurgery)", "FMAS", "FIAGES", "DNB"],
    title: "Consultant Neurosurgeon",
    tagline: "Advanced Neurosurgical & Spine Care, Powered by Precision",
    shortBio:
      "Consultant Neurosurgeon specializing in brain & spine surgery, neurotrauma, and minimally invasive neurosurgical procedures — serving the people of Deoghar and Jharkhand with compassion and excellence.",
    longBio: [
      "Dr. Abinash Kumar is a highly trained Consultant Neurosurgeon with advanced qualifications including M.Ch. in Neurosurgery, M.S. (Master of Surgery), DNB, and fellowships in Minimal Access Surgery (FMAS) and Gastrointestinal Endosurgery (FIAGES). His multidisciplinary surgical training enables him to deliver safe, precise, and patient-centric neurosurgical care.",
      "He manages the full spectrum of neurosurgical conditions — from complex brain tumours and spinal disorders to head injuries, stroke, and paediatric neurosurgical problems. His practice emphasizes minimally invasive techniques that mean smaller incisions, less pain, and faster recovery for patients.",
      "At Hope NeuroTrauma & Multi Speciality Hospital, Deoghar, Dr. Kumar leads a dedicated neurotrauma and spine programme, providing round-the-clock emergency neurosurgical cover for critically injured patients.",
    ],
    photo: "/doctor-photo.png",
    yearsOfExperience: 10,
  },
  hospital: {
    name: "Hope NeuroTrauma & Multi Speciality Hospital",
    shortName: "Hope NeuroTrauma Hospital",
    tagline: "Saving Brains. Saving Lives. Restoring Hope.",
    /** The hospital's own website, linked from this site's footer. */
    websiteUrl: "https://hope.caredeoghar.com",
    address: {
      line1: "Castairs Town",
      line2: "Near Bajla Mahila College",
      line3: "Deoghar, Jharkhand — 814112",
      country: "India",
      full: "Castairs Town, Near Bajla Mahila College, Deoghar - 814112, Jharkhand, India",
      city: "Deoghar",
      region: "Jharkhand",
      postalCode: "814112",
      /**
       * Map coordinates of the hospital entrance, from Google Maps
       * (right-click the pin — the two numbers at the top are lat,lng).
       * Left empty they are simply left out of the structured data.
       */
      latitude: "",
      longitude: "",
    },
    /**
     * Towns/districts the practice serves. Shown to Google as the service
     * area, so keep it to places patients really travel from.
     */
    areaServed: ["Deoghar", "Jharkhand"],
    mapEmbedUrl: "https://www.google.com/maps?q=Bajla+Mahila+College,+Deoghar,+Jharkhand+814112&output=embed",
    mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Bajla+Mahila+College+Deoghar+814112",
  },
  contact: {
    phone: "+91 99734 97200",
    phoneHref: "+919973497200",
    emergency: "+91 99734 97200",
    emergencyHref: "+919973497200",
    email: "care.deoghar@gmail.com",
    whatsapp: "+919973497200",
    whatsappMessage: "Hello Dr. Abinash Kumar, I would like to book a neurosurgical consultation.",
  },
  timings: [
    { day: "Monday", hours: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
    { day: "Friday", hours: "9:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed (Emergency Only)" },
  ],
  specializations: [
    { icon: "Brain", title: "Brain Tumour Surgery", description: "Microsurgical removal of benign and malignant brain tumours with intra-operative precision and neuro-monitoring." },
    { icon: "Activity", title: "Spine Surgery", description: "Treatment of disc prolapse, spinal stenosis, spondylolisthesis, and spinal tumours — including minimally invasive options." },
    { icon: "ShieldAlert", title: "Neurotrauma & Head Injury", description: "24×7 emergency management of traumatic brain injury, spinal cord injury, and polytrauma patients." },
    { icon: "HeartPulse", title: "Stroke & Vascular Neurosurgery", description: "Surgical and endovascular management of brain haemorrhage, aneurysms, and stroke." },
    { icon: "Baby", title: "Paediatric Neurosurgery", description: "Care for hydrocephalus, neural tube defects, and congenital brain & spine conditions in children." },
    { icon: "Stethoscope", title: "Minimally Invasive Surgery", description: "Keyhole & endoscopic neurosurgery (FMAS-trained) for smaller scars, less pain, and quicker recovery." },
  ],
  conditions: [
    "Brain Tumours", "Spinal Cord Tumours", "Slipped Disc (Prolapse)", "Spinal Stenosis",
    "Head Injury / Trauma", "Spinal Cord Injury", "Brain Haemorrhage", "Stroke",
    "Aneurysm & AVM", "Hydrocephalus", "Epilepsy", "Trigeminal Neuralgia",
    "Carpal Tunnel Syndrome", "Sciatica & Back Pain", "Spondylosis", "Paediatric Neuro Problems",
  ],
  education: [
    { degree: "M.Ch. Neurosurgery", detail: "Super-specialization in Neurosurgery", icon: "Brain" },
    { degree: "M.S. (Master of Surgery)", detail: "Postgraduate surgical training", icon: "GraduationCap" },
    { degree: "DNB", detail: "Diplomate of National Board", icon: "Award" },
    { degree: "FMAS", detail: "Fellowship in Minimal Access Surgery", icon: "Scissors" },
    { degree: "FIAGES", detail: "Fellowship — Indian Association of Gastrointestinal Endo-Surgeons", icon: "Award" },
    { degree: "MBBS", detail: "Bachelor of Medicine & Bachelor of Surgery", icon: "Stethoscope" },
  ],
  highlights: [
    { icon: "Clock", title: "24×7 Neurotrauma Cover", description: "Round-the-clock emergency surgical cover for head & spine injuries — because seconds matter." },
    { icon: "Microscope", title: "Microsurgical Precision", description: "Operating microscope and neuro-monitoring for maximum safety and accuracy." },
    { icon: "HandHeart", title: "Patient-First Approach", description: "Clear communication, honest advice, and surgery recommended only when truly needed." },
    { icon: "Users", title: "Multidisciplinary Team", description: "Collaboration with neurology, critical care, anaesthesia & rehabilitation." },
  ],
  facilities: [
    { image: "/gallery-ot.jpg", title: "Modern Operation Theatre", description: "State-of-the-art operating theatre equipped with surgical microscope and neuro-monitoring for safe brain & spine surgery." },
    { image: "/gallery-icu.jpg", title: "Critical Care & ICU", description: "Dedicated neuro-ICU with advanced monitoring, ventilators, and 24×7 critical care for neurotrauma and post-operative patients." },
    { image: "/gallery-consult.jpg", title: "Consultation & Diagnosis", description: "Patient-friendly consultation rooms for thorough examination, diagnosis, and honest treatment planning." },
    { image: "/gallery-hospital.jpg", title: "Multi Speciality Hospital", description: "A fully equipped multi speciality hospital serving the people of Deoghar and surrounding regions of Jharkhand." },
  ],
  stats: [
    { label: "Years of Neurosurgical Experience", value: 10, suffix: "+" },
    { label: "Neuro & Spine Surgeries", value: 2000, suffix: "+" },
    { label: "Neurotrauma Emergencies Managed", value: 1500, suffix: "+" },
    { label: "Happy Patients", value: 5000, suffix: "+" },
  ],
  social: { facebook: "", instagram: "", youtube: "", linkedin: "", twitter: "" },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "Facilities", href: "#facilities" },
    { label: "Credentials", href: "#credentials" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
  /**
   * Per-section controls: hide a section entirely, or reword its badge,
   * heading, and sub-heading — all editable from /admin → Design & Layout.
   */
  sections: {
    stats: { visible: true },
    about: { visible: true, badge: "About the Doctor" },
    expertise: {
      visible: true,
      badge: "Areas of Expertise",
      heading: "Specialized Neurosurgical Care",
      subheading:
        "Comprehensive expertise across brain, spine, and neurotrauma — delivered with precision and compassion.",
    },
    highlights: {
      visible: true,
      badge: "Why Choose Us",
      heading: "Care That Puts Patients First",
      subheading:
        "Every decision is guided by safety, precision, and the patient's long-term wellbeing.",
    },
    services: {
      visible: true,
      badge: "Conditions Treated",
      heading: "Comprehensive Neurosurgical Services",
      subheading:
        "From complex brain tumours to chronic back pain — expert diagnosis and surgical care for the full spectrum of neurosurgical conditions.",
      ctaTitle: "Not sure if your condition needs a neurosurgeon?",
      ctaText: "Get an honest, no-pressure consultation from Dr. Abinash Kumar.",
    },
    facilities: {
      visible: true,
      badge: "Our Facilities",
      heading: "Modern Infrastructure for Safe Outcomes",
      subheading:
        "A fully equipped multi-speciality hospital with advanced operating theatres, neuro-ICU, and patient-friendly consultation spaces.",
    },
    credentials: {
      visible: true,
      badge: "Education & Credentials",
      heading: "A Foundation of Rigorous Training",
      subheading:
        "Years of dedicated surgical and super-specialty training form the backbone of safe, evidence-based neurosurgical care.",
    },
    location: {
      visible: true,
      badge: "Location & Hours",
      heading: "Find Us in Deoghar",
      subheading:
        "Conveniently located in Castairs Town, Deoghar — serving the people of Jharkhand with round-the-clock neurotrauma care.",
    },
    contact: {
      visible: true,
      badge: "Get in Touch",
      heading: "Book an Appointment",
      subheading:
        "Send us a message and our team will get back to you to schedule your consultation with Dr. Abinash Kumar.",
    },
  },
  footer: {
    creditLine: "Designed for Dr. Abinash Kumar, Consultant Neurosurgeon",
  },
  seo: {
    /**
     * The phrase this site is trying to appear for on Google. It is used in
     * the title tag and the main heading, so it should be exactly what a
     * patient types — words first, not the doctor's name.
     */
    primaryKeyword: "Neurosurgeon in Deoghar",
    keywords: [
      "Neurosurgeon Deoghar",
      "Neurosurgeon in Deoghar",
      "Best neurosurgeon Deoghar",
      "Brain surgeon Deoghar",
      "Dr Abinash Kumar",
      "Neurosurgery Jharkhand",
      "Brain surgery Deoghar",
      "Brain tumour surgery Deoghar",
      "Spine surgery Deoghar",
      "Slipped disc treatment Deoghar",
      "Head injury hospital Deoghar",
      "Head injury treatment",
      "Neurotrauma hospital Jharkhand",
      "Hope NeuroTrauma Hospital",
    ],
    /**
     * Optional overrides for the homepage title and description. Left empty,
     * both are composed from the doctor, hospital and keyword fields above, so
     * editing those in /admin updates the search snippet automatically.
     * Google shows roughly 60 characters of a title and 155 of a description.
     */
    homeTitle: "",
    homeDescription: "",
    /** 1200×630 picture shown when the page is shared on WhatsApp/Facebook. */
    ogImage: "/og-image.jpg",
    /**
     * Link to the Google Business Profile — the listing with the map, photos
     * and reviews that appears for "neurosurgeon Deoghar". Paste the short
     * link from Google Business Profile → Share → Copy link.
     */
    googleBusinessProfileUrl: "",
    /**
     * Cloudflare Web Analytics beacon token (Cloudflare dashboard → Analytics
     * & Logs → Web Analytics → Add site → copy the token). Empty means no
     * analytics script is added to the page.
     */
    cloudflareAnalyticsToken: "",
  },
  /** Site-wide green branding (color presets live in the gear panel). */
  theme: { primary: "#047857", primaryDark: "#065f46", accent: "#d97706" },
};

export type SiteConfig = typeof siteConfig;
