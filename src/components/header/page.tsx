'use client'
import React, { useState, } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, } from "lucide-react"


const Header = () => {


    const [showMenu, setShowMenu] = useState(false)


    return (
        <header className='flex justify-between items-center w-full h-[48px] md:h-[72px] px-[20px] md:px-[64px] fixed top-0 left-0 right-0 z-[50] bg-white'>
            <div className=''>
                <Link className='' href='/'>
                    <Image src='/logo.svg' priority className='w-[96px] h-[19px] md:w-[137px] md:h-[23px]' alt='Waffle Pay logo' width={12} height={12} />
                </Link>
            </div>

            <div className='hidden md:flex gap-x-[30px]'>
                <Link className='text-primary text-[1rem] leading-[1rem] font-[500] p-[5px]' href='/#score-points'>
                    Score Points
                </Link>
                <Link className='text-mr text-primary' href='/#games'>
                    Games
                </Link>
            </div>

            {/* FOR MOBILE */}
            <div className='md:hidden flex flex-col'>
                {showMenu
                    ? <div data-aos="fade-out" onClick={() => setShowMenu(!showMenu)} className='p-1 cursor-pointer'>
                        <Image src={'/icons/close.svg'} priority className="text-primary" width={24} height={24} alt='Close icon' />
                    </div>
                    : <div data-aos="fade-in" onClick={() => setShowMenu(!showMenu)} className='p-1 cursor-pointer'>
                        <Menu className="text-primary" size={24} />
                    </div>
                }

                {showMenu
                    && <div className='flex flex-col bg-white drop-shadow py-[10px] rounded-[5px] absolute top-[60px] right-[20px] min-w-[200px]' data-aos="fade-left">
                        <Link className='hover:bg-primary/[0.8] hover:text-white text-primary text-[1rem] leading-[1rem] font-[500] px-[15px] py-[8px] border-b-[1px] border-border' href='/' onClick={() => setShowMenu(!showMenu)}>
                            Home
                        </Link>
                        <Link className='hover:bg-primary/[0.8] hover:text-white text-primary text-[1rem] leading-[1rem] font-[500] px-[15px] py-[8px] border-b-[1px] border-border' href='/#score-points' onClick={() => setShowMenu(!showMenu)}>
                            Score Points
                        </Link>
                        <Link className='hover:bg-primary/[0.8] hover:text-white text-primary text-[1rem] leading-[1rem] font-[500] px-[15px] py-[8px]' href='/#games' onClick={() => setShowMenu(!showMenu)}>
                            Games
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header