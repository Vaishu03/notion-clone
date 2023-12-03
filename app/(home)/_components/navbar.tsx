"use client";

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return(
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-2",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-20 inline-flex items-center justify-center">
                Product
                <RiArrowDropDownLine />
            </div>
            <div className="md:ml-8 inline-flex items-center justify-center">
                Download
                <RiArrowDropDownLine />
            </div>
            <div className="md:ml-8 inline-flex items-center justify-center">
                Solutions
                <RiArrowDropDownLine />
            </div>
            <div className="md:ml-8 inline-flex items-center justify-center">
                Resources
                <RiArrowDropDownLine/>
            </div>
            <div className="md:ml-8 flex items-center justify-center">
                Pricing
            </div>
            <div className="md:ml-40 md:justify-end justify-between w-full flex 
            items-center gap-10 ">
                Request a Demo
            </div>
            <div className="md:ml-20 mr-0 md:justify-end justify-between w-80 flex 
            items-end ">
                Log in
            </div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex 
            items-center gap-x-2">
                <Button>Get Notion free</Button>
            </div>
        </div>
    )
}