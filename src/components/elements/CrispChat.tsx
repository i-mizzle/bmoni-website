import Script from "next/script";
import { useEffect } from "react";

const CrispChat = () => {
  const CRISP_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
  useEffect(() => {
    console.log("CRISP ID:", process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
  }, []);


  if (!CRISP_ID) {
    console.warn("Crisp ID is missing. Did you set NEXT_PUBLIC_CRISP_WEBSITE_ID in .env.local?");
    return null;
  }

  return (
    <Script id="crisp-chat" strategy="afterInteractive">
      {`
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "${CRISP_ID}";
        (function(){
          var d=document;
          var s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      `}
    </Script>
  );
};

export default CrispChat;
