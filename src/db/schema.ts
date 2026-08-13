import { pgTable, serial, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  name: text("name").notNull(),
  category: varchar("category", { length: 60 }).notNull(), // "id-card" | "lanyard"
  shortDescription: text("short_description").notNull(),
  content: text("content").notNull(),
  heroImage: text("hero_image"),
  faqs: jsonb("faqs").$type<{ q: string; a: string }[]>().default([]),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  specs: jsonb("specs").$type<Record<string, string>>().default({}),
  heroImage: text("hero_image"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const states = pgTable("states", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  name: text("name").notNull(),
  sortOrder: integer("sort_order").default(0),
});

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  stateId: integer("state_id")
    .references(() => states.id)
    .notNull(),
  slug: varchar("slug", { length: 80 }).notNull(),
  name: text("name").notNull(),
  isPrimary: integer("is_primary").default(0), // 1 = state's main hub city
  localContent: text("local_content"), // unique local proof copy, never boilerplate
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt"),
  content: text("content"),
  authorName: text("author_name"),
  publishedAt: timestamp("published_at"),
  updatedAt: timestamp("updated_at").defaultNow(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
});

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  organization: text("organization"),
  email: text("email").notNull(),
  phone: text("phone"),
  serviceSlug: varchar("service_slug", { length: 120 }),
  city: text("city"),
  quantity: text("quantity"),
  message: text("message"),
  sourcePage: text("source_page"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const partnerInquiries = pgTable("partner_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  businessName: text("business_name"),
  email: text("email").notNull(),
  phone: text("phone"),
  city: text("city"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});
