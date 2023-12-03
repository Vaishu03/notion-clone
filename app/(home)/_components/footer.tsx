import { Logo } from "./logo"
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Footer = () => {
    return(
        <div className="inline-flex gap-10">
        <div className="ml-0 px-0 py-0">
            <div className="items-start"><Logo  /></div>
            <div className="flex pt-5">
            <AiFillInstagram className="w-10 h-6"/>
            <FaTwitter className="w-10 h-6"/>
            <FaLinkedin className="w-10 h-6"/>
            <FaFacebook className="w-10 h-6"/>
            <FaYoutube className="w-10 h-6"/>
            </div>
            <div className="mt-5 inline-flex items-center justify-center rounded-md border border-slate-300 px-0 ">
                <CiGlobe className="w-9 h-4 px-2" />
                <p>English</p>
                <RiArrowDropDownLine/>
            </div>
        </div>
        <div className="flex gap-20">
        <div>
            <p className="font-semibold flex justify-start">Product</p>
            <p className="flex justify-start">Wikis</p>
            <p className="flex justify-start">Projects</p>
            <p className="flex justify-start">Docs</p>
            <p className="flex justify-start">Notion AI</p>
            <p className="flex justify-start">What's new</p>

            <p className="font-semibold flex justify-start pt-10">Solutions</p>
            <p className="flex justify-start">Enterprise</p>
            <p className="flex justify-start">Small business</p>
            <p className="flex justify-start">Personal use</p>
            <p className="flex justify-start">Remote work</p>
            <p className="flex justify-start">Startups</p>
            <p className="flex justify-start">Education</p>
            <p className="flex justify-start">Nonprofits</p>
            <p className="flex justify-start">Engineering</p>
            <p className="flex justify-start">Product</p>
            <p className="flex justify-start">Design</p>
            <p className="flex justify-start">Managers</p>
        </div>
        <div>
            <p className="font-semibold flex justify-start">Download</p>
            <p className="flex justify-start">iOS & Android</p>
            <p className="flex justify-start">Mac & Windows</p>
            <p className="flex justify-start">Web Clipper</p>

            <p className="font-semibold flex justify-start pt-8">Build</p>
            <p className="flex justify-start">Integrations</p>
            <p className="flex justify-start">Templates</p>
            <p className="flex justify-start">API docs</p>
            <p className="flex justify-start">Guides & tutorials</p>
            <p className="flex justify-start">Hire a consultant</p>
            <p className="flex justify-start">Become an affiliate</p>
            
            <p className="font-semibold flex justify-start pt-8">Learn</p>
            <p className="flex justify-start">Customer stories</p>
            <p className="flex justify-start">Help center</p>
            <p className="flex justify-start">Webinars</p>
            <p className="flex justify-start">Blog</p>
            <p className="flex justify-start">Community</p>
        </div>
        <div>
            <p className="font-semibold flex justify-start">Get Started</p>
            <p className="flex justify-start">Switch from Confluence</p>
            <p className="flex justify-start">Switch from Asana</p>
            <p className="flex justify-start">Switch from Evernote</p>
            <p className="flex justify-start">Compare vs Monday</p>
            <p className="flex justify-start">Compare vs Clickup</p>
            <p className="flex justify-start">Compare vs Jira</p>

            <p className="font-semibold flex justify-start pt-10">Resources</p>
            <p className="flex justify-start">Pricing</p>
            <p className="flex justify-start">About us</p>
            <p className="flex justify-start">Careers</p>
            <p className="flex justify-start">Media kit</p>
            <p className="flex justify-start">Email us</p>
            <p className="flex justify-start">Security</p>
            <p className="flex justify-start">Cookie settings</p>
            <p className="flex justify-start">Terms & privacy</p>
            <p className="flex justify-start">California Privacy Notice</p>
            <p className="flex justify-start">Status</p>
        </div>
        </div>
        </div>
    )
}