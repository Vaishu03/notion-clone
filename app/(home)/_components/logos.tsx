import Image from "next/image"

export const Logos = () => {
    return(
        <div className="grid grid-cols-6 gap-6 items-center  max-w-[780px] h-[50px]  ">
        <div><img src="/images/figma-logo.png" alt="figma"/></div>
        <div><img width="287px" height="60px" src="/images/pixar.png" alt="pixar"/></div>
        <div><img width="788px" height="108px" src="/images/doordash.png" alt="doordash"/></div>
        <div><img src="/images/nike.png" alt="nike"/></div>
        <div><img src="/images/amazon.png" alt="amazon"/></div>
        <div><img src="/images/pinterest.png" alt="pinterest"/></div>
        <div className="w-12"><img src="/images/General_Electric_logo.png" alt="gel"/></div>
        <div><img src="/images/uber.png" alt="uber"/></div>
        <div><img src="/images/plaid.png" alt="plaid"/></div>
        <div><img src="/images/Toyota.png" alt="toyota"/></div>
        <div><img src="/images/snowflake.png" alt="snowflake"/></div>
        <div><img src="/images/headspace__1_.png" alt="headspace"/></div>
        <div><img src="/images/angel-list.png" alt="angel-list"/></div>
        <div><img src="/images/robinhood_logo.png" alt="robinhood"/></div>
        </div>
    )
}