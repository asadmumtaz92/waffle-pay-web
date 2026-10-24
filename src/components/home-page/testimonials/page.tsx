import React from 'react'
import { TestimonialData } from '@/constant-data/testimonials'
import TMItem from './tm-item'


const Testimonials = () => {

    return (
        <div className='flex flex-col pt-[80px] md:pt-[120px] lg:pt-[140px] px-[20px] md:px-[64px]'>
            <h1 data-aos="fade-up" className='text-primary text-center text-[28px] leading-[34px] md:text-[42px] md:leading-[50px] lg:text-[48px] lg:leading-[58px] font-[500] font-[500] mb-[12px] lg:mb-[16px]'>
                {`Customer Testimonials`}
            </h1>
            <p data-aos="fade-up" className='text-desc text-center text-[16px] font-[400] mb-[32px] lg:mb-[40px] xl:mb-[48px]'>
                {`What our members are saying.`}
            </p>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] lg:gap-x-[32px]`}>
                <div>
                    {TestimonialData.map((item: any,) => {
                        const { id, rating, review, image, name, designation, bg } = item
                        if (id == 1 || id == 2) {
                            return <TMItem key={id} id={id} rating={rating} review={review} image={image} name={name} designation={designation} bg={bg} />
                        }
                    })}
                </div>
                <div>
                    {TestimonialData.map((item: any,) => {
                        const { id, rating, review, image, name, designation, bg } = item
                        if (id == 3 || id == 4) {
                            return <TMItem  key={id}id={id} rating={rating} review={review} image={image} name={name} designation={designation} bg={bg} />
                        }
                    })}
                </div>
                <div>
                    {TestimonialData.map((item: any,) => {
                        const { id, rating, review, image, name, designation, bg } = item
                        if (id == 5 || id == 6) {
                            return <TMItem  key={id}id={id} rating={rating} review={review} image={image} name={name} designation={designation} bg={bg} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials