/**
 * Shortens a paragraph to its first sentence for use on a listing card, so
 * the card reads like a sentence rather than ending mid-word.
 */
export function cardSummary(text: string, limit = 160): string {
  const first = (text.split(/(?<=\.)\s/)[0] ?? text).trim();
  if (first.length <= limit) return first;
  const cut = first.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(" ")).trimEnd()}…`;
}
