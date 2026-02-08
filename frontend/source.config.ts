// This file is not currently used since the blog uses hardcoded content
// If you want to use MDX files in the future, you'll need to:
// 1. Install fumadocs-mdx: npm install fumadocs-mdx fumadocs-ui
// 2. Install zod: npm install zod
// 3. Uncomment the code below

/*
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components",
  },
});

export const { docs, meta } = defineDocs({
  dir: "blog/content",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      readTime: z.string().optional(),
      author: z.string().optional(),
      thumbnail: z.string().optional(),
    }),
  },
});
*/

export default {};
