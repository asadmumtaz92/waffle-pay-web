import React from "react"
import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import "./globals.css"

const inter_tight = Inter_Tight({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Waffle Pay",
    description: "Waffle Pay",
}

import { AOSInit } from "./wrappers/aos"
import Header from "@/components/header/page"
import Footer from '@/components/footer/page'

interface RootLayoutProps {
    readonly children: React.ReactNode
}


const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <html lang="en">
            <AOSInit />
            <body className={`${inter_tight.className}`}>
                <Header />
                <div className="pt-[48px] md:pt-[72px]">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout