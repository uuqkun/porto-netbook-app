import { blackArrowRight, line } from '../assets'
import { blogs } from '../constant'
import { font, layout } from '../styles'

const News = () => {
  return (
    <section
      className='flex flex-col py-20'>

      <div className={`flex-1 ${layout.flexCenter} flex-col lg:mb-0 mb-10`}>
        <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
          <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Get Our Application</p>
        </div>

        <h1 className={`${font.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}>
          Latest News
        </h1>

      </div>

      <div
        className='flex md:overflow-auto overflow-x-scroll whitespace-nowrap'>
        {blogs.map(({ id, title, image, link }, index) => (
          <a
            href={link}
            key={id}
            className={`${index !== blogs.length - 1 ? 'mr-16' : 'mr-0'} md:max-w-[340px] max-w-[260px] min-w-[220px] whitespace-normal`}>

            {/* blog image */}
            <div className='w-full rounded-[20px] overflow-hidden md:mb-[25px] mb-[20px]'>
              <img src={image} alt={title} />
            </div>

            {/* blog text area */}
            <div className='w-full flex items-center p-2'>
              <img
                src={line}
                alt="line"
                className='md:w-[40px] w-[35px] mr-3' />

              <div className='flex-1 flex flex-col'>
                <h4 className={`sm:${font.heading3} text-[16px] font-quicksand text-heading font-semibold md:mb-5 mb-3`}>{title}</h4>
                <p className={`flex gap-4 items-center ${font.paragraph} hover:text-primary active:text-primary`}>
                  Continue Reading
                  <img
                    src={blackArrowRight}
                    alt="arrow"
                    className='w-[10px] h-[10px]' />
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default News