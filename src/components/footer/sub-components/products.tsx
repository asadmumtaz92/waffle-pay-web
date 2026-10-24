import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProductLinks = () => {


    const productLinks = [
        {
            id: 1,
            title: 'Home',
        },
        {
            id: 2,
            title: 'Score Points',
        },
        {
            id: 3,
            title: 'Games',
        },
    ]


    const ProductItem = (data: any) => {
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
            {productLinks.map((item: any) => {
                return (
                    <ProductItem key={item?.id} data={item} />
                )
            })}
        </div>
    )
}

export default ProductLinks