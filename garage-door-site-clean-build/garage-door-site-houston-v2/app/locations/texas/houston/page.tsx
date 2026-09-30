import type {Metadata} from "next";
import {CallButton} from "@/components/CallButton";
import {site} from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage Door Repair in Houston, TX",
  description: "Find garage door repair help in Houston, Texas for broken springs, opener problems, doors off track, and other common garage door issues.",
  alternates: { canonical: "/locations/texas/houston/" },
};

const faqs = [
  ["What garage door problems can I get help with in Houston?", "Common service needs include broken or worn springs, opener problems, doors that will not open or close, noisy operation, damaged hardware, and doors that have come off their tracks."],
  ["Can I call for a garage door problem that needs attention quickly?", "Yes. If your garage door is stuck, unsafe to operate, or preventing normal access, calling the service line is the quickest way to check whether local help is available."],
  ["Do Houston homes commonly use automatic garage door openers?", "Automatic openers are common in residential garages. Houston's housing standards also reference automatic garage door openers and remotes in certain city housing programs."],
  ["How do I know whether I should stop using my garage door?", "If the door is off track, hanging unevenly, has a broken spring or cable, or makes a sudden grinding or snapping sound, avoid forcing it and contact a qualified service professional."],
];

export default function HoustonGarageDoorRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Door Repair in Houston, Texas",
    serviceType: "Garage door repair",
    areaServed: { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    url: "https://garage-door-nu.vercel.app/locations/texas/houston/",
    provider: { "@type": "Organization", name: site.name, telephone: site.phoneDisplay },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <section className="hero"><div className="container heroGrid">
        <div>
          <div className="eyebrow">HOUSTON, TEXAS</div>
          <h1 className="h1">Garage Door Repair in Houston, TX</h1>
          <p className="lead">Need help with a garage door that is stuck, noisy, off track, or refusing to open? Use the phone line below to check availability for garage door service in Houston.</p>
          <div className="actions"><CallButton/><a className="secondary" href="#common-problems">See common problems</a></div>
        </div>
        <div className="visual"><div><strong>Houston Garage Door Help</strong><br/><span>Repair • Openers • Springs • Emergencies</span></div></div>
      </div></section>

      <section className="section" id="common-problems"><div className="container">
        <div className="eyebrow">COMMON SERVICE NEEDS</div>
        <h2 className="h2">Garage door problems we can help you identify</h2>
        <div className="grid4">
          <a className="card" href="/garage-door-spring-repair/"><h3>Broken springs</h3><p>A broken spring can leave a door difficult or impossible to lift.</p></a>
          <a className="card" href="/garage-door-opener-repair/"><h3>Opener problems</h3><p>Wall controls, remotes, sensors, motors, and other opener issues can stop normal operation.</p></a>
          <a className="card" href="/garage-door-off-track/"><h3>Off-track doors</h3><p>An uneven or displaced door should not be forced because further damage can occur.</p></a>
          <a className="card" href="/emergency-garage-door-repair/"><h3>Urgent problems</h3><p>If your garage door is stuck or unsafe, call to check whether service is available.</p></a>
        </div>
      </div></section>

      <section className="section problem"><div className="container">
        <div className="eyebrow">HOUSTON-SPECIFIC INFORMATION</div>
        <h2 className="h2">Garage doors are part of everyday Houston home access</h2>
        <p className="lead">Houston's current residential housing standards include requirements and guidance covering garages and automatic garage door openers for certain city housing programs. The standards list minimum garage dimensions and reference automatic openers and remotes. That makes the garage door system an important part of normal residential access and maintenance. citeturn0search14</p>
        <p className="lead">If a garage door suddenly becomes difficult to operate, avoid repeatedly forcing the door or opener. A service professional can inspect the door, tracks, springs, cables, rollers, hardware, and opener to determine what needs attention.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="eyebrow">HOW TO GET HELP</div><h2 className="h2">Start with a quick phone call</h2>
        <div className="steps"><div className="step"><div className="number">01</div><h3>Describe the problem</h3><p>Tell the service representative what the door is doing and whether it opens, closes, or moves unevenly.</p></div><div className="step"><div className="number">02</div><h3>Confirm Houston coverage</h3><p>Confirm that a local service professional is available for your area and type of repair.</p></div><div className="step"><div className="number">03</div><h3>Arrange service</h3><p>If coverage is available, the service provider can explain the next step for inspection or repair.</p></div></div>
      </div></section>

      <section className="section problem"><div className="container">
        <div className="eyebrow">FAQ</div><h2 className="h2">Houston garage door repair questions</h2>
        <div className="grid4">{faqs.map(([q,a]) => <div className="card" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div>
      </div></section>

      <section className="container"><div className="cta"><h2>Need garage door help in Houston?</h2><p>Call to check service availability for your garage door problem.</p><CallButton/></div></section>
    </main>
  );
}
