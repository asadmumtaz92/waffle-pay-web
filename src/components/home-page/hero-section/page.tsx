import React from "react";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {


    return (
        <>
            <div className={`!hero-bg bg-white checkout-div bg-cover bg-center flex w-full flex-col pt-[60px]`}>
                <div className="flex justify-center">
                    <div className="flex items-center justify-center bg-bg shadow rounded-[30px] px-[12px] py-[7px]">
                        <Image
                            src="/icons/rocket.png"
                            priority
                            className="w-[24px] h-[24px]"
                            alt="rocket"
                            height={10}
                            width={10}
                        />
                        <p className="text-[0.75rem] lg:text-[1rem] leading-[1.5rem] text-desc font-[400] ml-[6px]">
                            Announcing our latest product launch
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    className="flex flex-col mt-[20px] items-center"
                >
                    <h1 className="flex text-[2rem] leading-[38px] text-center h-[38px]">
                        From
                        <div className="relative flex checkout-text">
                            Checkout
                            <img src="/bg/reactangle.png" alt="reactangle" className="" />
                        </div>
                        <span className="hidden sm:flex"> To Jackpot</span>
                    </h1>
                    <h1 className="sm:hidden flex text-[2rem] leading-[38px] text-center h-[38px]">
                        To Jackpot
                    </h1>
                </div>

                <div className="flex justify-center">
                    <p
                        data-aos="fade-up"
                        className="text-[1rem] lg:text-[1.25rem] leading-[1.5rem] lg:leading-[1.75rem] text-desc text-center font-[400] mt-[12px]"
                    >
                        Buy what you want. And get rewarded for it.
                    </p>
                </div>

                {/* <div className='flex justify-center mt-[30px] mb-6'>
                    <Link data-aos="fade-up" href={'/#Contact'} className='flex justify-center mt-[24px]' >
                        <div className='custom-btn flex items-center overflow-hidden !bg-primary !min-w-[140px]'>
                            <div className='btn-text !bg-primary/[0.6] w-full text-center text-white'>Join Waitlist</div>
                        </div>
                    </Link>
                </div> */}

                <div className="flex justify-center mt-[30px] mb-6">
                    <Link
                        data-aos="fade-up"
                        href={"#/join-waitlist"}
                        className="h-[48px] text-[1rem] leading-[1.5rem]"
                    >
                        <Image
                            src={"/icons/join-btn.svg"}
                            priority
                            className="h-fullc w-auto smd:w-[178px]"
                            height={10}
                            width={12}
                            alt="join-waitlist button icon"
                        />
                    </Link>
                </div>
            </div>

            <div
                data-aos="fade-up"
                className={`bg-hero-bgd  bg-cover bg-top flex w-full h-full.`}
            >
                <Image
                    src={"/images/home-hero-section.svg"}
                    priority
                    className="w-full hidden md:block md:mt-[100px] lg:mt-[60px] xl:mt-[0px]"
                    height={12}
                    width={34}
                    alt="d"
                />
                <Image
                    src={"/images/hero-mob.svg"}
                    priority
                    className="w-full block md:hidden mt-[320px]"
                    height={12}
                    width={34}
                    alt="d"
                />
            </div>
        </>
    );
};

export default HeroSection;
