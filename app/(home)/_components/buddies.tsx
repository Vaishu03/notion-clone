import Image from "next/image"

export const Buddies = () => {
    return(
        <div className='flex flex-col items-center justify-center max-w-5xl'>
            <div className='flex items-center'>
                <div className='relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:h-[200px] md:w-[600px]'>
                    <Image
                    src="/home-hero.webp"
                    fill
                    className="object-contain"
                    alt="heroes"
                    />
                </div>
            </div>
        </div>
    )
}