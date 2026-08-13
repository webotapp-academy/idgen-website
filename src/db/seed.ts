import "dotenv/config";
import { eq } from "drizzle-orm";
import { getDb } from "./db";
import { services as servicesTable, products as productsTable, states as statesTable, cities as citiesTable } from "./schema";
import { services } from "../data/services";
import { products } from "../data/products";
import { states } from "../data/locations";

async function main() {
  const db = getDb();

  console.log("Seeding services...");
  for (const [i, s] of services.entries()) {
    await db
      .insert(servicesTable)
      .values({
        slug: s.slug,
        name: s.name,
        category: s.category,
        shortDescription: s.shortDescription,
        content: s.content.join("\n\n"),
        faqs: s.faqs,
        metaTitle: s.metaTitle,
        metaDescription: s.metaDescription,
        sortOrder: i,
      })
      .onConflictDoNothing({ target: servicesTable.slug });
  }

  console.log("Seeding products...");
  for (const [i, p] of products.entries()) {
    await db
      .insert(productsTable)
      .values({
        slug: p.slug,
        name: p.name,
        description: p.description.join("\n\n"),
        specs: p.specs,
        metaTitle: p.metaTitle,
        metaDescription: p.metaDescription,
        sortOrder: i,
      })
      .onConflictDoNothing({ target: productsTable.slug });
  }

  console.log("Seeding states & cities...");
  for (const [i, st] of states.entries()) {
    const [row] = await db
      .insert(statesTable)
      .values({ slug: st.slug, name: st.name, sortOrder: i })
      .onConflictDoNothing({ target: statesTable.slug })
      .returning({ id: statesTable.id });

    let stateId = row?.id;
    if (!stateId) {
      const [existing] = await db.select({ id: statesTable.id }).from(statesTable).where(eq(statesTable.slug, st.slug));
      stateId = existing?.id;
    }

    if (!stateId) continue;

    for (const c of st.cities) {
      await db
        .insert(citiesTable)
        .values({
          stateId,
          slug: c.slug,
          name: c.name,
          isPrimary: c.isPrimary ? 1 : 0,
          localContent: c.localContent,
        })
        .onConflictDoNothing();
    }
  }

  console.log("Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
