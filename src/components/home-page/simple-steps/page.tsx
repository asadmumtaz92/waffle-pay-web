import React from 'react'

import { SSData } from '@/constant-data/simple-step'
import SSItem from './ss-item'

const SimpleSteps = () => {


    return (
        <div className='flex flex-col pt-[80px] md:pt-[120px] lg:pt-[140px] mx-[20px] md:mx-[164px] lg:mx-[64px]'>
            <h1 data-aos="fade-up" className='text-primary text-center text-[28px] leading-[34px] md:text-[42px] leading-[50px] lg:text-[48px] leading-[58px] font-[500] mb-[12px] md:mb-[16px]'>
                {`Three Simple Steps`}
            </h1>

            <p data-aos="fade-up" className='text-desc text-center text-[16px] font-[400] mb-[32px] md:mb-[40px] xl:mb-[48px]'>
                {`Just spen, Play, and Earn - It's That Easy!`}
            </p>

            <div className={`grid grid-cols-12`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] lg:gap-x-[32px]`}>
                        {SSData.map((item: any) => {
                            const { id, image, title, description } = item
                            return <SSItem key={id} id={id} image={image} title={title} description={description} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleSteps