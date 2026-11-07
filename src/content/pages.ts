/**
 * Copy for the three information pages. Kept next to the treatment and
 * condition content so all page text lives in one place and can be changed
 * without touching the components that render it.
 *
 * Titles use `fullTitle` (no "| Dr. Abinash Kumar" suffix) where the doctor's
 * name or the hospital name is already in the title.
 */
export const aboutPage = {
  path: "/about",
  title: "About Dr. Abinash Kumar — Neurosurgeon, Deoghar",
  metaDescription:
    "Dr. Abinash Kumar, Consultant Neurosurgeon in Deoghar — M.Ch. Neurosurgery, M.S., DNB, FMAS. Brain, spine and 24×7 neurotrauma care.",
  fullTitle: true,
  approach: [
    "Surgery is recommended only when it is genuinely the best option. Where medicines, physiotherapy or watchful waiting will serve you better, that is what you will be told — with the reasons.",
    "Every plan is explained in plain language before anything is decided: what the scan shows, what the operation involves, what it is expected to improve, what the risks are, and what happens if you choose not to have it.",
    "Families are kept informed. In an emergency, the surgeon speaks to the attendants directly rather than through messages, so decisions are made with the real picture in front of you.",
  ],
  faq: [
    {
      question: "What is a neurosurgeon and how is it different from a neurologist?",
      answer:
        "A neurologist treats brain and nerve conditions with medicines — epilepsy, migraine, stroke prevention, nerve disorders. A neurosurgeon is a surgeon who operates on the brain, spine and nerves, after M.Ch. or equivalent super-specialty training. Many patients see both: a neurologist for ongoing medical care and a neurosurgeon when an operation is needed.",
    },
    {
      question: "Do I need a referral to book a consultation?",
      answer:
        "No. You can book directly. If you have already seen another doctor, bring their prescription and any scan reports — it saves time and avoids repeating tests unnecessarily. For emergencies there is no appointment needed: come straight to the hospital or call the 24×7 number.",
    },
    {
      question: "Which hospital does Dr. Kumar operate at?",
      answer:
        "Hope NeuroTrauma & Multi Speciality Hospital, Castairs Town, near Bajla Mahila College, Deoghar. It has a modern operation theatre with an operating microscope and neuro-monitoring, a dedicated neuro-ICU with ventilators, and round-the-clock emergency cover.",
    },
  ],
};

export const hospitalPage = {
  path: "/hospital",
  title: "Hope NeuroTrauma & Multi Speciality Hospital, Deoghar",
  metaDescription:
    "Hope NeuroTrauma & Multi Speciality Hospital in Castairs Town, Deoghar — neurosurgical OT, neuro-ICU, imaging and 24×7 emergency head & spine injury cover.",
  fullTitle: true,
  intro: [
    "Hope NeuroTrauma & Multi Speciality Hospital is a multi-speciality hospital in Castairs Town, Deoghar, built around one priority: emergency neurosurgical care for a region that previously had to travel to Ranchi, Patna or Kolkata for it. The neurotrauma and spine programme is led by Dr. Abinash Kumar, M.Ch. Neurosurgery, and is supported by critical care, anaesthesia, radiology and rehabilitation.",
    "The hospital runs a 24×7 emergency service for head and spine injury. A patient arriving at night is assessed, scanned and, where needed, operated on here — which is the single most important factor in survival and recovery after a severe head injury.",
  ],
  capabilities: [
    {
      title: "Neurosurgical operation theatre",
      text: "Operating microscope and intra-operative neuro-monitoring for brain and spine surgery, with a trained OT team available around the clock for emergencies.",
    },
    {
      title: "Neuro-ICU and critical care",
      text: "Dedicated intensive care with ventilators, continuous monitoring and 24×7 nursing for head injury, post-operative patients and those needing airway support.",
    },
    {
      title: "Imaging and diagnosis",
      text: "CT scanning for emergency head and spine assessment, with MRI arranged for detailed evaluation of tumours, discs and the spinal cord.",
    },
    {
      title: "Multi-speciality support",
      text: "Anaesthesia, general surgery, orthopaedics, medicine and paediatrics under one roof, so a patient with multiple injuries is not sent elsewhere mid-treatment.",
    },
    {
      title: "Rehabilitation",
      text: "Physiotherapy started early after surgery or injury, with guidance for the family on exercises, positioning and wound care at home.",
    },
    {
      title: "Emergency ambulance access",
      text: "Round-the-clock emergency cover on the 24×7 number, with the OT and ICU teams called in immediately for head, brain and spine injury.",
    },
  ],
  faq: [
    {
      question: "Where exactly is the hospital in Deoghar?",
      answer:
        "Castairs Town, near Bajla Mahila College, Deoghar 814112, Jharkhand. The map on this page opens the location directly in Google Maps, and the address is the same one used on the Google Business Profile listing.",
    },
    {
      question: "Is the hospital open on Sundays and holidays?",
      answer:
        "The emergency and neurotrauma service runs 24×7, every day of the year including Sundays and holidays — head injury, stroke and spine injury are seen at any hour. OPD consultation follows the timings listed on this page, so check those before travelling for a routine visit.",
    },
    {
      question: "What should we bring when admitted in an emergency?",
      answer:
        "Any scan films or reports already done, the list of current medicines, an identity document, and any insurance or scheme paperwork you hold. Do not delay travel to collect documents — bring a family member who can fetch them afterwards, because time matters more than paperwork in an emergency.",
    },
  ],
};

export const contactPage = {
  path: "/contact",
  title: "Contact & Appointments in Deoghar",
  metaDescription:
    "Book a neurosurgery consultation in Deoghar — call the clinic, WhatsApp your reports, or send a message. OPD Monday to Saturday, with 24×7 emergency cover.",
  fullTitle: false,
  guidance: [
    {
      title: "For a routine consultation",
      text: "Use the booking button, WhatsApp your reports, or send the enquiry form below. OPD timings for each day are listed on this page. Bring your scan films and current prescriptions.",
    },
    {
      title: "For an emergency",
      text: "Do not wait for a reply to a message. Call the 24×7 emergency number and come to the hospital. Head injury, sudden weakness, a fit, or a severe sudden headache all need immediate assessment.",
    },
    {
      title: "For a second opinion",
      text: "Send your MRI or CT films and the reports on WhatsApp or by email, with a short note of the symptoms and how long you have had them. You will get an honest view, including whether surgery is needed at all.",
    },
  ],
  faq: [
    {
      question: "How quickly will I get a reply to the contact form?",
      answer:
        "Enquiries sent through this website are received by the clinic team directly and are normally answered within one working day. The form is not monitored continuously, so for anything urgent call or WhatsApp instead of waiting for a reply.",
    },
  ],
  /** Shown when the Book button points at the online booking page. */
  bookingFaq: {
    question: "Can I book and pay for my appointment online?",
    answer:
      "Yes. The Book Appointment button opens the hospital's online booking page, where you can reserve your consultation slot and pay securely. If you would rather not pay online, call the OPD number and the team will book your appointment and you can pay at the hospital.",
  },
  /** Shown instead when the Book button opens the enquiry form. */
  formFaq: {
    question: "How do I book an appointment?",
    answer:
      "Send the enquiry form on this page with your name, phone number and a short note of your symptoms, or call the OPD number during working hours. You can also WhatsApp your scan reports. For an emergency, do not wait for a reply — call the 24×7 number.",
  },
};
