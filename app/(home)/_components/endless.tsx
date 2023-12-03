import Image from "next/image"
import { ArrowRight } from "react-feather"
import { IoHomeSharp } from "react-icons/io5";
import { FaFlagCheckered } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaNotesMedical } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoFileTraySharp } from "react-icons/io5";

export const Endless = () => {
    return(
        <div className="max-w-5xl space-y-3 pt-10">
            <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold">
            Endless ways to use it
            </h2>
            <a className="justify-center text-blue-600 flex">
              Browse all templates
              <ArrowRight className="h-6 w-4 ml-1"/>
            </a>
            <div className="flex gap-6">
            <div className=" rounded-xl bg-gray-100 pl-2 pt-50 w-25 h-800 border border-slate-100">
            <IoHomeSharp className="fill-red-400 pt-5 h-10 w-20"/>
            <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
            <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
            <Image 
            src="/images/company-wiki-template.webp"
            width="500"
            height="300"
            alt="wiki"
            className="pl-7 pt-20 rounded-md"
            />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-gray-100 w-41">
                <FaFlagCheckered className="fill-blue-500 pt-5 h-10 w-20" />
                <p className="font-semibold flex justify-start md:pl-7 pt-3 pr-9">Product roadmap</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
                <div className="rounded-xl bg-gray-100">
                <IoCheckmarkDoneCircle className="fill-orange-400 pt-5 h-10 w-20"/>
                <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
                <div className="rounded-xl bg-gray-100">
                <FaNotesMedical className="fill-yellow-400 pt-5 h-10 w-20"/>
                <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
                <div className="rounded-xl bg-gray-100">
                <MdFlight className="fill-red-700 pt-5 h-10 w-20"/>
                <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
                <div className="rounded-xl bg-gray-100">
                <FaCalendarAlt className="fill-cyan-600 pt-5 h-10 w-20"/>
                <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
                <div className="rounded-xl bg-gray-100">
                <IoFileTraySharp className="fill-violet-600 pt-5 h-10 w-20"/>
                <p className="font-semibold flex justify-start md:pl-7 pt-2">Company wiki</p>
                <a className="flex justify-start md:pl-7 pt-6 text-blue-600">
              Get template
              <ArrowRight className="h-6 w-4 ml-1"/>
              </a>
                </div>
            </div>
            </div>
        </div>
    )
}