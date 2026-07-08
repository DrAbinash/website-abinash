import { db } from "../src/lib/db";

async function main() {
  await db.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      primaryColor: "emerald",
      bookingUrl: "",
      whatsapp: "+919973497200",
      phone: "+919973497200",
      adminPassword: "admin123",
    },
  });
  console.log("Seed completed: SiteSettings created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
