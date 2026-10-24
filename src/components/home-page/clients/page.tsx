"use client"
import Image from "next/image"


const Clients = () => {


    const logos = Array(20).fill(
        <div className="relative w-[89.25px] md:w-[227.01px] h-[36.85px]  md:h-[55.24px]">
            <Image fill src="/clients/airbnb.svg" alt="Image2Work logo" sizes="(max-width: 69.25px) 40vw, (max-width: 227.01px) 177vw" className="" />
        </div>
    )
    const logos2 = Array(20).fill(
        <div className="relative w-[81.92px] md:w-[203px] h-[34.78px]  md:h-[48.45px]">
            <Image fill src="/clients/amazon.svg" alt="Posterlife logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto " />
        </div>
    )
    const logos3 = Array(20).fill(
        <div className="relative w-[85.92px] md:w-[165px] h-[31.78px]  md:h-[45px]">
            <Image fill src="/clients/apple.svg" alt="Techdestination logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto " />
        </div>
    )
    const logos4 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[70px] h-[38.78px]  md:h-[65px]">
            <Image fill src="/clients/best.svg" alt="Pseb logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos5 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px]  md:h-[60px]">
            <Image fill src="/clients/netflix.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos6 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px]  md:h-[60px]">
            <Image fill src="/clients/spotify.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos7 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px]  md:h-[60px]">
            <Image fill src="/clients/target.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos8 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px]  md:h-[60px]">
            <Image fill src="/clients/uber.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos9 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px]  md:h-[60px]">
            <Image fill src="/clients/ulta.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )
    const logos10 = Array(20).fill(
        <div className="relative w-[51.92px] md:w-[110px] h-[38.78px] md:h-[60px]">
            <Image fill src="/clients/walmart.svg" alt="Danban logo" sizes="(max-width: 61.92px) 40vw, (max-width: 203px) 177vw" className="mr-1 md:mr-4 w-16 md:w-auto" />
        </div>
    )

    const combinedLogos = []
    for (let i = 0; i < logos.length; i++) {
        combinedLogos.push(logos[i], logos3[i], logos2[i], logos5[i], logos4[i], logos6[i], logos7[i], logos8[i], logos9[i], logos10[i])
    }


    return (
        <div className="pt-[80px] md:pt-[120px] lg:pt-[140px] clients">
            <p data-aos="fade-up" className="text-primary text-[1.125rem] leading-[1.625rem] font-[500] text-center mb-[48px]">
                Shop your favorite brands
            </p>

            <div className="flex overflow-hidden" data-aos="fade-up">
                <div className="flex items-center space-x-6 md:space-x-12 animate-scrollingLogo">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>

                <div className="flex items-center space-x-6 md:space-x-12 animate-scrollingLogo ml-20">
                    {combinedLogos.map((logo, index) => (
                        <div key={index}>{logo}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
