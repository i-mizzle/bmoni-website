import MainLayout from "@/components/layouts/MainLayout";
import CallToAction from "@/components/partials/CallToAction";
import Faq from "@/components/partials/Faq";
import GetStartedSteps from "@/components/partials/GetStartedSteps";
import LandingHero from "@/components/partials/LandingHero";
import UseCases from "@/components/partials/UseCases";
import Image from "next/image";


export default function Home() {
  return (
    <MainLayout>
      <LandingHero />

      <section className="w-full bg-[#270A26] min-h-screen p-[32px]">
        <div className="w-1/3 mx-auto text-center mb-[65px]">
          <h1 className="font-playfair-display font-[500] text-white text-[48px] leading-[56px]">Everything you want from your money</h1>
        </div>
        <div className="flex items-stretch gap-x-[16px]">
          <div className="w-[40%] bg-[#EAAEE8] rounded-[16px]">
            <div className="h-[320px] w-full rounded-t-[16px]"
              style={{
                backgroundImage: "url(/img/wave-pattern.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            }}
            >
              <div className="w-full relative h-[350px] mt-[50px]" 
                style={{
                  backgroundImage: "url(/img/multi-currency-illustration.svg)",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'
              }} />
                            </div>
            <div className="p-[32px]">
              <h3 className="text-[30px] leading-[38px] font-playfair-display font-[500] -leading-[0.2em] text-[#270A26] mb-[12px]">Multi-currency<br /> local wire details</h3>
              <p className="leading-[24px] font-[400] text-[#370E36]">Receive money through local NGN and USD virtual accounts, no matter where you are. Perfect for freelancers, family support, and global payments.</p>
            </div>
          </div>
          <div className="w-[60%] bg-[#EAAEE8] rounded-[16px]">

          </div>
        </div>
        <div className="flex items-stretch gap-x-[16px] mt-[16px]">
          <div className="w-1/3 bg-[#EAAEE8] rounded-[16px]">
            <div className="h-[320px] w-full rounded-t-[16px]"
              style={{
                backgroundImage: "url(/img/wave-pattern.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            }}
            >
              {/* <div className="w-full relative h-[350px] mt-[50px]" 
                style={{
                  backgroundImage: "url(/img/multi-currency-illustration.svg)",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'
              }} /> */}
                            </div>
            <div className="p-[32px]">
              <h3 className="text-[30px] leading-[38px] font-playfair-display font-[500] -leading-[0.2em] text-[#270A26] mb-[12px]">Preserve your funds</h3>
              <p className="leading-[24px] font-[400] text-[#370E36]">Your funds are instantly converted to stable Naira and USD automatically, which protects it from inflation and allows you to earn interest while you&apos;re at it.</p>
            </div>
          </div>
          <div className="w-1/3 bg-[#EAAEE8] rounded-[16px]">

          </div>
          <div className="w-1/3 bg-[#EAAEE8] rounded-[16px]">

          </div>
        </div>

      </section>

      <UseCases />

      <section className="bg-white w-full pb-[120px]">
        <div className="w-[40%] mx-auto text-center">
          <h3 className="text-[48px] leading-[60px] font-playfair-display text-[#320032] -tracking-[0.02em]">Your money&apos;s safe and is <br/>always yours</h3>
          <p className="text-[#AF01AF] font-[500] leading-[24px] my-[16px]">That&apos;s our promise to you.</p>

          <p className="font-[400] text-[18px] leading-[26px] text-[#5D395D]">BMONI is licensed and protected through regulated banking and technology partners. Your funds are protected, your transactions are encrypted, and your data stays private</p>
        </div>

        <div className="w-[80%] mx-auto mt-[64px] h-[300px] relative">
          <Image 
          alt="our promise" src={`/img/promise-graphic.svg`} fill className="object-contain" />
        </div>
      </section>

      <GetStartedSteps />

      <Faq />

      <CallToAction />

    </MainLayout>
  );
}
