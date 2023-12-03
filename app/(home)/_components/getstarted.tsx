import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "react-feather"

export const GetStarted = () => {
    return(
        <div className="max-w-5xl space-y-3 pt-10">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold">
            Get started for free
            </h2>
            <p className="justify-center space-y-0">
            Play around with it first. Pay and add your team later.
            </p>
            <div className="pt-2 flex items-center justify-center">
              <Button>Try Notion free</Button>
              <a className="justify-center pl-2 text-blue-600 flex">
              Request a demo
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
            </div>
            <div className='relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:h-[300px] md:w-[600px]'>
                    <Image
                    src="/images/notion-parade.webp"
                    fill
                    className="object-contain"
                    alt="parade"
                    />
                </div>
        </div>
    )
}