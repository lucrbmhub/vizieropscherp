import { defineTool } from "@lovable.dev/mcp-js";
import { COACHES, SITE_URL } from "../data";

export default defineTool({
  name: "list_coaches",
  title: "List coaches",
  description: "List the coaches in the Vizier op Scherp network with a short bio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { coaches: COACHES, url: `${SITE_URL}/coaches` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
