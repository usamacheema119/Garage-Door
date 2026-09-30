import Link from "next/link";
import {site} from "@/lib/site";
import {pageSchema} from "@/lib/seo";

type Props={path:string;title:string;description:string;intro:string;sections:{heading:string;paragraphs:string[];bullets?:string[]}[];faqs:{q:string;a:string}[];related:{label:string;href:string}[]};
export function InfoPage({path,title,description,intro,sections,faqs,related}:Props){
 const schema=pageSchema(title,description,path,faqs);
 return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  <section className="hero"><div className="container heroGrid"><div><div className="eyebrow">HOUSTON GARAGE DOOR HELP</div><h1 className="h1">{title}</h1><p className="lead">{intro}</p><div className="actions"><a className="btn" href={site.phoneHref}>Call {site.phoneDisplay}</a><Link className="secondary" href="/locations/texas/houston/">Houston service area</Link></div></div><div className="visual"><div><div className="doorIcon">🚪</div><strong>{site.city}, {site.state}</strong><p>Garage door information and service connection</p></div></div></div></section>
  {sections.map((s,i)=><section className={`section ${i%2===1?"problem":""}`} key={s.heading}><div className="container narrow"><h2 className="h2">{s.heading}</h2>{s.paragraphs.map(p=><p className="body" key={p}>{p}</p>)}{s.bullets&&<ul className="checklist">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</div></section>)}
  <section className="section"><div className="container narrow"><h2 className="h2">Common questions</h2><div className="faqList">{faqs.map(f=><article className="card" key={f.q}><h3>{f.q}</h3><p className="body">{f.a}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><h2 className="h2">Related garage door resources</h2><div className="grid4">{related.map(r=><Link className="card" href={r.href} key={r.href}><h3>{r.label}</h3><span className="linkText">Read more →</span></Link>)}</div></div></section>
  <div className="container"><section className="cta"><h2>Need garage door help in Houston?</h2><p>Call the service line to discuss your garage door issue and available service options.</p><a className="btn" href={site.phoneHref}>Call {site.phoneDisplay}</a></section></div>
 </main>
}
