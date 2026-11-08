import { createHash, timingSafeEqual } from "crypto";
import { loadSavedSettings } from "@/lib/site-settings";

const COOKIE_NAME = "admin_session";

/**
 * The password staff sign in with at /admin. A password saved from the editor
 * (settings.adminPassword) wins; the ADMIN_PASSWORD environment variable stays
 * as the bootstrap door until the owner sets their own in the editor.
 */
async function getEffectivePassword(): Promise<string | null> {
  const saved = await loadSavedSettings();
  const dbPw = saved?.adminPassword;
  if (typeof dbPw === "string" && dbPw.length >= 4) return dbPw;
  const envPw = process.env.ADMIN_PASSWORD;
  return envPw && envPw.length > 0 ? envPw : null;
}

/**
 * Deterministic token derived from the effective password. We never store the
 * raw password in the cookie — only this hash — so it is safe to keep in a
 * browser cookie for this small, low-risk internal admin page.
 */
async function expectedToken(): Promise<string | null> {
  const pw = await getEffectivePassword();
  return pw ? createHash("sha256").update(pw).digest("hex") : null;
}

export async function checkPassword(candidate: string): Promise<boolean> {
  const pw = await getEffectivePassword();
  if (!pw) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isValidSessionToken(
  token: string | undefined
): Promise<boolean> {
  const expected = await expectedToken();
  if (!expected || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function getSessionToken(): Promise<string | null> {
  return expectedToken();
}

export async function isPasswordConfigured(): Promise<boolean> {
  return (await getEffectivePassword()) !== null;
}

export { COOKIE_NAME };
