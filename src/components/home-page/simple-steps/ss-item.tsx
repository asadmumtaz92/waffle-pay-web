import Image from 'next/image';
import React from 'react'


export interface SSItemProps {
    id: number;
    image: string;
    title: string;
    description: string;
}

const SSItem = ({ id, image, title, description }: SSItemProps) => {


    return (
        <div key={id} data-aos="fade-up" className={`bg-box border-[1px] border-box-stroke rounded-[24px] px-[24px] py-[32px] ${id == 3 ? 'mb-0' : 'mb-[24px]'} lg:mb-0`}>
            <div data-aos="fade-up" className='flex items-center justify-center max-h-[240px] lg:min-h-[240px]'>
                <Image data-aos="fade-up" src={image} priority className='flex flex-1 w-[180px] h-[170px] sm:w-[213px] sm:h-[200px] lg:h-[240px] lg:w-[260px] w-full  flex flex-1 ites-center object-center object-contain' width={12} height={12} alt={`${title}`} />
            </div>

            <div data-aos="fade-up" className='flex flex-col mt-[20px] xl:mt-[30px]'>
                <h2 className='text-primary text-left text-[20px] leading-[28px] md:text-[20px] md:leading-[28px] xl:text-[24px] xl:leading-[34px] font-[500] mb-[12px]'>{title}</h2>
                <p className='text-desc text-left text-[16px] leading-[24px] md:text-[18px] leading-[26px] font-[300]'>{description}</p>
            </div>
        </div>
    )
}

export default SSItem