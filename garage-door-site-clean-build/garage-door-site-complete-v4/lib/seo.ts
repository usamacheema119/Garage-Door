import {site} from "./site";

export function pageSchema(name: string, description: string, path: string, faqs: {q:string;a:string}[] = []) {
  const graph: Record<string, unknown>[] = [
    {"@type":"WebPage", "@id":`${site.url}${path}#webpage`, name, description, url:`${site.url}${path}`},
    {"@type":"Service", name, description, areaServed:{"@type":"City",name:site.city}, url:`${site.url}${path}`},
    {"@type":"BreadcrumbList", itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:`${site.url}/`},
      {"@type":"ListItem",position:2,name:name,item:`${site.url}${path}`}
    ]}
  ];
  if (faqs.length) graph.push({"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))});
  return {"@context":"https://schema.org","@graph":graph};
}
