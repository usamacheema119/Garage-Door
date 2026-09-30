import {site} from "@/lib/site";
export function CallButton({label="Call Now"}:{label?:string}){return <a href={site.phoneHref} className="btn">{label}</a>}
