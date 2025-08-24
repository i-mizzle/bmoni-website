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

      <section className="w-full bg-[#270A26] h-inherit min-h-screen p-[20px] xl:px-[32px] xl:pb-[50px] xl:pt-[85px]">
        <div className="w-full px-[20px] xl:w-1/3 mx-auto text-center mb-[65px]">
          <h1 className="font-fraunces font-[500] text-white text-[48px] leading-[56px]">Everything you want from your money</h1>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[16px] px-[10px] xl:px-[70px]">
          <div className="w-full bg-[#370E36] rounded-[16px] p-[10px] xl:p-[25px] border border-[#ffffff20]">
            
            <div className="w-full relative h-[350px] rounded-[16px]" 
              style={{
                backgroundImage: "url(/img/features/2-phones.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }} />

            <div className="p-[10px] xl:p-[32px] mt-[20px] lg:mt-[40px]">
              <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Multi-currency Accounts</h3>
              <p className="leading-[24px] font-[400] text-[#F7E6F7]">Receive money instantly with local NGN and USD virtual accounts. Designed for freelancers, families, and anyone moving money across borders.</p>
            </div>
          </div>
          <div className="w-full bg-[#370E36] rounded-[16px] p-[10px] xl:p-[25px] border border-[#ffffff20]">
            
            <div className="w-full relative h-[350px] rounded-[16px]" 
              style={{
                backgroundImage: "url(/img/features/cards-for-everything.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }} />

            <div className="p-[10px] xl:p-[32px] mt-[20px] lg:mt-[40px]">
              <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Cards for everything</h3>
              <p className="leading-[24px] font-[400] text-[#F7E6F7]">Create and manage multiple virtual or physical cards for subscriptions, travel, household bills, or everyday spending - with  just a tap.</p>
            </div>
          </div>
          <div className="w-full bg-[#370E36] rounded-[16px] p-[10px] xl:p-[25px] border border-[#ffffff20]">
            
            <div className="w-full relative h-[350px] rounded-[16px]" 
              style={{
                backgroundImage: "url(/img/features/get-paid-for-spending.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }} />

            <div className="p-[10px] xl:p-[32px] mt-[20px] lg:mt-[40px]">
              <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Turn Spending into Earning</h3>
              <p className="leading-[24px] font-[400] text-[#F7E6F7]">Shop with your linked card and receive cashback rewards.</p>
            </div>
          </div>
          <div className="w-full bg-[#370E36] rounded-[16px] p-[10px] xl:p-[25px] border border-[#ffffff20]">
            
            <div className="w-full relative h-[350px] rounded-[16px]" 
              style={{
                backgroundImage: "url(/img/features/preserve-your-funds.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              }} />

            <div className="p-[10px] xl:p-[32px] mt-[20px] lg:mt-[40px]">
              <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Preserve your funds</h3>
              <p className="leading-[24px] font-[400] text-[#F7E6F7]">Your money is instantly converted into stable USD, protecting it from inflation and shielding you from the devaluation of the naira.</p>
            </div>
          </div>
          
        </div>
       

      </section>

      <UseCases />

      <section className="bg-[#FFF7FF] w-full pb-[120px]">
        <div className="w-[80%] xl:w-[40%] mx-auto text-center">
          <h3 className="text-[48px] leading-[60px] font-fraunces text-[#320032] -tracking-[0.02em]">Your Money. Always Safe. Always Yours.</h3>
          <p className="text-[#AF01AF] font-[500] leading-[24px] my-[16px]">That&apos;s our promise to you.</p>

          <p className="font-[400] text-[18px] leading-[26px] text-[#5D395D]">BMONI is built in partnership with licensed banking and trusted technology partners. Your funds are fully protected, your transactions are encrypted, and your data stays private — so you can manage your money with total peace of mind.</p>
        </div>

        <div className="w-[80%] mx-auto mt-[64px] h-[415px] relative">
          <Image 
          alt="our promise" src={`/img/vault-illustration.svg`} fill className="object-contain" />
        </div>
      </section>

      <GetStartedSteps />

      <Faq />

      <CallToAction />

    </MainLayout>
  );
}
