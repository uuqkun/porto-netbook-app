export const fontSize = {

    link: "text-[12px] sm:text-[14px]",
    paragraph: "text-[16px] sm:text-[18px]",
    heading1: "text-[36px] sm:text-[40px] md:text-[48px]",
    heading2: "text-[32px] sm:text-[36px]",
    heading3: "text-[18px] sm:text-[20px]",
};


export const sizing = {
    paddingX: "sm:px-12 px-6",
    paddingY: "sm:py-12 py-6",
    padding: "sm:px-12 px-6 sm:py-12 py-4",

    marginX: "sm:mx-12 mx-6",
    marginY: "sm:my-12 my-6",
}

export const layout = {
    boxWidth: "xl:max-w-[1200px] w-full",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",

    section: `flex md:flex-row flex-col ${sizing.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${sizing.paddingY}`,

    sectionImgReverse: `flex-1 flex ${sizing.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${sizing.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${sizing.flexStart} flex-col`,
}

