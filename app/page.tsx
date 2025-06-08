import About from "@/app/component/About";
import Skills from "@/app/component/Skills";

export default function Home() {
  return (
    <>

      <div className="bg-[#F9FAFF] overflow-x-hidden py-0 flex flex-col md:gap-50 gap-30 lg:gap-50 items-center justify-end px-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <div className="w-full h-[300px]"></div>
        
        <About />
        <Skills/>

      </div>
    </>
  );
}
