import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ARTICLES, SITE_URL } from "../data";

export default defineTool({
  name: "get_article",
  title: "Get insight article",
  description: "Get metadata and URL for a single Vizier op Scherp insight article by slug.",
  inputSchema: { slug: z.string().describe("Article slug, e.g. 'job-crafting'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) {
      return { content: [{ type: "text", text: `No article found for slug '${slug}'.` }], isError: true };
    }
    const result = { ...article, url: `${SITE_URL}/inzichten/${article.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
