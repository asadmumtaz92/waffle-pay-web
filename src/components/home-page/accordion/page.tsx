'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { AccordionData } from '@/constant-data/accordion'


const Accordion = () => {


    const [active, setActive] = useState(0)

    const activeHandler = (id: number) => {
        if (id == active) setActive(0)
        else setActive(id)
    }

    const AccordionItem = (data: any) => {
        const { id, title, desc } = data
        return (
            <div className='flex flex-col border-b-[1px] border-border pb-[28px] mb-[20px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-primary text-[1.25rem] leading-[1.75rem] font-[500]'>{title}</h2>
                    <div onClick={() => activeHandler(id)} className='cursor-pointer'>
                        <Image src={active == id ? '/icons/minus-circle.svg' : '/icons/plus-circle.svg'} priority className='' width={25} height={25} alt='' />
                    </div>
                </div>

                {active === id
                    && <p data-aos="fade-up" className='text-desc text-[1rem] leading-[1.5rem] font-[400] mt-[8px]'>{desc}</p>
                }
            </div>
        )
    }


    return (
        <div className='flex flex-col pt-[48px] md:pt-[88px] lg:pt-[108px] mx-[20px] md:mx-[64px] lg:mx-[200px]'>
            <h1 data-aos="fade-up" className='text-primary text-center text-[28px] leading-[34px] md:text-[42px] md:leading-[50px] lg:text-[48px] lg:leading-[58px] font-[500] mb-[12px] md:mb-[16px]'>
                {`Privacy and Security`}
            </h1>
            <p data-aos="fade-up" className='text-desc text-center text-[16px] font-[400] mb-[32px] md:mb-[40px] xl:mb-[48px]'>
                {`We are serious about security.`}
            </p>

            <div data-aos="fade-up" className={`grid grid-cols-12 mt-[32px] md:mt-[40px] lg:mt-[60px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1`}>
                        {AccordionData.map((item: any) => {
                            const { id, title, desc } = item
                            return <AccordionItem  key={id}id={id} title={title} desc={desc} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
