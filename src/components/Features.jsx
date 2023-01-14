import { features } from '../constant'
import { font, layout } from '../styles'

const Features = () => (
  <section className='flex flex-col items-center py-20'>
    <div className={`flex-1 ${layout.flexCenter} flex-col lg:mb-0 mb-10`}>
      <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
        <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Whats Netboks?</p>
      </div>

      <h1 className={`${font.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}>
        Community Main Feature
      </h1>

      <p className={`${font.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7 text-center`}>The wise man therefore always holds in these matters to this principle of selection.</p>
    </div>

    {/* features */}

    <div className={`flex flex-wrap gap-2 md:gap-8 ${layout.flexCenter} py-10  `}>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`${index !== features.length ? 'mb-4' : 'mb-0'} md:mb-0 flex items-center md:max-w-[522px] md:max-h-[182px] shadow-feature bg-white md:p-8 p-6 rounded-lg md:1/2 w-full`} >
          <img
            src={feature.icon}
            alt={feature.title} 
            className='md:w-[88px] w-[66px]'/>

          <div className='md:ml-1'>
            <h2 className={`text-heading font-quicksand font-bold text-lg mb-1`}>{feature.title}</h2>
            <p className={`text-paragraph font-quicksand`}>{feature.value}</p>
          </div>

        </div>
      ))}
    </div>
  </section>
)


export default Features