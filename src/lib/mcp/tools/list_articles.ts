import { defineTool } from "@lovable.dev/mcp-js";
import { ARTICLES, SITE_URL } from "../data";

export default defineTool({
  name: "list_articles",
  title: "List insight articles",
  description: "List all Vizier op Scherp insight articles (blog) with slug, title, description and URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = ARTICLES.map((a) => ({ ...a, url: `${SITE_URL}/inzichten/${a.slug}` }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items },
    };
  },
});
