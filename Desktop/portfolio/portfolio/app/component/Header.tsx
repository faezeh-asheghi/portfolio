'use client';

export default function Header() {
    return (
        <div className="flex-row  gap-[48px] w-screen h-[56px] z-10 sticky top-0 text-white flex items-center px-10">

                <p className={"text-xs text-[#25282B] font-extralight"}>Contacts</p>
                <p className={"text-xs text-[#25282B]  font-extralight"}>Projects</p>
                <p className={"text-xs  text-[#25282B]  font-extralight"}>About</p>


        </div>
    );
}
