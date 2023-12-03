
import { ArrowRight } from "lucide-react";
import { Buddies } from "./_components/buddies";
import { Carousel } from "./_components/carousel";
import { CardList } from "./_components/data";
import { Heading } from "./_components/heading";
import { Logos } from "./_components/logos";
import Image from "next/image";
import { Footer } from "./_components/footer";
import { Button } from "@/components/ui/button";
import { GetStarted } from "./_components/getstarted";
import { Endless } from "./_components/endless";
import { Carousel2 } from "./_components/carousel2";


const HomePage = () => {
  return ( 
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start 
      text-center gap-y-6 flex-1 px-16 pb-10">
        <Heading />
        <Buddies />
        <div className="container max-w-[1130px] mx-auto py-0 px-20">
          <div className="grid lg:grid-cols-4 gap-6">
            {CardList.map(card => (
              <div className="rounded-2xl border hover:border-slate-300 items-center bg-gray-200 px-2 py-2 w-41 hover:bg-white">
                
                <h3 className="font-bold inline-flex items-center"><span className="h-3 w-2 pr-5">{card.img}</span>{card.title}</h3><br />
                <p>{card.text}</p>
              </div> 
            ))}
          </div>
        </div>
        <Carousel />
        <div className="max-w-5xl space-y-3 pt-20">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold">
            Millions run on Notion every day
            </h2>
            <p className="justify-center space-y-0">
            Powering the world’s best teams, from next-generation startups <br />
            to established enterprises.
            </p>
            <a className="justify-center text-blue-600 flex">
              Read customer stories
              <ArrowRight className="h-6 w-4 ml-1"/>
            </a>
        </div>
       <Logos />
       <div className="max-w-5xl space-y-3 pt-40">
            <Image
            className="object-contain"
            width="780"
            height="450"
            src="/tools.png"
            alt="sample"
            />
       </div>
       <div className="max-w-5xl space-y-3 pt-20">
            <h2 className="text-3xl sm:text-5xl md:text-4xl font-semibold">
            Join a global movement. <br /> Unleash your creativity.
            </h2>
            <p className="justify-center space-y-0">
            Our vibrant community produces content, teaches courses,
            and leads events all over <br />the world.
            </p>
            <a className="justify-center text-blue-600 flex pt-2">
              Learn more
              <ArrowRight className="h-6 w-4 ml-1"/>
            </a>
            <Image
            src="/images/avatars.webp"
            width="900"
            height="400"
            alt="avatars"
            />
        </div>
        
       <Carousel2 />
       <Endless />
       <GetStarted />
       <hr />
       <Footer />
      </div>
    </div>
  );
}

export default HomePage;
