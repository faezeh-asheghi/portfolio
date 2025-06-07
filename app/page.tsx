import About from "@/app/component/About";
import IntroOverlay from "@/app/component/IntroOverlay";

export default function Home() {
  return (
    <>

      <div className="bg-[#F9FAFF] py-0 flex flex-col gap-20 items-center justify-end px-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <div className="w-full h-[300px]"></div>
        <About />
        <div className="w-full h-[200px] bg-amber-900"></div>
        <div className="w-full h-[200px] bg-amber-900"></div>
        <div className="w-full h-[200px] bg-amber-900"></div>
        <div className="w-full h-[200px] bg-amber-900"></div>
      </div>
    </>
  );
}
