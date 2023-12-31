"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () =>{
    return(
        <div className="max-w-5xl space-y-4 top-0">
            <h1 className="text-3xl sm:text-5xl md:text-6 font-bold">
            Write, plan, share.<br/>With AI at your side.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Notion is the connected workspace where better, faster work happens.
            </h3>
            <Button>
                Get Notion free
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}