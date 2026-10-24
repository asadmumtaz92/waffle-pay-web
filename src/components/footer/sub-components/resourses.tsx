import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const RecoursesLinks = () => {


    const recoursesLinks = [
        {
            id: 1,
            title: 'Terms of Use',
        },
        {
            id: 2,
            title: 'Terms of Sale',
        },
        {
            id: 3,
            title: 'Privacy Policy',
        },
        {
            id: 4,
            title: 'Affiliate Disclosure',
        },
        {
            id: 5,
            title: 'Financial Disclosure',
        },
        {
            id: 6,
            title: 'Responsible Social Gaming',
        },
    ]


    const RecoursesItem = (data: any) => {
        const { id, title } = data?.data
        return (
            <div key={id} className='mb-[16px]'>
                <Link href={`/#${title}`} className='flex items-center'>
                    <p className='text-desc text-[14px] font-[400] leading-[18px] text-left'>{title}</p>
                </Link>
            </div>
        )
    }


    return (
        <div className=''>
            <h1 className='text-primary text-[1rem] font-[600] leading-[1.5rem] text-left mb-[16px]'>Product</h1>
            {recoursesLinks.map((item: any) => {
                return (
                    <RecoursesItem key={item?.id} data={item} />
                )
            })}
        </div>
    )
}

export default RecoursesLinks