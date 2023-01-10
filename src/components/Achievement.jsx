import { achievements } from "../constant"
import { fontSize, layout } from "../styles"
import Button from './Button'

const Achievement = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse my-20 py-10 gap-5">
      {/* left side */}
      <div className={`flex-[2] flex justify-start items-center sm:flex-row flex-col`}>
        {/* cards */}
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`${index !== achievements.length - 1 ? 'shadow-card sm:mr-6 md:mb-0 mb-5' : 'border-gray-200 border-[1px] md:mr-0'}  md:max-w-[340px] lg:max-h-[340px] max-h-auto p-10 rounded-2xl`}>
            <div className="flex items-center gap-2 mb-8">
              <img
                src={achievement.iconTitle}
                alt="icon"
                className="w-[28px]" />
              <h4 className={`sm:${fontSize.heading3} text-[16px] font-quicksand text-heading font-semibold`}>{achievement.title}</h4>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <img
                src={achievement.secondIcon}
                alt="icon"
                className={`${index !== achievements.length - 1 ? 'w-[60px] h-[34px]' : 'w-[24px]'} object-contain`} />
              <h4 className="font-quicksand md:text-[14px] text-xs">{achievement.desc}</h4>
            </div>

            <p className={`md:text-[14px] text-xs font-quicksand text-paragraph mb-8 leading-[25px]`}>{achievement.cardText}</p>

            <a
              href="#"
              className={`${index !== achievements.length - 1 ? 'text-primary' : 'text-black'} md:text-[14px] text-xs font-quicksand flex items-center gap-2`}>
              {achievement.button}

              <img src={achievement.arrowIcon} alt="arrowIcon" />
            </a>

          </div>
        ))}
      </div>

      {/* right side */}
      <div className={`flex-1 ${layout.flexCenter}`}>
        <div className={`flex-1 ${layout.flexStart} flex-col lg:mb-0 mb-10`}>
          <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
            <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Our Achievement</p>
          </div>

          <h1 className={`${fontSize.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4`}>
            We are Connecting <br className="sm:block hidden" />
            You The Digital Life.
          </h1>

          <p className={`${fontSize.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7`}>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>

          <Button value={'Discover Me'} classes="text-white bg-primary shadow-button"/>
        </div>
      </div>
    </section>
  )
}

export default Achievement