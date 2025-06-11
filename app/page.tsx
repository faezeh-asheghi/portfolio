
import AboutMe from "./component/AboutMe";
import ExperienceTimeline from "./component/Exprience";
import Welcome from "./component/Welcome";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <div className="bg-[#292929] !overflow-x-hidden py-0 flex flex-col md:gap-50 gap-30 lg:gap-50 items-center justify-end px-8 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        {/* <div className="w-full h-[300px]"></div>

        <About />
        <Skills/>
          <Projects />
<div className={"w-full h-[200px]"}></div> */}
<Welcome/>
<AboutMe/>
<ExperienceTimeline/>
<div className="w-full h-[600px]"></div>

      </div>
    </div>
  );
}
