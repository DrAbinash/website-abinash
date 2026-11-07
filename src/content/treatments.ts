import type { TreatmentContent } from "./types";

/**
 * One page per treatment. `title` matches the specialization name used on the
 * homepage so the expertise cards can link here; `searchTitle` is the phrase
 * the page is written to rank for and is kept short because the doctor's name
 * is appended to every title tag.
 *
 * Everything below is general patient information plus what is actually
 * available at this hospital — no prices, no insurance promises, no outcome
 * guarantees.
 */
export const treatments: TreatmentContent[] = [
  {
    slug: "brain-tumour-surgery",
    title: "Brain Tumour Surgery",
    searchTitle: "Brain Tumour Surgery in Deoghar",
    metaDescription:
      "Microsurgical brain tumour surgery in Deoghar with CT/MRI assessment, neuro-monitoring and ICU care. Consult Dr. Abinash Kumar, M.Ch. Neurosurgeon.",
    overview: [
      "A brain tumour is an abnormal growth inside the skull. Because the skull is a closed box, even a small growth can press on the brain and cause symptoms. Tumours may be benign (non-cancerous) or malignant (cancerous), and both can need surgery when they are large, growing, or pressing on important areas.",
      "Treatment is planned only after a proper neurological examination and imaging — usually a CT scan, and an MRI with contrast where available. The scan tells us the size, the exact location, and how much swelling there is around the tumour. That information decides whether surgery is needed now, whether it can be watched with repeat scans, or whether another specialist's opinion should be added.",
      "Brain tumour surgery in Deoghar is performed by Dr. Abinash Kumar, M.Ch. Neurosurgery, at Hope NeuroTrauma & Multi Speciality Hospital. Operations are carried out under an operating microscope with neuro-monitoring, and patients are looked after in the neuro-ICU afterwards, with round-the-clock nursing and monitoring.",
    ],
    whatWeDo: [
      "Full neurological examination and review of your CT / MRI films before any decision is made",
      "Microsurgical removal of benign and malignant brain tumours using an operating microscope",
      "Intra-operative neuro-monitoring to protect speech, movement and facial nerve function where the tumour sits near them",
      "Biopsy of deep or diffuse tumours when removing the whole growth would be unsafe, so a tissue diagnosis can guide further treatment",
      "Neuro-ICU care after surgery with ventilator support, monitoring and physiotherapy",
      "Coordination with oncology and radiotherapy services when the tumour type needs treatment after surgery",
    ],
    recovery:
      "Most patients stay in the ICU for one to three days after surgery and then move to a ward, with total hospital stay commonly around a week — longer if there was significant weakness or swelling before the operation. Headache, tiredness and some scalp numbness are expected in the first weeks and settle gradually. Physiotherapy starts early if there is any weakness. A follow-up scan is arranged before discharge or within a few weeks, and the histopathology report (the lab's diagnosis of the tumour type) is discussed at that visit, because it determines whether any further treatment is needed.",
    faq: [
      {
        question: "What are the common symptoms of a brain tumour?",
        answer:
          "Headache that is worse in the morning or wakes you from sleep, vomiting without nausea, fits or seizures, weakness or numbness on one side of the body, unsteadiness while walking, blurred or double vision, and personality or memory change. These symptoms have many other causes too, so the only way to know is a clinical examination plus a CT or MRI scan.",
      },
      {
        question: "Is brain surgery always needed for a tumour?",
        answer:
          "No. Small tumours found by accident, some benign growths, and tumours in areas where surgery would cause more harm than benefit are often watched with repeat scans, or treated with medicines, radiotherapy or oncology care. The decision is made after seeing the scan and examining you, and we will tell you honestly if surgery is not the right option for you.",
      },
      {
        question: "How soon can I travel to Deoghar for consultation?",
        answer:
          "Bring your films and reports rather than only a written summary — the actual CT or MRI images matter most. OPD runs Monday to Friday 9:00 AM to 5:00 PM and Saturday until 2:00 PM. If the patient has sudden severe headache, repeated vomiting, a fit or reduced consciousness, do not wait for an OPD appointment: call the 24×7 emergency number and come straight to the hospital.",
      },
    ],
    relatedConditions: ["brain-tumour", "epilepsy", "hydrocephalus", "spinal-cord-tumour"],
  },
  {
    slug: "spine-surgery",
    title: "Spine Surgery",
    searchTitle: "Spine Surgery in Deoghar",
    metaDescription:
      "Spine surgery in Deoghar for slipped disc, sciatica, spinal stenosis and spondylolisthesis — including keyhole options. Book a consultation today.",
    overview: [
      "Back and neck pain are among the most common complaints we see, and the large majority of patients do not need an operation. Careful examination, the right scan, medicines and physiotherapy settle most disc problems. Surgery is recommended when there is progressive weakness, when pain has not improved after a genuine trial of conservative treatment, or when there is compression of the spinal cord or of the nerves controlling the bladder and bowel.",
      "Spine surgery at Hope NeuroTrauma & Multi Speciality Hospital, Deoghar covers the neck (cervical spine), the mid-back and the lower back (lumbar spine). Procedures range from decompression — removing the disc fragment or bone that is pressing on a nerve — to fixation with screws and rods when the spine is unstable, and minimally invasive keyhole techniques for selected patients.",
      "Every case is discussed with the patient and family before surgery: what the scan shows, what operation is proposed, what it is expected to improve, and what the alternatives are. If conservative treatment is still the better option, that is what we will advise.",
    ],
    whatWeDo: [
      "Microdiscectomy for a prolapsed (slipped) disc causing sciatica or arm pain",
      "Decompression (laminectomy / foraminotomy) for spinal stenosis with walking difficulty",
      "Anterior cervical discectomy and fusion (ACDF) for neck disc prolapse with arm pain or cord compression",
      "Fixation and fusion with screws, rods and cages for spondylolisthesis, instability and spinal fractures",
      "Minimally invasive and keyhole spine surgery where the anatomy allows it",
      "Removal of spinal cord and nerve sheath tumours",
    ],
    recovery:
      "Patients having a straightforward discectomy usually walk the same day or the next morning and go home within a couple of days. Fusion surgery needs a longer stay, commonly three to five days. Back and leg pain from nerve compression often improves immediately, while numbness and weakness can take weeks or months to recover because the nerve itself heals slowly. A lumbar support belt, wound care, and a graded walking and exercise programme form part of recovery; heavy lifting, prolonged sitting and forward bending are avoided for the first six weeks or as advised at your follow-up.",
    faq: [
      {
        question: "Do I need surgery for a slipped disc?",
        answer:
          "Usually not. Around eight out of ten patients with a disc prolapse improve with rest, medicines and physiotherapy over six to twelve weeks. Surgery is considered when leg pain remains disabling after that trial, when weakness in the foot or leg is getting worse, or immediately when there is loss of bladder or bowel control — which is an emergency.",
      },
      {
        question: "What is minimally invasive spine surgery and who suits it?",
        answer:
          "It means reaching the compressed nerve through a much smaller opening, using tubular retractors and an endoscope or microscope, so the muscles are disturbed less. The benefits are less post-operative pain, a smaller scar and a quicker return to normal activity. It is not suitable for every case — severe deformity, multi-level stenosis and unstable slips still need open surgery. Dr. Kumar is FMAS-trained in minimal access techniques and will tell you which approach fits your scan.",
      },
      {
        question: "Which reports should I bring to the spine clinic?",
        answer:
          "Bring the MRI or CT films (not just the report), any X-rays including standing films, previous prescriptions, and a written note of what makes the pain better or worse and for how long you have had it. If you have diabetes, hypertension or are on blood thinners, tell us before the visit so the plan can account for it.",
      },
    ],
    relatedConditions: [
      "slipped-disc",
      "spinal-stenosis",
      "sciatica-back-pain",
      "spondylosis",
      "spinal-cord-tumour",
      "spinal-cord-injury",
    ],
  },
  {
    slug: "neurotrauma-head-injury",
    title: "Neurotrauma & Head Injury",
    searchTitle: "24×7 Neurotrauma Care in Deoghar",
    metaDescription:
      "24×7 neurotrauma and head injury care in Deoghar — emergency CT, brain and spine injury surgery, neuro-ICU. Call the emergency number at any hour.",
    overview: [
      "Road traffic accidents, falls from height and assaults cause head and spine injuries that need decisions within minutes, not hours. Blood collecting inside the skull can be drained and the pressure relieved; a depressed skull fracture can be elevated; a swollen brain can be treated with medicines, a ventilator, and where necessary a decompressive craniectomy. Outcomes depend far more on how fast the patient reaches a facility that can scan and operate than on anything else.",
      "Hope NeuroTrauma & Multi Speciality Hospital provides round-the-clock neurosurgical emergency cover for Deoghar and the surrounding districts of Jharkhand, along with the neighbouring regions patients are brought from. Dr. Abinash Kumar leads the neurotrauma programme, supported by critical care, anaesthesia, radiology and a dedicated neuro-ICU.",
      "The emergency pathway is deliberate: assessment of airway, breathing and circulation, a rapid neurological examination and Glasgow Coma Scale score, an urgent CT scan of the brain (and of the spine where indicated), then either admission for close observation or immediate surgery. Families are kept informed at each step.",
    ],
    whatWeDo: [
      "24×7 emergency neurosurgical cover — call the emergency number at any hour, including Sundays and holidays",
      "Urgent CT scanning and neurological assessment on arrival for every head injury",
      "Evacuation of extradural, subdural and intracerebral haematomas (blood clots inside the skull)",
      "Depressed skull fracture elevation and repair of scalp and skull injuries",
      "Decompressive craniectomy and medical management of severe brain swelling",
      "Surgery and stabilisation for cervical and thoracolumbar spine fractures and spinal cord injury",
      "Neuro-ICU care with ventilator support, invasive monitoring, and early rehabilitation",
    ],
    recovery:
      "Recovery from a head injury varies widely. A patient with a mild concussion often goes home the same day after observation and improves over days to weeks with rest. Someone who needed surgery for a clot may spend several days on a ventilator in the ICU, then weeks in hospital, followed by months of rehabilitation for speech, movement and memory. Physiotherapy and family support are the parts that most influence long-term recovery, and follow-up scans are arranged to check healing and to plan the next stage. Some patients need a cranioplasty (replacement of the bone flap) at a later date.",
    faq: [
      {
        question: "When is a head injury an emergency?",
        answer:
          "Call immediately and bring the patient in if there is loss of consciousness even briefly, repeated vomiting, a worsening or severe headache, drowsiness or difficulty waking, confusion or unusual behaviour, a fit, bleeding or clear fluid from the ear or nose, weakness or numbness in an arm or leg, unequal pupils, or a depressed area on the skull. Infants and elderly patients on blood thinners should be assessed after any significant head knock even if they look well.",
      },
      {
        question: "What should we do at the accident site before reaching hospital?",
        answer:
          "Do not move the patient unless there is immediate danger such as fire. Keep the head and neck in line with the body and avoid twisting the neck, because a spine injury may be present along with the head injury. Control visible bleeding with gentle pressure from a clean cloth. Nothing to eat or drink, in case an operation is needed. Note the time of the injury and what happened, and arrange transport to hospital while calling the emergency number.",
      },
      {
        question: "Is a CT scan needed for every head injury?",
        answer:
          "No. Scans are guided by established rules based on the level of consciousness, vomiting, age, signs of a skull fracture, blood-thinner use and the mechanism of injury. A mild head injury with no red flags may only need observation. Where a scan is indicated, delaying it is more risky than doing it, and the emergency team decides this on arrival.",
      },
    ],
    relatedConditions: ["head-injury", "spinal-cord-injury", "brain-haemorrhage"],
  },
  {
    slug: "stroke-vascular-neurosurgery",
    title: "Stroke & Vascular Neurosurgery",
    searchTitle: "Stroke & Brain Haemorrhage in Deoghar",
    metaDescription:
      "Emergency care for brain haemorrhage, stroke and ruptured aneurysm in Deoghar — urgent CT, clot surgery and neuro-ICU. 24×7 emergency cover.",
    overview: [
      "A stroke happens when part of the brain stops getting blood, either because an artery is blocked (ischaemic stroke) or because an artery has burst and blood is leaking into the brain (haemorrhagic stroke). Both are time-critical emergencies. The type can only be told apart on a CT scan, and the treatment for each is the opposite of the other — which is why a patient with sudden weakness or speech loss must reach a scanning facility immediately rather than being given home remedies or an unknown injection.",
      "Haemorrhagic stroke and brain haemorrhage from trauma, high blood pressure or a ruptured aneurysm are managed surgically and medically at this hospital: the clot may be drained, the pressure in the skull relieved, and the bleeding vessel secured. Blood pressure control, airway support, seizure prevention and ICU monitoring are started at the same time.",
      "For ischaemic stroke, the priority is rapid assessment, imaging and stroke-specific medical treatment along with the neurological and critical care teams, and surgery where there is swelling that threatens life. After the acute phase, rehabilitation — physiotherapy, speech and swallowing assessment — determines how much function comes back.",
    ],
    whatWeDo: [
      "Urgent CT scan and neurological assessment to identify the type of stroke on arrival",
      "Surgical evacuation of intracerebral, subdural and cerebellar haematomas",
      "External ventricular drain (EVD) placement when blood blocks the flow of brain fluid",
      "Decompressive craniectomy for malignant brain swelling",
      "Management of ruptured and unruptured aneurysms and arteriovenous malformations (AVM), with referral for endovascular coiling or embolisation where that is the better option",
      "Strict blood pressure control, airway and ventilator support, and seizure management in the neuro-ICU",
      "Early physiotherapy, swallowing and speech assessment during recovery",
    ],
    recovery:
      "The first 24 to 72 hours are the most critical, and patients with a significant bleed are monitored in the ICU throughout that period. Hospital stay depends on the size of the bleed and the patient's conscious level, ranging from a few days to several weeks. Recovery of movement and speech continues for months after discharge and is driven by consistent physiotherapy and speech therapy, control of blood pressure and diabetes, stopping tobacco and alcohol, and taking the prescribed medicines without gaps. Follow-up scans and clinic reviews are scheduled to monitor the brain and the underlying cause.",
    faq: [
      {
        question: "How do I recognise a stroke?",
        answer:
          "Use FAST: Face — one side of the face droops or the smile is uneven. Arms — one arm drifts down or cannot be raised. Speech — speech is slurred or the person cannot find words. Time — note the time symptoms started and call for emergency help immediately. Sudden severe headache, sudden loss of vision or balance, and sudden confusion are also stroke warnings.",
      },
      {
        question: "What is the difference between a stroke and a brain haemorrhage?",
        answer:
          "A brain haemorrhage is bleeding into or around the brain and is one type of stroke. The other, more common type is a blockage of an artery (ischaemic stroke). They look similar from outside, so a CT scan is essential: a blocked artery is treated to restore flow, while a bleed is treated to stop bleeding and relieve pressure. Giving the wrong treatment can cause serious harm.",
      },
      {
        question: "Can high blood pressure really cause a brain bleed?",
        answer:
          "Yes — long-standing, uncontrolled hypertension is one of the commonest causes of bleeding deep inside the brain. Taking blood-pressure medicine daily, reducing salt, keeping weight and diabetes under control, and avoiding tobacco and excess alcohol all lower the risk. If you have been told your blood pressure is high, do not stop the tablets when you feel well.",
      },
    ],
    relatedConditions: ["stroke", "brain-haemorrhage", "aneurysm-avm", "head-injury"],
  },
  {
    slug: "paediatric-neurosurgery",
    title: "Paediatric Neurosurgery",
    searchTitle: "Paediatric Neurosurgery in Deoghar",
    metaDescription:
      "Paediatric neurosurgery in Deoghar — hydrocephalus (VP shunt), spina bifida, skull and spine birth defects, and head injury in children. 24×7 cover.",
    overview: [
      "Children are not small adults: their skulls are still growing, their brains are still developing, and the conditions they present with are often congenital. Hydrocephalus (water on the brain), neural tube defects such as spina bifida and myelomeningocele, craniosynostosis, congenital cysts and tumours, and birth-related or accidental head injury all need a neurosurgeon who is used to operating on infants and children.",
      "Many of these problems are noticed at birth or in the first months of life — an abnormally large or rapidly growing head, a swelling or tuft of hair over the lower spine, legs that move less than expected, a bulging soft spot (fontanelle), vomiting and poor feeding, or delayed milestones. Early assessment matters, because treating hydrocephalus or a tethered cord before damage accumulates protects the child's development.",
      "Care for children at Hope NeuroTrauma & Multi Speciality Hospital, Deoghar includes surgery for hydrocephalus, repair of neural tube defects, and management of head and spine injury in children, with paediatric anaesthesia and ICU support, and honest, unhurried counselling for parents about what to expect.",
    ],
    whatWeDo: [
      "VP shunt surgery and shunt revision for hydrocephalus, including infected or blocked shunts",
      "Endoscopic third ventriculostomy (ETV) for selected children with obstructive hydrocephalus",
      "Repair of myelomeningocele, meningocele and other neural tube defects",
      "Management of tethered spinal cord and spinal dysraphism",
      "Surgery for congenital brain cysts, arachnoid cysts and paediatric brain and spine tumours",
      "Assessment and treatment of head injury in infants and children, including non-accidental injury where suspected",
      "Counselling for parents and coordination with paediatric and obstetric teams",
    ],
    recovery:
      "Children generally recover faster than adults, but they need close watching. After a shunt operation the stay is usually a few days, and parents are taught the warning signs of a blocked or infected shunt — fever, vomiting, headache, drowsiness, redness along the shunt tract, or the head starting to enlarge again — and told to come back immediately if any appear. After neural tube defect repair, wound care, positioning and bladder and bowel management form an ongoing part of care, and physiotherapy plus orthopaedic and urology input are often needed as the child grows. Long-term follow-up is essential, with head circumference and development checked at each visit.",
    faq: [
      {
        question: "What is hydrocephalus and why does my baby's head look large?",
        answer:
          "Hydrocephalus is a build-up of cerebrospinal fluid inside the brain's cavities, which raises the pressure and, in a baby whose skull bones have not fused, enlarges the head. It may be present at birth or develop after infection, bleeding or a tumour. The treatment is to divert the fluid, most often with a VP shunt, or with endoscopic third ventriculostomy in selected cases. Early treatment protects brain development.",
      },
      {
        question: "When should a child with a head injury be seen urgently?",
        answer:
          "Bring the child in immediately for any loss of consciousness, repeated vomiting, unusual drowsiness or irritability, a fit, fluid or blood from the ear or nose, a swelling or dent on the skull, weakness in an arm or leg, or refusal to feed in an infant. Babies cannot describe symptoms, so a fall from a height or a shaking injury always needs assessment even if the child seems normal at first.",
      },
      {
        question: "Can spina bifida be treated after birth?",
        answer:
          "The exposed neural tube defect is repaired surgically in the newborn period to protect the spinal cord from infection and further injury. The child then needs long-term multidisciplinary care — checking for hydrocephalus, managing bladder and bowel, physiotherapy, and orthopaedic review of the feet and hips. Some effects of the condition are permanent, and we will explain clearly what surgery can and cannot achieve for your child.",
      },
    ],
    relatedConditions: ["paediatric-neuro", "hydrocephalus", "head-injury", "spinal-cord-injury"],
  },
  {
    slug: "minimally-invasive-neurosurgery",
    title: "Minimally Invasive Surgery",
    searchTitle: "Keyhole Neurosurgery in Deoghar",
    metaDescription:
      "Keyhole and endoscopic neurosurgery in Deoghar by an FMAS-trained neurosurgeon — smaller incisions, less pain, shorter hospital stay. Book a consultation.",
    overview: [
      "Minimally invasive neurosurgery means reaching the problem through the smallest opening that still allows the operation to be done safely. Instead of a large incision and wide muscle dissection, the surgeon works through a keyhole opening, a tubular retractor, or an endoscope, using a microscope or camera for magnification.",
      "The benefits for the patient are real but they are not automatic: less tissue trauma means less post-operative pain, a smaller scar, less blood loss, a shorter hospital stay and a quicker return to work for many patients. The trade-off is that it demands precision and the right equipment, and it is not appropriate for every condition. A large tumour, a multi-level stenosis, a severe deformity or an unstable spine may still need a conventional open operation, and choosing keyhole surgery where it does not fit would be poor care.",
      `Dr. Abinash Kumar holds the Fellowship in Minimal Access Surgery (FMAS) in addition to M.Ch. Neurosurgery, M.S. and DNB, and applies these techniques to selected brain and spine operations at Hope NeuroTrauma & Multi Speciality Hospital, Deoghar. Whether your case suits a keyhole approach is decided only after examination and review of your imaging.`,
    ],
    whatWeDo: [
      "Keyhole craniotomy for selected brain tumours, haematomas and cysts",
      "Endoscopic and microscopic trans-sphenoidal / keyhole approaches where the anatomy allows",
      "Microdiscectomy through a tubular retractor for a prolapsed disc",
      "Minimally invasive decompression for lumbar and cervical spinal stenosis",
      "Minimally invasive lumbar fusion (MIS-TLIF) for selected unstable segments",
      "Endoscopic third ventriculostomy for obstructive hydrocephalus",
      "Percutaneous and image-guided procedures for pain syndromes such as trigeminal neuralgia",
    ],
    recovery:
      "Recovery is usually quicker than after the equivalent open operation. Patients having a keyhole discectomy commonly walk within hours and go home in a day or two; a minimally invasive fusion needs a few days in hospital with a brace. Pain is generally less in the first week, though nerve-related symptoms such as numbness still take weeks or months to settle. Wounds are small and heal quickly, but the usual precautions apply — keeping the wound dry, avoiding heavy lifting and straining, and attending the follow-up review so the surgeon can check healing and plan rehabilitation.",
    faq: [
      {
        question: "Is minimally invasive surgery safer than open surgery?",
        answer:
          "For the right patient it offers less tissue damage, less pain and a shorter stay. It is not universally safer — the safety of any operation depends mostly on correct patient selection, the surgeon's experience and the equipment available. If a keyhole route would compromise how completely the problem can be treated, the open operation is the safer choice, and we will explain why.",
      },
      {
        question: "How do I know if my case suits keyhole surgery?",
        answer:
          "It depends on the diagnosis, the size and location of the lesion, the number of spinal levels involved, the stability of the spine, your body build, and any previous surgery in the same area. Bring your MRI or CT films to the clinic; after examination Dr. Kumar will tell you which approach fits your case and what each option involves.",
      },
      {
        question: "What does FMAS mean?",
        answer:
          "FMAS is the Fellowship in Minimal Access Surgery — a structured surgical fellowship in laparoscopic and minimal-access techniques. Along with M.Ch. Neurosurgery, M.S. (General Surgery) and DNB, it reflects specific training in operating through small openings with instruments and cameras rather than large incisions.",
      },
    ],
    relatedConditions: ["slipped-disc", "spinal-stenosis", "carpal-tunnel", "trigeminal-neuralgia"],
  },
];

export function getTreatment(slug: string): TreatmentContent | undefined {
  return treatments.find((t) => t.slug === slug);
}

/** Matches a homepage specialization title to its page slug, if it has one. */
export function treatmentSlugByTitle(title: string): string | undefined {
  return treatments.find((t) => t.title === title)?.slug;
}
