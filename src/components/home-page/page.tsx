import React from 'react'

import HeroSection from './hero-section/page'
import Clients from './clients/page'
import SimpleSteps from './simple-steps/page'
import Testimonials from './testimonials/page'
import Benefits from './benefits/page'
import Accordion from './accordion/page'
import StillQuestion from './still-question/page'


const HomePage = () => {


    return (
        <>
            <HeroSection />
            <Clients />
            <SimpleSteps />
            <Benefits />
            <Testimonials />
            <Accordion />
            <StillQuestion />
        </>
    )
}

export default HomePage