import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES } from "../data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services Vizier op Scherp offers to employers, employees and UWV-cliënten.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
