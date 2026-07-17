import { defineMcp } from "@lovable.dev/mcp-js";
import listArticles from "./tools/list_articles";
import getArticle from "./tools/get_article";
import listCoaches from "./tools/list_coaches";
import listServices from "./tools/list_services";
import getContactInfo from "./tools/get_contact_info";

export default defineMcp({
  name: "vizier-op-scherp-mcp",
  title: "Vizier op Scherp",
  version: "0.1.0",
  instructions:
    "Public tools for Vizier op Scherp, een netwerk voor loopbaancoaching in Amsterdam en Haarlem. Gebruik list_articles/get_article voor blogartikelen, list_coaches voor het coachnetwerk, list_services voor het aanbod en get_contact_info voor contactgegevens en de kennismaken-link.",
  tools: [listArticles, getArticle, listCoaches, listServices, getContactInfo],
});
