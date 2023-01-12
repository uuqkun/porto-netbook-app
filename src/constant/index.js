import {
    dot,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    member1,
    member2,
    member3,
    member4,
    blog1,
    blog2,
    blog3,
    twitter,
    instagram,
    facebook,
    linkedIn,
    star,
    people,
    trophy,
    githubIcon,
    blackArrowRight,
    blueArrowRight
} from "../assets"

export const navLinks = [
    {
        id: 'home',
        value: 'Home'
    },
    {
        id: 'community',
        value: 'Community'
    },
    {
        id: 'blog',
        value: 'Blog'
    },
    {
        id: 'repository',
        value: 'Repository'
    },
];


export const joinItems = [
    {
        id: 1,
        icon: dot,
        title: 'Groups'
    },
    {
        id: 2,
        icon: dot,
        title: 'Messages'
    },
    {
        id: 3,
        icon: dot,
        title: 'Share'
    },
];

export const achievements = [
    {
        id: 1,
        iconTitle: star,
        title: '4.8 Rating',
        secondIcon: people,
        desc: "+836K members",
        cardText: "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        button: 'Join our community',
        arrowIcon: blueArrowRight
    },
    {
        id: 2,
        iconTitle: trophy,
        title: 'Awards',
        secondIcon: githubIcon,
        desc: "Best of 2021 on Github",
        cardText: "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
        button: 'Go To Awards',
        arrowIcon: blackArrowRight
    },
];

export const features = [
    {
        id: 'f-1',
        title: 'Members, Friends',
        value: 'Members, Friends Connection ( like followers ), Private Message',
        icon: feature1
    },
    {
        id: 'f-2',
        title: 'Groups',
        value: 'Your users can create groups to let other users to join and talk',
        icon: feature2
    },
    {
        id: 'f-3',
        title: 'Forum',
        value: 'Forum is ready by BBPress. Your users can make topics and talk.',
        icon: feature3
    },
    {
        id: 'f-4',
        title: 'Custom Modules',
        value: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
        icon: feature4
    },
    {
        id: 'f-5',
        title: 'List Builder',
        value: 'Members, Groups list can be modified by drag & drop live builder.',
        icon: feature5
    },
    {
        id: 'f-6',
        title: 'List Scroll Effects',
        value: '8 different scroll effects are ready.You can always change by your tastes.',
        icon: feature6
    },
];


export const members = {
    new: [
        {
            id: 'card-1',
            image: member1,
            name: 'Budi Santoso',
            insta: '@budi_st'
        },
        {
            id: 'card-2',
            image: member2,
            name: 'Fahim Rahman',
            insta: '@fahim'
        },
        {
            id: 'card-3',
            image: member3,
            name: 'Naufal Jayyeed',
            insta: '@naufal'
        },
    ],
    popular: [
        {
            id: 'card-1',
            image: member2,
            name: 'Fahim Rahman',
            insta: '@fahim'
        },
        {
            id: 'card-2',
            image: member4,
            name: 'Arif Arifin',
            insta: '@a_arf'
        },
    ],
    active: [
        {
            id: 'card-1',
            image: member1,
            name: 'Budi Santoso',
            insta: '@budi_st'
        },
        {
            id: 'card-2',
            image: member2,
            name: 'Fahim Rahman',
            insta: '@fahim'
        },
        {
            id: 'card-3',
            image: member3,
            name: 'Naufal Jayyeed',
            insta: '@naufal'
        },
        {
            id: 'card-4',
            image: member4,
            name: 'Arif Arifin',
            insta: '@a_arf'
        },
    ]
};


export const blogs = [
    {
        id: 'blog-1',
        title: 'It Does Not Matter Hows Slowly go as Long',
        image: blog1,
        link: '#'
    },
    {
        id: 'blog-2',
        title: 'Netbook Network Added New Photo Filter',
        image: blog2,
        link: '#'
    },
    {
        id: 'blog-3',
        title: 'We Optimised Netbooks Better Navigation',
        image: blog3,
        link: '#'
    },
];


export const footerLinks = [
    {
        title: 'Home',
        links: [
            {
                name: 'Home',
                link: '#'
            },
            {
                name: 'Community',
                link: '#'
            },
            {
                name: 'Events',
                link: '#'
            },
            {
                name: 'Contact',
                link: '#'
            },
        ]
    },
    {
        title: 'Home',
        links: [
            {
                name: 'Home',
                link: '#'
            },
            {
                name: 'Community',
                link: '#'
            },
            {
                name: 'Events',
                link: '#'
            },
            {
                name: 'Contact',
                link: '#'
            },
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'Blog',
                link: '#'
            },
            {
                name: 'News',
                link: '#'
            },
            {
                name: 'Guides',
                link: '#'
            },
            {
                name: 'Help Center',
                link: '#'
            },
        ]
    },
    {
        title: 'Community',
        links: [
            {
                name: 'NewsFeed',
                link: '#'
            },
            {
                name: 'Profile',
                link: '#'
            },
            {
                name: 'Friends',
                link: '#'
            },
            {
                name: 'Forum',
                link: '#'
            },
        ]
    },
    {
        title: 'Main links',
        links: [
            {
                name: 'Members',
                link: '#'
            },
            {
                name: 'Activity',
                link: '#'
            },
            {
                name: 'Groups',
                link: '#'
            },
            {
                name: 'Private group',
                link: '#'
            },
        ]
    },
];

export const socialMedia = [
    {
        name: twitter,
        icon: twitter
    },
    {
        name: instagram,
        icon: instagram
    },
    {
        name: facebook,
        icon: facebook
    },
    {
        name: linkedIn,
        icon: linkedIn
    },
];