export interface TestimonialProps {
    id: number;
    rating: number;
    review: string;
    image: string;
    name: string;
    designation: string;
    bg: string;
}

export const TestimonialData: TestimonialProps[] = [
    {
        id: 1,
        rating: 5,
        review: `It's incredible how fast the rewards add up.`,
        image: '/images/testimonial1.png',
        name: 'Marcus L.',
        designation: `Denver CO`,
        bg: 'text-[#E9DCBB]',
    },
    {
        id: 2,
        rating: 5,
        review: `Waffle has turned my regular shopping into a adventure. Every purchase feels like a step towards a bigger reward. And when I cash in for gift cards, it's always for something special.`,
        image: '/images/testimonial2.png',
        name: 'Sarah G.',
        designation: `Seattle, WA`,
        bg: 'bg-[#E9DCBB]',
    },
    {
        id: 3,
        rating: 5,
        review: `Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.`,
        image: '/images/testimonial3.png',
        name: 'Renee Wells',
        designation: `Product Designer, Quotient`,
        bg: 'bg-[#E5CFE7]',
    },
    {
        id: 4,
        rating: 5,
        review: `I was skeptical at first, but this rewards program has become part of my daily routine. Earning rewards while shopping and then using them  to play games is not only fun but also rewarding.`,
        image: '/images/testimonial4.png',
        name: 'Kevin T.',
        designation: `Chicago, IL`,
        bg: 'bg-[#C1D3BB]',
    },
    {
        id: 5,
        rating: 5,
        review: `As a budget conscious shopper, I love how this app keeps track off my spending.`,
        image: '/images/testimonial5.png',
        name: 'Jordan M.',
        designation: `Sacremento, CA`,
        bg: 'bg-[#D9E5CC]',
    },
    {
        id: 6,
        rating: 5,
        review: `Highly recommend it to anyone looking to make the most out of their everyday purchases! `,
        image: '/images/testimonial6.png',
        name: 'Jennifer A.',
        designation: `Miami, FL`,
        bg: 'bg-[#D9D0E6]',
    },
]