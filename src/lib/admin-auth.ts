import { createHash, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";

function getAdminPassword(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  return pw && pw.length > 0 ? pw : null;
}

/**
 * Deterministic token derived from ADMIN_PASSWORD. We never store the raw
 * password in the cookie — only this hash — so it's safe to keep in a
 * browser cookie for this small, low-risk internal admin page.
 */
function expectedToken(): string | null {
  const pw = getAdminPassword();
  if (!pw) return null;
  return createHash("sha256").update(pw).digest("hex");
}

export function checkPassword(candidate: string): boolean {
  const pw = getAdminPassword();
  if (!pw) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function isValidSessionToken(token: string | undefined): boolean {
  const expected = expectedToken();
  if (!expected || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function getSessionToken(): string | null {
  return expectedToken();
}

export { COOKIE_NAME };
