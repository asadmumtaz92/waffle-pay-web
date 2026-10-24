import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const SocialLinks = () => {


    const socialLink = [
        {
            id: 1,
            icon: '/icons/facebook.svg',
            title: 'Facebook',
        },
        {
            id: 2,
            icon: '/icons/instagram.svg',
            title: 'Instagram',
        },
        {
            id: 3,
            icon: '/icons/twitter.svg',
            title: 'Twitter',
        },
        {
            id: 4,
            icon: '/icons/linkedin.svg',
            title: 'LinkedIn',
        },
    ]


    const SocialItem = (data: any) => {
        const { id, icon, title } = data?.data
        return (
            <div key={id} className='mb-[16px]'>
                <Link href={`/#${title}`} className='flex items-center'>
                    <Image src={icon} priority className='w-auto mr-[11px]' width={24} height={24} alt={`${title} icon`} />
                    <p className='text-desc text-[14px] font-[400] leading-[18px] text-left'>{title}</p>
                </Link>
            </div>
        )
    }


    return (
        <div className=''>
            <h1 className='text-primary text-[1rem] font-[600] leading-[1.5rem] text-left mb-[16px]'>Social</h1>
            {socialLink.map((item: any) => {
                return (
                    <SocialItem key={item?.id} data={item} />
                )
            })}
        </div>
    )
}

export default SocialLinks