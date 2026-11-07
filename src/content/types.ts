export type Faq = { question: string; answer: string };

export type TreatmentContent = {
  slug: string;
  /** Short name used in navigation and lists. */
  title: string;
  /** What the page is trying to rank for, e.g. "Spine Surgery in Deoghar". */
  searchTitle: string;
  metaDescription: string;
  overview: string[];
  whatWeDo: string[];
  recovery: string;
  faq: Faq[];
  /** Slugs of condition pages worth linking to from this page. */
  relatedConditions: string[];
};

export type ConditionContent = {
  slug: string;
  title: string;
  searchTitle: string;
  metaDescription: string;
  intro: string;
  symptoms: string[];
  treatment: string;
  /** Non-empty marks the condition as an emergency: shown as a red callout. */
  emergency: string[];
  faq: Faq[];
  /** Slug of the treatment page this condition belongs to. */
  relatedTreatment: string;
};
