import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get contact details for Vizier op Scherp: email, phone, WhatsApp, booking link and office addresses.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
