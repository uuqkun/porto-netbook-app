import { features } from '../constant'
import { fontSize, layout } from '../styles'

const Features = () => (
  <section className='flex flex-col items-center'>
    <div className={`flex-1 ${layout.flexCenter} flex-col lg:mb-0 mb-10`}>
      <div className='px-5 py-2 bg-dimBlue rounded-lg mb-4'>
        <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Whats Netboks?</p>
      </div>

      <h1 className={`${fontSize.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4 text-center`}>
        Community Main Feature
      </h1>

      <p className={`${fontSize.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7 text-center`}>The wise man therefore always holds in these matters to this principle of selection.</p>
    </div>

    {/* features */}

    <div className={`flex flex-wrap gap-2 md:gap-5 ${layout.flexCenter} py-10  `}>
      {features.map((feature) => (
        <div
          key={feature.id}
          className='flex items-center md:max-w-[522px] md:max-h-[182px] shadow-feature p-8 rounded-lg md:1/2 w-full' >
          <img
            src={feature.icon}
            alt={feature.title} 
            className='w-[66px] object-contain'/>

          <div className='md:ml-1'>
            <h2 className={`text-heading font-quicksand font-bold text-lg mb-1`}>{feature.title}</h2>
            <p className={`text-sm text-paragraph font-quicksand`}>{feature.value}</p>
          </div>

        </div>
      ))}
    </div>
  </section>
)


export default Features