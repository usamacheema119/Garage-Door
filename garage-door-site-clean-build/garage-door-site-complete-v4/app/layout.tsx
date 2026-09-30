import type {Metadata} from "next"; import Script from "next/script";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {site} from "@/lib/site";

export const metadata:Metadata={
 metadataBase:new URL(site.url),
 title:{default:"Garage Door Repair & Services in Houston, TX | Garage Door Help",template:"%s | Garage Door Help"},
 description:site.description,
 alternates:{canonical:"/"},
 robots:{index:true,follow:true},
 openGraph:{type:"website",siteName:site.name,title:"Garage Door Repair & Services in Houston, TX",description:site.description,url:site.url}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Script src={`https://b-js.ringba.com/${site.ringbaCampaignId}`} strategy="beforeInteractive"/><Header/>{children}<Footer/><a className="mobileCall" href={site.phoneHref}>☎ Call for Garage Door Help</a></body></html>}
