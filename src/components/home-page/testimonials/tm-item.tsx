import Image from 'next/image';
import React from 'react'


export interface TestimonialProps {
    id: number;
    rating: number;
    review: string;
    image: string;
    name: string;
    designation: string;
    bg: string;
}

const SSItem = ({ id, rating, review, image, name, designation, bg }: TestimonialProps) => {

    return (
        <div key={id} data-aos="fade-up" className='bg-box h-auto border-[1px] border-box-stroke rounded-[24px] px-[24px] py-[32px] mb-[32px]'>
            <div className='flex gap-[3px] mb-[32px]'>
                <Image src={'/icons/star.svg'} alt='' height={20} width={20} />
                <Image src={'/icons/star.svg'} alt='' height={20} width={20} />
                <Image src={'/icons/star.svg'} alt='' height={20} width={20} />
                <Image src={'/icons/star.svg'} alt='' height={20} width={20} />
                <Image src={'/icons/star.svg'} alt='' height={20} width={20} />
            </div>

            <p data-aos="fade-up" className={`text-desc text-left text-[16px] .[font-size:_clamp(16px,20px,20px)] font-[400] mb-[32px] md:mb-[40px] xl:mb-[48px] ${bg}`}>
                {`“${review}”`}
            </p>


            <div data-aos="fade-up" className='flex mt-[32px] items-center'>
                <div className={`bg-tt${id} flex items-center`}>
                    <Image src={image} priority className={`h-[56px] w-[56px] flex ites-center object-center object-cover rounded-[28px] bg-tt${id}`} width={56} height={56} alt={`${review}`} />
                </div>

                <div className='flex flex-col ml-[16px]'>
                    <h2 className='text-primary text-left [font-size:_clamp(1.25rem,1.5rem,1.5rem)] font-[500] leading-[1] mb-[4px]'>— {name}</h2>

                    <p className='text-desc text-left [font-size:_clamp(1rem,1rem,1.125rem)] font-[300]'>{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default SSItem