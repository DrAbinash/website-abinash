import type { ConditionContent } from "./types";

/**
 * One page per condition. `title` matches the condition name listed on the
 * homepage so the chips there can link to these pages. `emergency` is only
 * filled for conditions that genuinely need an ambulance — it renders as a
 * red callout and drives the emergency wording on the page.
 *
 * General patient information only: no prices, no insurance claims, no
 * promises about outcomes.
 */
export const conditions: ConditionContent[] = [
  {
    slug: "brain-tumour",
    title: "Brain Tumours",
    searchTitle: "Brain Tumour: Symptoms & Treatment",
    metaDescription:
      "Brain tumour symptoms, diagnosis and treatment explained — when surgery is needed, what the scan shows and what to bring to your consultation in Deoghar.",
    intro:
      "A brain tumour is an abnormal growth of cells inside the skull. Because the skull cannot expand, a growing tumour raises the pressure inside the head and presses on the brain around it, which is what produces the symptoms. Tumours may be benign (non-cancerous) or malignant (cancerous), and may start in the brain itself or spread from elsewhere in the body.",
    symptoms: [
      "Headache that is worst on waking, or that wakes you from sleep and is getting more frequent",
      "Vomiting, often in the morning and not preceded by nausea",
      "Fits (seizures) in someone who has never had one before",
      "Weakness, numbness or clumsiness on one side of the body",
      "Unsteadiness while walking, or slurred speech",
      "Blurred vision, double vision, or loss of part of the field of vision",
      "Personality change, memory loss, confusion or drowsiness",
    ],
    treatment:
      "Diagnosis needs a neurological examination plus imaging — a CT scan, and an MRI with contrast where available, which shows the tumour's size, position and how much swelling surrounds it. Treatment depends on those findings and on the tumour type: some are removed microsurgically, some are biopsied first so that oncology can plan chemotherapy or radiotherapy, and a few small or incidental tumours are simply watched with repeat scans. Steroid medicines are often used to reduce swelling while the plan is made. Nothing is decided without showing you the films and explaining the options.",
    emergency: [
      "Sudden severe headache with vomiting and drowsiness",
      "A first-ever fit, or fits that do not stop",
      "Rapidly worsening weakness or inability to wake the patient properly",
    ],
    faq: [
      {
        question: "Are all brain tumours cancer?",
        answer:
          "No. Many brain tumours are benign and grow slowly — meningiomas, pituitary adenomas, acoustic neuromas and some gliomas behave this way. A benign tumour can still cause serious symptoms by pressing on the brain, and surgery may still be needed, but benign does not mean the same treatment as cancer. The exact type is confirmed only by the histopathology report after tissue is examined.",
      },
      {
        question: "What should I bring to my first consultation?",
        answer:
          "Bring the actual CT or MRI films or the CD, not only the typed report — the images are what the surgeon needs. Add all previous reports, the list of medicines you are taking, and a written note of your symptoms with the dates they started. If you have diabetes, hypertension, or take blood thinners, mention it at the start of the visit.",
      },
    ],
    relatedTreatment: "brain-tumour-surgery",
  },
  {
    slug: "spinal-cord-tumour",
    title: "Spinal Cord Tumours",
    searchTitle: "Spinal Cord Tumour: Signs & Surgery",
    metaDescription:
      "Spinal cord tumour symptoms — back pain, weakness, numbness and bladder change — plus how they are diagnosed and treated. Consult in Deoghar.",
    intro:
      "A spinal cord tumour is a growth within the spinal canal: it may arise from the cord itself, from the nerve roots or the membranes covering the cord, or spread from a tumour elsewhere. Even a small tumour here causes trouble, because the spinal canal is a narrow bony tube and the cord has nowhere to move aside.",
    symptoms: [
      "Back or neck pain that persists at night and is not relieved by rest",
      "Pain radiating into an arm, the chest or a leg, often on one side",
      "Progressive weakness or heaviness in the legs (or arms, for a neck-level tumour)",
      "Numbness, tingling or a band-like sensation around the chest or abdomen",
      "Unsteadiness while walking and frequent falls",
      "Difficulty passing urine, or loss of control of urine or stool",
    ],
    treatment:
      "MRI of the spine with contrast is the investigation of choice and shows the level, size and whether the tumour is inside or outside the cord. Most symptomatic spinal tumours are treated by microsurgical removal through a laminectomy, with neuro-monitoring to protect cord function during the operation. Where a tumour cannot be safely removed completely, a biopsy establishes the diagnosis and radiotherapy or oncology treatment follows. Steroids are used to reduce swelling around the cord while the plan is made. Tumours that have spread from elsewhere are treated together with the oncology team.",
    emergency: [
      "Rapidly increasing weakness in both legs",
      "New inability to pass urine, or loss of bladder or bowel control",
      "Numbness around the groin or buttocks (saddle area)",
    ],
    faq: [
      {
        question: "How is a spinal tumour different from a slipped disc?",
        answer:
          "Both can cause back pain and nerve symptoms, but a tumour typically causes pain that is worse at night and not eased by rest, with steady progression and often symptoms on both sides or bladder involvement. A disc usually causes pain that changes with posture and movement. MRI separates the two clearly, which is why imaging matters rather than guessing.",
      },
      {
        question: "Will I be paralysed if I have spinal cord surgery?",
        answer:
          "Surgery on the spinal cord carries a real risk, and that risk depends on the tumour's position, size and whether the cord is already damaged before the operation. Microsurgical technique with neuro-monitoring is used specifically to reduce this risk. We will explain your individual risk honestly before you decide, and delaying surgery when the cord is being compressed usually carries a greater risk of permanent weakness.",
      },
    ],
    relatedTreatment: "spine-surgery",
  },
  {
    slug: "slipped-disc",
    title: "Slipped Disc (Prolapse)",
    searchTitle: "Slipped Disc Treatment in Deoghar",
    metaDescription:
      "Slipped disc explained: why leg pain and numbness happen, what helps without surgery, and the warning signs that need urgent treatment in Deoghar.",
    intro:
      "A slipped disc — properly called a prolapsed or herniated disc — happens when the soft inner material of a spinal disc pushes out through its tougher outer ring and presses on a nearby nerve root. In the lower back this produces sciatica: pain running down the buttock and leg. In the neck it causes pain, numbness or weakness down the arm.",
    symptoms: [
      "Sharp pain travelling from the lower back into the buttock, thigh and below the knee",
      "Numbness, tingling or pins and needles in the leg or foot",
      "Pain that worsens on sitting, bending forward, coughing or sneezing",
      "Weakness — difficulty standing on toes or heels, or a foot that slaps while walking",
      "Neck disc prolapse: pain down the arm with numbness in the fingers",
      "Back pain that comes on after lifting, a jerk, or prolonged sitting",
    ],
    treatment:
      "Most patients improve without surgery. The first phase is a short period of relative rest, pain and anti-inflammatory medicines, muscle relaxants where needed, and then structured physiotherapy with core strengthening and posture correction — usually over six to twelve weeks. An MRI is arranged when symptoms persist, when there is weakness, or when surgery is being considered. If disabling leg pain continues after a genuine trial of conservative treatment, or weakness is progressing, a microdiscectomy removes the fragment pressing on the nerve, often through a small keyhole incision, with most patients walking the same or next day.",
    emergency: [
      "Loss of control of urine or stool, or inability to pass urine",
      "Numbness around the genitals, buttocks or inner thighs (saddle numbness)",
      "Weakness in both legs that is getting worse",
      "These suggest cauda equina syndrome and need emergency surgery within hours",
    ],
    faq: [
      {
        question: "Will my slipped disc heal on its own?",
        answer:
          "Often, yes. The prolapsed material shrinks over weeks to months and the inflammation around the nerve settles, so most people improve with medicines and physiotherapy alone. What matters is not pushing through severe pain and not ignoring red flags — bladder or bowel change, saddle numbness or worsening weakness need urgent surgical assessment.",
      },
      {
        question: "Is bed rest the right treatment for a disc prolapse?",
        answer:
          "Only briefly. One or two days of rest during severe pain is reasonable, but prolonged bed rest weakens the muscles, stiffens the spine and delays recovery. Modern advice is to stay as active as the pain allows, avoid lifting and forward bending, and start guided exercises early. Your physiotherapy plan is part of the treatment, not an optional extra.",
      },
    ],
    relatedTreatment: "spine-surgery",
  },
  {
    slug: "spinal-stenosis",
    title: "Spinal Stenosis",
    searchTitle: "Spinal Stenosis: Symptoms & Treatment",
    metaDescription:
      "Spinal stenosis explained — leg pain and numbness on walking that eases on bending forward, how it is diagnosed, and when decompression surgery helps.",
    intro:
      "Spinal stenosis is a narrowing of the spinal canal or of the openings where the nerves exit. It usually develops with age as the discs lose height, the joints thicken and the ligaments become bulky, so the space for the nerves slowly reduces. It can affect the lower back, the neck, or both.",
    symptoms: [
      "Pain, heaviness or numbness in both legs on walking that forces you to stop",
      "Relief on sitting down or bending forward — the classic shopping-trolley sign",
      "Symptoms that get worse when standing straight or walking downhill",
      "Cramping or weakness in the legs after a fixed distance",
      "In the neck: numb or clumsy hands, difficulty with buttons and handwriting",
      "Unsteadiness while walking and a feeling of imbalance",
    ],
    treatment:
      "MRI of the spine confirms the narrowing and shows which levels are involved; X-rays including standing and bending views check whether the spine is unstable. Treatment starts conservatively — physiotherapy focused on flexion exercises and core strength, medicines for nerve pain, activity modification and weight reduction. Where walking distance is severely limited, or there is progressive weakness, or the spinal cord is compressed in the neck, surgical decompression (laminectomy or foraminotomy) opens the canal and frees the nerves. Fusion is added only when there is instability as well, and a minimally invasive approach is possible in selected single-level cases.",
    emergency: [
      "New loss of bladder or bowel control",
      "Rapidly worsening weakness in both legs",
      "Frequent falls or sudden inability to walk",
    ],
    faq: [
      {
        question: "Is spinal stenosis the same as a slipped disc?",
        answer:
          "No, though both can coexist. A slipped disc is a single focal problem, often in a younger patient, causing pain down one leg that worsens on bending forward. Stenosis is a gradual, age-related narrowing that typically affects both legs and improves when you bend forward or sit. The treatment logic differs, which is why the MRI findings matter.",
      },
      {
        question: "Can stenosis be treated without surgery?",
        answer:
          "Yes, in many patients — physiotherapy, nerve-pain medicines, posture and weight management can improve the walking distance and quality of life, although they do not widen a narrowed canal. Surgery is considered when symptoms remain disabling after conservative treatment, when weakness progresses, or when the spinal cord itself is being compressed.",
      },
    ],
    relatedTreatment: "spine-surgery",
  },
  {
    slug: "head-injury",
    title: "Head Injury / Trauma",
    searchTitle: "Head Injury Treatment in Deoghar",
    metaDescription:
      "Head injury: what to do in the first minutes, the red flags that need an urgent CT scan, and how head injuries are treated. 24×7 emergency cover, Deoghar.",
    intro:
      "Head injury ranges from a mild concussion after a fall to a severe traumatic brain injury needing emergency surgery. What matters most in the first hours is not the size of the wound on the scalp but what is happening inside the skull: bleeding, swelling and rising pressure can develop over minutes to hours after an injury that initially looked minor.",
    symptoms: [
      "Loss of consciousness, even briefly, at the time of injury",
      "Headache that is worsening, or severe headache",
      "Repeated vomiting",
      "Drowsiness, confusion, or difficulty waking the person",
      "Bleeding or clear watery fluid from the ear or nose",
      "Unequal pupils, blurred or double vision",
      "Weakness or numbness in an arm or leg, slurred speech, fits",
      "In infants: a bulging soft spot, poor feeding, high-pitched crying, unusual drowsiness",
    ],
    treatment:
      "On arrival the team assesses airway, breathing and circulation, records the Glasgow Coma Scale, and examines the head, neck and the rest of the body — head injuries often come with other injuries in road accidents. An urgent CT scan of the brain is done where indicated by established criteria, with CT of the cervical spine or other regions as needed. Mild injuries are observed and discharged with written warning advice. A blood clot inside the skull (extradural or subdural haematoma), a depressed skull fracture, or severe brain swelling is treated surgically — evacuation of the clot, elevation of the fracture, or decompressive craniectomy — followed by neuro-ICU care with monitoring, ventilator support where needed, and early physiotherapy.",
    emergency: [
      "Any loss of consciousness, however brief",
      "Repeated vomiting, worsening headache, or increasing drowsiness",
      "A fit, weakness, slurred speech, or confusion",
      "Blood or clear fluid from the ear or nose, or a dent in the skull",
      "Any significant head injury in an infant, an elderly person, or anyone on blood thinners",
      "Call the 24×7 emergency number and come straight to hospital — do not wait for morning",
    ],
    faq: [
      {
        question: "Should I let someone with a head injury sleep?",
        answer:
          "A person with a minor head injury who is fully alert, has no vomiting and has been assessed can sleep, but they should be checked regularly and be easy to rouse. If the person cannot be woken properly, is confused when woken, vomits, or has a fit, that is an emergency — call for help and go to hospital immediately. Where any red flag is present, assessment must not be delayed until morning.",
      },
      {
        question: "How long does recovery from a head injury take?",
        answer:
          "Mild concussion usually settles over days to a couple of weeks with rest, a gradual return to activity, and avoiding screens and alcohol in the early phase. Moderate and severe injuries need weeks of hospital care and months of rehabilitation for movement, speech and memory; recovery continues for a year or more and is helped most by consistent physiotherapy, family support and follow-up reviews. Some patients need further surgery, such as replacing the removed bone flap.",
      },
    ],
    relatedTreatment: "neurotrauma-head-injury",
  },
  {
    slug: "spinal-cord-injury",
    title: "Spinal Cord Injury",
    searchTitle: "Spinal Cord Injury Treatment in Deoghar",
    metaDescription:
      "Spinal cord injury: how to move a casualty safely, what surgery and ICU care involve, and what recovery looks like. 24×7 emergency cover in Deoghar.",
    intro:
      "A spinal cord injury damages the cord that carries signals between the brain and the body, causing loss of movement and sensation below the level of injury. Most are caused by road traffic accidents, falls from height, and diving or workplace accidents. The cord can be bruised, compressed by a broken vertebra or a blood clot, or torn — and how it is handled in the first minutes affects the final outcome.",
    symptoms: [
      "Weakness or complete loss of movement in the arms and/or legs after an accident",
      "Numbness or loss of sensation below a certain level on the body",
      "Severe neck or back pain, or a visibly deformed spine",
      "Difficulty breathing or a weak cough with a neck-level injury",
      "Loss of control of urine or stool, or inability to pass urine",
      "Low blood pressure with a slow pulse in severe injuries (spinal shock)",
    ],
    treatment:
      "Pre-hospital care is decisive: the patient must be moved on a rigid board with the head, neck and trunk kept in line, never lifted by the arms and legs or bent forward. In hospital the priorities are protecting the airway and breathing, maintaining blood pressure to keep the cord perfused, and immobilising the spine. CT and MRI show the fractured vertebrae and the state of the cord. Surgery is performed to decompress the cord and to stabilise the spine with screws, rods or cages, allowing the patient to sit and mobilise early. Afterwards, care in the ICU and ward focuses on preventing pressure sores, chest infection, clots and urinary problems, and on physiotherapy, occupational therapy and bladder and bowel retraining — the rehabilitation that determines long-term independence.",
    emergency: [
      "Any accident victim with neck or back pain plus weakness or numbness",
      "Inability to move the arms or legs, or loss of bladder/bowel control",
      "Difficulty breathing after a neck injury",
      "Do not move the casualty unnecessarily — call the emergency number and wait for trained help",
    ],
    faq: [
      {
        question: "Can a spinal cord injury be cured?",
        answer:
          "Some injuries are a bruise or concussion of the cord rather than a complete tear, and recovery of movement and sensation can be substantial, especially when the cord is decompressed early and blood pressure is maintained. A complete injury — no movement or sensation below the level — has limited recovery. Surgery stabilises the spine and prevents further damage; rehabilitation determines how much function the patient regains and how independent they become.",
      },
      {
        question: "How should a person with a suspected spine injury be transported?",
        answer:
          "Keep the head, neck and back in a straight line and move the person only if there is immediate danger. Use a rigid board or stretcher, with several people lifting together while one person holds the head still. Never sit the person up, bend them forward, or carry them over a shoulder. Call the emergency number first so the receiving team can prepare.",
      },
    ],
    relatedTreatment: "neurotrauma-head-injury",
  },
  {
    slug: "brain-haemorrhage",
    title: "Brain Haemorrhage",
    searchTitle: "Brain Haemorrhage: Causes & Treatment",
    metaDescription:
      "Brain haemorrhage explained — sudden severe headache, vomiting and weakness, why urgent CT scanning matters, and how bleeding in the brain is treated.",
    intro:
      "A brain haemorrhage is bleeding into the brain tissue or into the spaces around it. The collecting blood both damages the brain it touches and raises the pressure inside the skull. The commonest causes are long-standing high blood pressure, head trauma, a ruptured aneurysm or AVM, blood-thinning medicines, and bleeding into a tumour.",
    symptoms: [
      "Sudden, severe headache — often described as the worst ever",
      "Vomiting and neck stiffness",
      "Weakness or numbness on one side of the body, or a drooping face",
      "Slurred speech, confusion, or inability to understand speech",
      "Loss of vision or double vision",
      "A fit, drowsiness, or loss of consciousness",
    ],
    treatment:
      "A CT scan of the brain is the first investigation and is available urgently here; it shows the bleed within minutes and separates it from a blocked artery, which is treated completely differently. Management includes strict blood pressure control, reversal of any blood thinner, airway and ventilator support, seizure prevention, and ICU monitoring of the pressure inside the skull. Surgery is needed where a clot is large and accessible, where there is a bleed in the back of the brain pressing on the brainstem, where fluid circulation is blocked (an external ventricular drain), or where swelling threatens life (decompressive craniectomy). A ruptured aneurysm must be secured to prevent re-bleeding, by clipping or by endovascular coiling at a specialised centre. Rehabilitation starts as soon as the patient is stable.",
    emergency: [
      "Sudden severe headache with vomiting",
      "Sudden weakness, facial droop or speech difficulty",
      "Drowsiness, confusion or loss of consciousness",
      "A fit after any of the above",
      "This is a time-critical emergency — call the 24×7 number and go to hospital immediately",
    ],
    faq: [
      {
        question: "What is the difference between a brain haemorrhage and a stroke?",
        answer:
          "A brain haemorrhage is a type of stroke — bleeding into the brain. The other type is ischaemic, where an artery is blocked. From the outside the two can look identical, so a CT scan is essential before any treatment: medicines that dissolve a clot would be dangerous in a bleed, and the wrong injection given at home can be fatal.",
      },
      {
        question: "How can I reduce my risk of a brain bleed?",
        answer:
          "Control blood pressure with daily medicine and less salt, keep diabetes and cholesterol managed, stop tobacco and limit alcohol, use a helmet on two-wheelers and a seatbelt in cars, and never take blood thinners without medical supervision — and never stop or change them on your own either. Regular follow-up for hypertension is the single most effective step.",
      },
    ],
    relatedTreatment: "stroke-vascular-neurosurgery",
  },
  {
    slug: "stroke",
    title: "Stroke",
    searchTitle: "Stroke: FAST Signs & Emergency Treatment",
    metaDescription:
      "Stroke signs using FAST, why the first hours decide recovery, and what happens after admission — CT scan, ICU care and rehabilitation. Deoghar.",
    intro:
      "Stroke is a sudden loss of brain function caused by an interruption of its blood supply. It is a medical emergency in which minutes determine how much function survives. Around four out of five strokes are caused by a blocked artery; the rest are caused by bleeding. Only a brain scan can tell which — and the treatments are opposite to each other.",
    symptoms: [
      "Face drooping on one side, or an uneven smile",
      "Arm weakness — one arm drifts down when both are raised",
      "Speech that is slurred, or difficulty finding or understanding words",
      "Sudden loss of vision in one eye or one half of the field of vision",
      "Sudden unsteadiness, severe dizziness or loss of balance",
      "Sudden severe headache with no obvious cause",
    ],
    treatment:
      "The first step is an urgent CT scan of the brain, along with blood tests, blood pressure and heart rhythm assessment. Management then depends on the type and the time since symptoms began, and includes stroke-specific medical therapy, strict blood pressure and blood sugar control, prevention of clots and chest infection, swallowing assessment before any food or drink is given, and ICU care where consciousness is affected. Surgery is required for significant bleeds, for a blocked fluid pathway, or for malignant swelling. Rehabilitation — physiotherapy, speech and occupational therapy — begins as early as it is safe, and secondary prevention (medicines, blood pressure, diabetes, cholesterol, tobacco) is what stops the next stroke.",
    emergency: [
      "Any sudden face droop, arm weakness or speech difficulty",
      "Sudden vision loss, severe imbalance or the worst headache of your life",
      "Note the time symptoms started — it changes what treatment is possible",
      "Do not give food, water or any tablet, and do not wait to see if it improves",
    ],
    faq: [
      {
        question: "How long do I have to reach hospital after a stroke?",
        answer:
          "The sooner the better — treatment options depend directly on how much time has passed since symptoms began, and brain tissue is lost every minute. Note the exact time the person was last seen normal and go straight to a facility with CT scanning. Do not wait at home for symptoms to improve and do not try home remedies; both cost time that cannot be recovered.",
      },
      {
        question: "Will I recover fully after a stroke?",
        answer:
          "Recovery depends on the size and location of the stroke, how fast treatment was given, and how consistently rehabilitation is done afterwards. Many patients improve substantially over the first three to six months and continue to gain for a year or more. Some deficits are permanent. The most important factors you control are taking the prescribed medicines, attending physiotherapy, and managing blood pressure, sugar and cholesterol.",
      },
    ],
    relatedTreatment: "stroke-vascular-neurosurgery",
  },
  {
    slug: "aneurysm-avm",
    title: "Aneurysm & AVM",
    searchTitle: "Brain Aneurysm & AVM: Warning Signs",
    metaDescription:
      "Brain aneurysm and AVM explained — what they are, the warning signs of a rupture, and how they are diagnosed and treated. Emergency cover in Deoghar.",
    intro:
      "An aneurysm is a weak, ballooned-out section of an artery in the brain that can burst and cause bleeding into the space around the brain. An arteriovenous malformation (AVM) is a tangle of abnormal arteries and veins that are connected without the normal capillaries between them. Both can be silent for years and then present suddenly with a bleed.",
    symptoms: [
      "Sudden, explosive headache — the worst of your life, reaching maximum intensity within seconds",
      "Vomiting, neck stiffness and sensitivity to light",
      "Drowsiness, confusion or loss of consciousness",
      "A fit",
      "Double vision, a drooping eyelid or a dilated pupil from a growing aneurysm pressing on a nerve",
      "Recurrent headaches or neurological deficits in some AVMs",
    ],
    treatment:
      "A ruptured aneurysm is diagnosed by urgent CT scan, sometimes with a lumbar puncture or CT angiography, and needs treatment in a specialised neurosurgical centre. The aneurysm must be secured to prevent re-bleeding, either by surgical clipping through a craniotomy or by endovascular coiling from an artery in the groin — the choice depends on the aneurysm's size, shape and position. An unruptured aneurysm found by chance is assessed for its risk of rupture and may be watched with repeat scans or treated electively. AVMs may be treated by embolisation, surgery, stereotactic radiosurgery, or a combination, planned at a centre with those facilities. In Deoghar, emergency assessment, stabilisation, CT scanning and ICU care are provided, with coordinated referral and transfer where definitive endovascular or radiosurgical treatment is required.",
    emergency: [
      "Sudden severe headache of maximum intensity within seconds",
      "Headache with vomiting, neck stiffness, drowsiness or a fit",
      "Sudden double vision with a drooping eyelid",
      "Call for emergency help immediately — a ruptured aneurysm can re-bleed within hours",
    ],
    faq: [
      {
        question: "Can an aneurysm be detected before it bursts?",
        answer:
          "Sometimes. Aneurysms may be found incidentally on a scan done for another reason, or investigated when there is a strong family history, or when a growing aneurysm presses on a nerve and causes double vision or a drooping eyelid. Screening of people with no symptoms and no risk factors is not generally recommended; the decision is individual and should be discussed with a specialist.",
      },
      {
        question: "What is the difference between an aneurysm and an AVM?",
        answer:
          "An aneurysm is a weak balloon in one artery wall. An AVM is a congenital tangle of abnormal arteries and veins with no capillary bed between them, so blood flows at high pressure. Both can bleed, but the treatment options differ: aneurysms are clipped or coiled, while AVMs may be embolised, operated on, or treated with radiosurgery, often in combination.",
      },
    ],
    relatedTreatment: "stroke-vascular-neurosurgery",
  },
  {
    slug: "hydrocephalus",
    title: "Hydrocephalus",
    searchTitle: "Hydrocephalus: Causes, Shunt Surgery",
    metaDescription:
      "Hydrocephalus (water on the brain) explained — the symptoms in babies and adults, VP shunt surgery, and the warning signs of a blocked shunt.",
    intro:
      "Hydrocephalus is a build-up of cerebrospinal fluid within the cavities of the brain, raising the pressure inside the skull. It happens when the fluid is not absorbed, when its flow is blocked, or rarely when too much is produced. In babies the skull bones have not fused, so the head enlarges; in older children and adults the pressure rises without the head growing.",
    symptoms: [
      "In infants: a rapidly enlarging head, bulging soft spot, prominent scalp veins, downward-looking eyes (sunsetting)",
      "In infants: poor feeding, vomiting, irritability, drowsiness, delayed milestones",
      "In children and adults: headache worse in the morning, vomiting, blurred or double vision",
      "Unsteadiness while walking and imbalance",
      "Drowsiness, confusion, memory problems, decline in school or work performance",
      "In older adults: the triad of unsteady gait, urinary urgency and memory loss (normal pressure hydrocephalus)",
    ],
    treatment:
      "CT or MRI confirms the diagnosis and shows where the flow is blocked. The standard treatment is a shunt — most often a ventriculo-peritoneal (VP) shunt, a soft tube that drains excess fluid from the brain's cavity into the abdomen where it is absorbed. In selected patients with obstructive hydrocephalus, endoscopic third ventriculostomy (ETV) creates a new internal drainage pathway without a shunt. Blocked or infected shunts are revised surgically, and hydrocephalus that follows a bleed or an infection is managed accordingly. Shunts are life-changing but they are devices, so lifelong follow-up and awareness of the warning signs are part of the treatment.",
    emergency: [
      "A shunted patient with headache, vomiting, drowsiness or a fit",
      "Fever, redness or swelling along the shunt track, or a wound that is leaking",
      "An infant whose head is enlarging quickly or who will not feed",
      "These suggest a blocked or infected shunt and need immediate assessment",
    ],
    faq: [
      {
        question: "Does a VP shunt need to be replaced over a lifetime?",
        answer:
          "A shunt may need revision if it blocks, becomes infected, disconnects, or if the child grows and the tubing becomes too short. Many shunts work for years without any problem. What protects the patient is knowing the warning signs — headache, vomiting, drowsiness, fever, swelling along the shunt path — and coming to hospital straight away rather than waiting.",
      },
      {
        question: "Can hydrocephalus be treated without a shunt?",
        answer:
          "In some cases, yes. Endoscopic third ventriculostomy is an option for obstructive hydrocephalus where the blockage is at the right level, and hydrocephalus caused by a tumour may resolve once the tumour is removed. Medicines only help temporarily. Which route suits a patient is decided from the MRI findings and the cause of the build-up.",
      },
    ],
    relatedTreatment: "paediatric-neurosurgery",
  },
  {
    slug: "epilepsy",
    title: "Epilepsy",
    searchTitle: "Epilepsy & Seizures: Care and First Aid",
    metaDescription:
      "Epilepsy explained — types of seizures, correct first aid during a fit, when a scan is needed and when surgery is considered. Consultation in Deoghar.",
    intro:
      "Epilepsy is a tendency to have recurrent seizures caused by abnormal electrical discharges in the brain. A single seizure is not necessarily epilepsy, and a seizure can be provoked by fever, low blood sugar, alcohol withdrawal or a head injury. Finding the cause matters, because some causes are treatable by surgery.",
    symptoms: [
      "Convulsions — stiffening and jerking of the limbs with loss of consciousness",
      "Blank staring episodes, unresponsiveness, or lip-smacking and fumbling movements",
      "Sudden jerks of the arms, or dropping of objects",
      "A rising feeling in the stomach, unusual smells or tastes, or déjà vu before an episode",
      "Confusion and tiredness for minutes to hours afterwards",
      "Loss of bladder control or a bitten tongue during an episode",
    ],
    treatment:
      "Diagnosis rests on a detailed description of the episodes — ideally from someone who witnessed them — supported by EEG and brain imaging. MRI is done to look for a structural cause such as a tumour, a scar, a vascular malformation or a developmental abnormality, and is essential where seizures are new in an adult. Most patients are controlled on anti-seizure medicines, with the drug and dose adjusted at follow-up; medicines must be taken daily and never stopped abruptly. Where a clear structural lesion is causing the seizures and medicines have failed, surgery to remove the focus may be considered after specialist evaluation at a comprehensive epilepsy centre. Seizures that follow a tumour, bleed or head injury are managed together with the underlying problem.",
    emergency: [
      "A seizure lasting more than five minutes, or repeated seizures without recovery in between",
      "A first-ever seizure",
      "Injury during a seizure, difficulty breathing afterwards, or a seizure in water",
      "A seizure during pregnancy, or in a person with diabetes",
      "The person does not regain consciousness after the jerking stops",
    ],
    faq: [
      {
        question: "What should I do when someone has a fit?",
        answer:
          "Stay calm and time the episode. Protect the head with something soft, move hard objects away, and loosen tight clothing around the neck. Do not put anything in the mouth and do not hold the person down. When the jerking stops, turn them onto their side so saliva can drain, and stay with them until they are fully alert. Call an ambulance if the seizure lasts over five minutes, repeats, or the person is injured.",
      },
      {
        question: "Can epilepsy be cured?",
        answer:
          "Many children outgrow certain epilepsy syndromes, and most adults achieve full control on medicines, though that is control rather than cure and stopping medicines is a decision for the specialist. Where a specific lesion such as a tumour, a scar or a vascular malformation is the cause, treating it can stop the seizures. Never stop anti-seizure medicines on your own — sudden withdrawal can trigger prolonged seizures.",
      },
    ],
    relatedTreatment: "brain-tumour-surgery",
  },
  {
    slug: "trigeminal-neuralgia",
    title: "Trigeminal Neuralgia",
    searchTitle: "Trigeminal Neuralgia: Facial Pain Relief",
    metaDescription:
      "Trigeminal neuralgia — electric shock-like facial pain triggered by touch, chewing or cold air — how it is diagnosed and the treatments available.",
    intro:
      "Trigeminal neuralgia is a disorder of the fifth cranial nerve that causes sudden, severe, electric shock-like pain on one side of the face. It is often called one of the most painful conditions known, and it is frequently mistaken at first for a dental problem, leading to unnecessary tooth extractions.",
    symptoms: [
      "Stabbing or electric shock-like pain in the cheek, jaw, teeth, gums or lips, usually on one side",
      "Attacks lasting seconds to a couple of minutes, recurring many times a day",
      "Pain triggered by touching the face, chewing, speaking, brushing teeth, shaving or a cold breeze",
      "Pain-free periods between attacks that become shorter over time",
      "A constant background ache or burning in some patients",
      "Facial numbness or weakness, which points to a different cause and needs imaging",
    ],
    treatment:
      "The diagnosis is clinical, supported by MRI to exclude a structural cause such as a tumour or multiple sclerosis and to look for a blood vessel compressing the nerve. Treatment begins with specific nerve-calming medicines — ordinary painkillers do not help — with the dose adjusted gradually under supervision. When medicines stop working or their side effects are intolerable, procedures are considered: percutaneous radiofrequency ablation or balloon compression of the nerve, or microvascular decompression, an operation that lifts the compressing vessel off the nerve. Which option is right depends on age, other illnesses, the MRI findings and the patient's preference, and each carries different risks of facial numbness that must be discussed beforehand.",
    emergency: [],
    faq: [
      {
        question: "Why does my dentist find nothing wrong with my teeth?",
        answer:
          "Because the pain comes from the nerve, not the tooth. Trigeminal neuralgia is commonly misdiagnosed as dental pain early on, and patients sometimes have teeth removed without relief. The clues are the shock-like quality, the strict one-sided distribution, the trigger points, and the fact that touching the face sets it off. An MRI and a neurological examination point to the right diagnosis.",
      },
      {
        question: "Is surgery needed for trigeminal neuralgia?",
        answer:
          "Not at first. Most patients are controlled on medication for years. Surgery or a percutaneous procedure is considered when the medicines no longer control the attacks, when side effects are unacceptable, or when a blood vessel is clearly compressing the nerve on MRI. Microvascular decompression gives the longest-lasting relief in suitable patients; other procedures suit those who are older or not fit for open surgery.",
      },
    ],
    relatedTreatment: "minimally-invasive-neurosurgery",
  },
  {
    slug: "carpal-tunnel",
    title: "Carpal Tunnel Syndrome",
    searchTitle: "Carpal Tunnel Syndrome Treatment",
    metaDescription:
      "Carpal tunnel syndrome — night-time hand numbness and tingling, why it happens, what helps without surgery and when a small release operation is needed.",
    intro:
      "Carpal tunnel syndrome is pressure on the median nerve as it passes through a narrow tunnel at the wrist. The tunnel is bounded by the wrist bones and a ligament, and anything that reduces the space — swelling, thickened ligament, arthritis, pregnancy, diabetes, thyroid disease or repetitive work — compresses the nerve.",
    symptoms: [
      "Numbness, tingling or pins and needles in the thumb, index, middle and half of the ring finger",
      "Symptoms that wake you at night and improve on shaking the hand",
      "Pain travelling up the forearm",
      "Dropping objects, weak grip, difficulty with buttons or opening jars",
      "Symptoms worse with driving, holding a phone, or repetitive wrist work",
      "In long-standing cases, wasting of the muscles at the base of the thumb",
    ],
    treatment:
      "The diagnosis is made from the history and examination and confirmed by nerve conduction studies, which also grade the severity. Mild cases are treated by avoiding the aggravating activity, a night wrist splint, treating any underlying diabetes or thyroid problem, and a local steroid injection. Where symptoms persist, where the nerve conduction study shows moderate or severe compression, or where the thumb muscles are wasting, a small operation — carpal tunnel release, cutting the ligament to free the nerve — is performed, often as a short procedure through a small incision. Night pain typically improves quickly; numbness takes longer, and muscle wasting that has already developed may not fully recover, which is why waiting too long is a mistake.",
    emergency: [],
    faq: [
      {
        question: "Will carpal tunnel syndrome go away without treatment?",
        answer:
          "It can settle when there is a temporary cause, such as pregnancy, or when the aggravating activity stops. Otherwise it usually progresses slowly. Splints and activity change help early cases; once the nerve has been compressed for a long time and the thumb muscles begin to waste, recovery becomes incomplete even after surgery — so persistent symptoms deserve assessment rather than waiting.",
      },
      {
        question: "Is carpal tunnel surgery a major operation?",
        answer:
          "No. It is a small procedure in which the ligament forming the roof of the tunnel is divided to relieve pressure on the nerve, usually through a short incision at the wrist. Most patients go home the same day, and the wound settles over about two weeks, with grip strength returning over the following weeks. Night pain often improves within days.",
      },
    ],
    relatedTreatment: "minimally-invasive-neurosurgery",
  },
  {
    slug: "sciatica-back-pain",
    title: "Sciatica & Back Pain",
    searchTitle: "Sciatica & Back Pain in Deoghar",
    metaDescription:
      "Sciatica and back pain: what causes pain down the leg, the treatment that works without surgery, and the red flags that need urgent assessment.",
    intro:
      "Sciatica is pain travelling along the sciatic nerve — from the lower back through the buttock and down the leg — caused by irritation or compression of a nerve root, most often by a prolapsed disc. Mechanical back pain, by contrast, stays in the back and is usually muscular or joint-related. Telling the two apart changes the treatment.",
    symptoms: [
      "Pain from the lower back into the buttock and below the knee, often on one side",
      "Numbness, tingling or burning in the leg or foot",
      "Pain worse on sitting, bending forward, coughing or sneezing",
      "Difficulty walking long distances because of leg pain",
      "Weakness in the foot or leg, or a foot that slaps on the ground",
      "Back pain that stays local, worsens with posture and improves with rest",
    ],
    treatment:
      "Assessment includes a neurological examination of power, sensation and reflexes, and an MRI where symptoms persist beyond a few weeks, where there is weakness, or where surgery is being considered. The large majority of patients improve without an operation: a short period of relative rest, anti-inflammatory and nerve-pain medicines, structured physiotherapy with core strengthening, posture and lifting technique correction, and weight management. Epidural steroid injection is an option in selected patients. Surgery — usually a microdiscectomy — is advised when disabling leg pain continues after six to twelve weeks of proper conservative treatment, when weakness is progressive, or immediately for the red flags below.",
    emergency: [
      "Loss of control of urine or stool, or inability to pass urine",
      "Numbness around the genitals, buttocks or inner thighs",
      "Weakness in both legs that is worsening",
      "Back pain with fever, unexplained weight loss, or a history of cancer",
      "Back pain after a fall or accident with inability to move the legs",
    ],
    faq: [
      {
        question: "How long does sciatica take to settle?",
        answer:
          "Most episodes improve substantially within four to six weeks and continue settling over about twelve weeks with medicines and physiotherapy. Numbness takes longer to recover than pain. If severe leg pain is still limiting your life after six to twelve weeks of genuine conservative treatment, or if weakness is progressing, an MRI and a surgical opinion are appropriate.",
      },
      {
        question: "Should I get an MRI for every episode of back pain?",
        answer:
          "No. Scanning early in simple mechanical back pain rarely changes the treatment and often shows age-related changes that are not the cause of your symptoms. MRI is indicated when there are red flags, when neurological deficit is present, when pain persists beyond several weeks despite treatment, and when an injection or surgery is being considered.",
      },
    ],
    relatedTreatment: "spine-surgery",
  },
  {
    slug: "spondylosis",
    title: "Spondylosis",
    searchTitle: "Cervical & Lumbar Spondylosis Treatment",
    metaDescription:
      "Spondylosis explained — age-related wear of the spine causing neck or back pain, arm and leg symptoms, and the treatment that helps most patients.",
    intro:
      "Spondylosis is age-related wear and degeneration of the spine: the discs lose height and water content, the joints enlarge, and bony spurs (osteophytes) form. It is extremely common — most people over fifty show some changes on a scan — and most of them have no significant symptoms. Trouble arises when those changes narrow the space for the nerves or the spinal cord.",
    symptoms: [
      "Neck or back stiffness and aching, worse in the morning and after prolonged sitting",
      "Pain radiating into the arm or leg with numbness or tingling",
      "Grating sensation or restricted movement of the neck or back",
      "Headache starting at the back of the neck",
      "Clumsy hands, difficulty with buttons or handwriting (cervical cord involvement)",
      "Unsteadiness while walking, leg heaviness, or a shuffling gait",
    ],
    treatment:
      "X-rays show the bony changes and the alignment; MRI is needed when there are nerve or cord symptoms, because it shows the discs, nerves and cord itself. Treatment for the great majority is conservative: physiotherapy with neck and core strengthening, posture correction, ergonomic changes at work, a short course of medicines for pain and nerve irritation, and weight management. A soft collar is used only briefly during acute pain. Surgery is reserved for patients with cord compression causing progressive clumsiness or unsteadiness, for progressive weakness from nerve root compression, or for intractable pain that has not responded to a full conservative programme — decompression, with fusion where the segment is unstable.",
    emergency: [
      "Progressive weakness or wasting in the arms or legs",
      "New difficulty walking, or frequent unexplained falls",
      "Loss of bladder or bowel control",
      "Neck pain after a minor injury in an elderly patient or someone with known spondylosis",
    ],
    faq: [
      {
        question: "My report says cervical spondylosis — does that mean I need surgery?",
        answer:
          "Almost certainly not. Spondylosis on a scan is a normal part of ageing and most people with these changes never need an operation. Surgery is considered only when the spinal cord or a nerve root is compressed and causing progressive symptoms such as weakness, clumsiness, unsteadiness or bladder change — not for the report alone.",
      },
      {
        question: "Can exercise make spondylosis worse?",
        answer:
          "The right exercise improves it. Strengthening the neck, back and core muscles takes load off the degenerated discs and joints and is the most effective long-term treatment. Avoid heavy overhead lifting, sudden jerky movements and prolonged forward-bent postures during a flare. A physiotherapist should set your programme, and it needs to be continued rather than done for a fortnight.",
      },
    ],
    relatedTreatment: "spine-surgery",
  },
  {
    slug: "paediatric-neuro",
    title: "Paediatric Neuro Problems",
    searchTitle: "Children's Neurosurgery & Brain Problems",
    metaDescription:
      "Neurosurgical problems in children — hydrocephalus, spina bifida, congenital cysts, head injury and delayed milestones: what parents should watch for.",
    intro:
      "Neurosurgical problems in children are often present from birth or appear in the first years of life, and they affect the growing brain and spine. Because a child's skull bones have not fused and the nervous system is still developing, the signs are different from those in adults — head size, milestones, feeding and behaviour matter as much as pain.",
    symptoms: [
      "A head that is larger than expected, or growing quickly across the percentile chart",
      "A bulging, tense soft spot (fontanelle), prominent scalp veins, or downward-turning eyes",
      "A swelling, dimple or tuft of hair over the lower spine",
      "Poor feeding, vomiting, irritability or excessive sleepiness in an infant",
      "Delayed milestones — not holding the head up, sitting, crawling or walking at the expected age",
      "Fits, or loss of previously acquired skills",
      "Weak or asymmetric limb movements, a stiff or floppy baby, or a foot that turns in",
    ],
    treatment:
      "Assessment combines a detailed history from the parents, measurement of head circumference plotted on a growth chart, neurological examination and imaging — ultrasound through the open fontanelle in infants, CT or MRI as needed, and MRI of the spine for spinal problems. Common conditions treated here include hydrocephalus (VP shunt or endoscopic third ventriculostomy), myelomeningocele and other neural tube defects, tethered cord, congenital cysts and paediatric brain and spine tumours, and head injury in children. Care is planned with the parents, includes paediatric anaesthesia and ICU support, and involves physiotherapy and long-term follow-up of development, with paediatric, orthopaedic and urology input where needed.",
    emergency: [
      "A baby with a bulging fontanelle, vomiting and unusual drowsiness",
      "Rapid increase in head size, or downward-turning eyes",
      "A fit of any length in a child",
      "Any head injury in an infant with vomiting, drowsiness or refusal to feed",
      "A newborn with an exposed swelling over the spine — keep it moist with sterile saline dressing and seek immediate care",
    ],
    faq: [
      {
        question: "My baby's head seems large — should I be worried?",
        answer:
          "Head size alone is not a diagnosis; what matters is the growth trend plotted on the chart along with the fontanelle, the child's behaviour and development. A large head that runs in the family with normal development is usually benign. A head crossing percentiles upward, with a tense fontanelle, vomiting, poor feeding or downward-turning eyes, needs prompt assessment for hydrocephalus.",
      },
      {
        question: "Can children recover better than adults from brain surgery or injury?",
        answer:
          "Children's brains have a greater capacity to reorganise and recover function, and they usually bounce back from surgery faster than adults. That does not mean the injury is unimportant — the developing brain can still be affected in ways that only become obvious years later, in learning and behaviour. This is why long-term follow-up through childhood matters even when the early recovery looks excellent.",
      },
    ],
    relatedTreatment: "paediatric-neurosurgery",
  },
];

export function getCondition(slug: string): ConditionContent | undefined {
  return conditions.find((c) => c.slug === slug);
}

/** Matches a homepage condition name to its page slug, if it has one. */
export function conditionSlugByTitle(title: string): string | undefined {
  return conditions.find((c) => c.title === title)?.slug;
}

/**
 * How the /conditions page groups the list, so a patient scanning for their
 * problem finds it in one section instead of reading sixteen titles.
 */
export const conditionGroups: { name: string; slugs: string[] }[] = [
  {
    name: "Brain",
    slugs: ["brain-tumour", "hydrocephalus", "epilepsy", "brain-haemorrhage"],
  },
  {
    name: "Spine & nerves",
    slugs: [
      "slipped-disc",
      "spinal-stenosis",
      "sciatica-back-pain",
      "spondylosis",
      "spinal-cord-tumour",
      "carpal-tunnel",
      "trigeminal-neuralgia",
    ],
  },
  {
    name: "Emergency & vascular",
    slugs: ["head-injury", "spinal-cord-injury", "stroke", "aneurysm-avm"],
  },
  { name: "Children", slugs: ["paediatric-neuro"] },
];

