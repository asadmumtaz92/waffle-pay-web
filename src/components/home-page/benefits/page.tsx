import Image from 'next/image'
import React from 'react'

import { BenefitData } from '@/constant-data/benefits'

const Benefits = () => {


    const Items = (data: any) => {
        const { id, image, title, desc } = data?.data
        return (
            <div key={id} className={`flex items-center ${id == 3 ? 'mb-0' : 'mb-[28px]'}`}>
                <Image data-aos="fade-up" src={image} priority className='object-contain gap-[10px]' width={44} height={44} alt={title} />
                <div className='flex flex-col ml-[10px]'>
                    <h4 data-aos="fade-up" className='text-primary text-left text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] font-[500] mb-[4px]'>
                        {title}
                    </h4>
                    <p data-aos="fade-up" className='text-desc text-left text-[16px] font-[400]'>
                        {desc}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col pt-[80px] md:pt-[120px] lg:pt-[140px] mx-[20px] md:mx-[64px]'>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] lg:gap-x-[32px]`}>
                <div className='flex flex-col justify-center'>
                    <h1 data-aos="fade-up" className='text-primary text-center lg:text-left text-[28px] leading-[34px] md:text-[42px] md:leading-[50px] lg:text-[48px] leading-[58px] font-[500] mb-[12px] lg:mb-[16px]'>
                        {`Benefits`}
                    </h1>
                    <p data-aos="fade-up" className='text-desc text-center lg:text-left text-[16px] font-[400] mb-[32px] lg:mb-[40px] xl:mb-[48px]'>
                        {`Why do our members love Waffle?`}
                    </p>

                    <>
                        {BenefitData.map((item: any) => {
                            return <Items key={item?.id} data={item} />
                        })}
                    </>
                </div>

                <div className={`flex items-center sh-full justify-center md:justify-end h-full w-full mt-[40px] md:mt-0 !rounded-[24px]`}>
                    <Image data-aos="fade-up" src={'/images/benefits.svg'} priority className='flex w-[100%] h-[90%] lg:h-[100%] xl:w-[90%] xl:h-[90%]' width={110} height={100} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Benefits