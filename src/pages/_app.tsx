/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'animate.css';
// import CrispChat from "@/components/elements/CrispChat";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

    const s = document.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return <>
    <Component {...pageProps} />
    {/* <CrispChat /> */}
  </> 
}
