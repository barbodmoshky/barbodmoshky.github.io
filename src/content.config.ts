import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    audioUrl: z.string().optional(),
    lyrics: z.string().optional(),
  }),
});

const poetry = defineCollection({
  loader: glob({ base: "./src/content/poetry", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

const foreignMusic = defineCollection({
  loader: glob({ base: "./src/content/foreign-music", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    artist: z.string().optional(),
    audioUrl: z.string().optional(),
    lyrics: z.string().optional(),
  }),
});

const iranianPop = defineCollection({
  loader: glob({ base: "./src/content/iranian-pop", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    artist: z.string().optional(),
    audioUrl: z.string().optional(),
    lyrics: z.string().optional(),
  }),
});

const biography = defineCollection({
  loader: glob({ base: "./src/content/biography", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, poetry, foreignMusic, iranianPop, biography };
