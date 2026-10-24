import React from 'react'
import Link from 'next/link'


const StillQuestion = () => {


    return (
        <div data-aos="fade-up" className='flex flex-col my-[60px] md:mt-[100px] lg:mt-[120px] mx-[20px] md:mx-[64px] lg:mx-[200px] bg-box px-[20px] py-[40px] rounded-[24px] border-[1px]'>
            <h2 data-aos="fade-up" className='text-primary text-[1.75rem] leading-[34px] font-[500] text-center tracking-[-0.01rem]'>
                {`Still have questions?`}
            </h2>

            <p data-aos="fade-up" className='text-desc text-[1rem] leading-[1.5rem] font-[500] text-center mt-[15px]'>
                {`Can’t find the answer you’re looking for? Please chat to our friendly team.`}
            </p>

            <div className='flex justify-center'>
                <Link data-aos="fade-up" href={'/#Contact'} className='flex justify-center mt-[24px]' >
                    <div className='custom-btn flex items-center overflow-hidden !bg-primary min-w-[123px]'>
                        <div className='btn-text !bg-primary/[0.6] w-full text-center text-white'>Contact</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default StillQuestion