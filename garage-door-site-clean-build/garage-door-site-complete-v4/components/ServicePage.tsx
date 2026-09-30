import Link from "next/link";
import {site} from "@/lib/site";
import {pageSchema} from "@/lib/seo";

type Props={title:string;description:string;intro:string;services:{title:string;text:string}[];signs:string[];faqs:{q:string;a:string}[];path:string;related:{label:string;href:string}[]};
export function ServicePage({title,description,intro,services,signs,faqs,path,related}:Props){
 const schema=pageSchema(title,description,path,faqs);
 return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
 <section className="hero"><div className="container heroGrid"><div><div className="eyebrow">HOUSTON GARAGE DOOR SERVICE</div><h1 className="h1">{title}</h1><p className="lead">{intro}</p><div className="actions"><a className="btn" href={site.phoneHref}>Call {site.phoneDisplay}</a><Link className="secondary" href="/locations/texas/houston/">Houston service area</Link></div></div><div className="visual"><div><div className="doorIcon">🚪</div><strong>Houston, Texas</strong><p>Garage door service information</p></div></div></div></section>
 <section className="section"><div className="container"><h2 className="h2">What this service can include</h2><div className="grid4">{services.map(s=><article className="card" key={s.title}><h3>{s.title}</h3><p className="body">{s.text}</p></article>)}</div></div></section>
 <section className="section problem"><div className="container"><h2 className="h2">Signs you may need service</h2><div className="steps">{signs.map((s,i)=><div className="step" key={s}><div className="number">0{i+1}</div><p className="body">{s}</p></div>)}</div></div></section>
 <section className="section"><div className="container narrow"><h2 className="h2">Common questions</h2><div className="faqList">{faqs.map(f=><article className="card" key={f.q}><h3>{f.q}</h3><p className="body">{f.a}</p></article>)}</div></div></section>
 <section className="section"><div className="container"><h2 className="h2">Related services</h2><div className="grid4">{related.map(r=><Link className="card" href={r.href} key={r.href}><h3>{r.label}</h3><span className="linkText">Explore →</span></Link>)}</div></div></section>
 <div className="container"><section className="cta"><h2>Need garage door help in Houston?</h2><p>Call the service line to discuss your issue and available service options.</p><a className="btn" href={site.phoneHref}>Call {site.phoneDisplay}</a></section></div>
 </main>
}
