/**
 * Regenerates public/og-image.jpg — the 1200×630 card shown when the site is
 * shared on WhatsApp, Facebook or X.
 *
 *   node .zscripts/make-og-image.mjs
 *
 * The card mirrors the built-in defaults in src/config/site.config.ts. Run it
 * again after changing the doctor's photo, name or hospital in that file.
 * The live site can also point elsewhere entirely: /admin → SEO lets you
 * upload any image as the share picture.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const doctor = {
  name: "Dr. Abinash Kumar",
  title: "Consultant Neurosurgeon",
  qualifications: "MBBS · M.S. · M.Ch. Neurosurgery · FMAS · FIAGES · DNB",
};
const hospital = {
  name: "Hope NeuroTrauma & Multi Speciality Hospital",
  shortName: "Hope NeuroTrauma Hospital",
  city: "Deoghar, Jharkhand",
  phone: "+91 99734 97200",
  promise: "Brain · Spine · 24×7 Neurotrauma",
};

/** SVG text nodes need XML escaping; the hospital name contains "&". */
const esc = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const W = 1200;
const H = 630;
const PHOTO_W = 400;
const PHOTO_H = 500;

const photo = await sharp(path.join(root, "public/doctor-photo.png"))
  .resize(PHOTO_W, PHOTO_H, { fit: "cover", position: "top" })
  .jpeg({ quality: 86 })
  .toBuffer();
const photoUri = `data:image/jpeg;base64,${photo.toString("base64")}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#064e3b"/>
      <stop offset="0.55" stop-color="#047857"/>
      <stop offset="1" stop-color="#065f46"/>
    </linearGradient>
    <clipPath id="photo"><rect x="${W - PHOTO_W - 70}" y="65" width="${PHOTO_W}" height="${PHOTO_H}" rx="28"/></clipPath>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1080" cy="60" r="260" fill="#ffffff" opacity="0.05"/>
  <circle cx="90" cy="600" r="220" fill="#ffffff" opacity="0.05"/>

  <text x="70" y="108" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="3" fill="#a7f3d0">${esc(hospital.shortName.toUpperCase())}</text>
  <text x="70" y="200" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="bold" fill="#ffffff">${esc(doctor.name)}</text>
  <text x="70" y="252" font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#d1fae5">${esc(doctor.title)}</text>
  <text x="70" y="300" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#ffffff" opacity="0.85">${esc(doctor.qualifications)}</text>

  <rect x="70" y="340" width="560" height="3" rx="1.5" fill="#a7f3d0" opacity="0.6"/>

  <text x="70" y="412" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="bold" fill="#ffffff">${esc(hospital.promise)}</text>
  <text x="70" y="462" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#d1fae5">${esc(hospital.city)}</text>
  <text x="70" y="540" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#fbbf24">${esc(hospital.phone)}</text>

  <g clip-path="url(#photo)">
    <image href="${photoUri}" x="${W - PHOTO_W - 70}" y="65" width="${PHOTO_W}" height="${PHOTO_H}"/>
  </g>
  <rect x="${W - PHOTO_W - 70}" y="65" width="${PHOTO_W}" height="${PHOTO_H}" rx="28" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="3"/>
</svg>`;

const out = path.join(root, "public/og-image.jpg");
await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
console.log(`wrote ${out} (${Math.round(readFileSync(out).length / 1024)} KB)`);
