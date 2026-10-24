export interface SSDataProps {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const SSData: SSDataProps[] = [
    {
        id: 1,
        image: '/images/s-step1.svg',
        title: `Spend with debit card`,
        description: `Link your debit card to our app and effortlessly earn rewards while you shop.`,
    },
    {
        id: 2,
        image: '/images/s-step2.svg',
        title: `Play our games`,
        description: `Level up your rewards with our captivating games.`,
    },
    {
        id: 3,
        image: '/images/s-step3.svg',
        title: `Redeem into gift cards`,
        description: `Turn your winnings into gift cards that keep earning rewards with every purchase.`,
    },
]