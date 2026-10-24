import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SocialLinks from './sub-components/social-links'
import ProductLinks from './sub-components/products'
import ResoursesLink from './sub-components/resourses'


function page() {


    return (
        <div className={`w-full h-full flex flex-col bg-[url('/bg/footer.svg')] bg-center lg:bg-cover bg-no-repeat px-[20px] md:px-[64px]`}>
            {/* TOP HEADINGS */}
            <>
                <div className="flex justifu-center pt-[80px] pd:mt-[120px] xl:pt-[140px] mb-[12px]">
                    <div data-aos="fade-up" className="flex items-center justify-center w-auto m-auto bg-bg shadow rounded-[30px] px-[12px] py-[7px]">
                        <Image src="/icons/rocket.png" priority className='w-[24px] h-[24px]' alt="rocket" height={10} width={10} />
                        <p className="text-[0.75rem] lg:text-[1rem] leading-[1.5rem] text-desc font-[400] ml-[6px]">
                            Know more about us
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" className="flex flex-col items-center mb-[40px] xl:mb-[48px]">
                    <h1 className='flex text-primary text-[1.75rem] leading-[34px] text-center tracking-[0.01rem] font-[500] mb-[12px]'>
                        Join Waffle!
                    </h1>

                    <p className='flex text-desc text-[1rem] leading-[1.5rem] text-center tracking-[0.01rem] font-[400]'>
                        Start your journey today.
                    </p>
                </div>
            </>

            {/* APP LINKS */}
            <div data-aos="fade-up" className="flex items-center justify-center gap-x-[30px] mb-[80px] md:mb-[100px] xl:mb-[120px]">
                <div className=''>
                    <Image src={'/icons/qr-apple.svg'} priority className='w-auto mb-[20px]' width={34} height={34} alt='' />
                    <Link href={''}>
                        <Image src={'/icons/link-apple.svg'} priority className='w-auto' width={34} height={34} alt='' />
                    </Link>
                </div>
                <div className=''>
                    <Image src={'/icons/qr-google.svg'} priority className='w-auto mb-[20px]' width={34} height={34} alt='' />
                    <Link href={''}>
                        <Image src={'/icons/link-google.svg'} priority className='w-auto' width={34} height={34} alt='' />
                    </Link>
                </div>
            </div>

            {/* FORM & LINKS */}
            <div data-aos="fade-up" className={`grid grid-cols-12`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1`}>
                        <div className='flex flex-col lg:flex-row lg:justify-between gap-x-[32px]'>
                            <div className='flex flex-col w-full mb-[40px]'>
                                <Image src={'/logo.svg'} priority className='' width={140} height={25} alt='' />
                                <p className='text-desc text-[1rem] leading-[1.5rem] font-[400] my-[24px]'>{`Join our newsletter to stay up to date on features and releases.`}</p>
                                {/* Subscribe */}
                                <div className='flex justify-start w-full'>
                                    <input
                                        type='text'
                                        autoCorrect=''
                                        placeholder='Enter your email'
                                        className='text-desc h-[48px] px-[22px] rounded-[24px] w-full min-w-[150px] max-w-[400px] mr-[10px]'
                                    />
                                    <div className='custom-btn flex items-center overflow-hidden !bg-primary min-w-[123px]'>
                                        <div className='btn-text !bg-primary/[0.6] w-full text-center text-white'>Subscribe</div>
                                    </div>
                                </div>
                            </div>
                            {/* LINKS */}
                            <div className='w-full p-[8px]'>
                                <div className={`grid grid-cols-3 gap-x-[20px]`}>
                                    <ProductLinks />
                                    <ResoursesLink />
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPY RIGHTS */}
            <div className="col-start-1 col-end-13">
                <div className={`grid grid-cols-1 border-t-[1px] border-divider`}>
                    <div className='w-full text-nowrap pt-[32px] pb-[24px] text-center text-desc'>
                        {`© 2024 Waffle Pay. All rights reserved.`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page