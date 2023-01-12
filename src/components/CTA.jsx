import { appleStore, mobileMockup, playStore } from "../assets"
import { font, layout } from "../styles"

const CTA = () => (
  <section className="flex sm:flex-row flex-col min-h-[500px]">
    {/* text */}
    <div className={`flex-1 ${layout.flexStart} flex-col my-20`}>
      <div className='px-5 py-2 bg-darkerPrimary rounded-lg mb-4'>
        <p className={`text-[12px] text-primary font-quicksand font-semibold`}>Get Our Aplication</p>
      </div>

      <h1 className={`${font.heading2} text-heading font-extrabold font-quicksand leading-[50px] md:leading-[65px] mb-4`}>
        You Can Easily Find <br className="sm:block hidden" />
        This App…!
      </h1>

      <p className={`${font.paragraph} text-paragraph mb-4 max-w-[370px] font-quicksand leading-7`}>
        I say chap that's suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
      </p>

      <div className="flex ">
        <a href="https://github.com/uuqkun" target="_blank">
          <img
            src={playStore} alt="playStore"
            className="md:w-[145px] w-[114px] md:h-[52px] h-[41px] shadow-md mr-4" />
        </a>

        <a href="https://github.com/uuqkun" target="_blank">
          <img
            src={appleStore} alt="appleStore"
            className="md:w-[145px] w-[114px] md:h-[52px] h-[41px] shadow-md" />
        </a>
      </div>
    </div>

    {/* mobile phone image */}
    <div className="flex items-start overflow-hidden xl:max-w-[440px] md:max-w-[350px] max-w-[300px] xl:max-h-[480px] sm:max-h-[400px] max-h-[350px] self-end">
      <img
        src={mobileMockup}
        alt="mobile mockup"
        className=" w-full" />
    </div>
  </section>
)


export default CTA