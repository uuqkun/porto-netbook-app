import React from 'react'
import { AboutUs, Blog, Achievement, CTA, FeatureCard, Features, Footer, Hero, Navbar, News, Team } from './components'
import { layout, sizing } from './styles'

const App = () => {
  return (
    <div className={`w-full overflow-hidden`}>
      {/* Navbar */}
      <div className={`${sizing.paddingX} ${layout.flexCenter} bg-gradient-lightblue`}>
        <div className={`${layout.boxWidth} min-h-screen`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Other comps */}
      <div className={`${sizing.paddingX} ${layout.flexStart}`}>
        <div className={`${layout.boxWidth}`}>
          <AboutUs />
          <Achievement />
        </div>
      </div>

      <div className={`${sizing.paddingX} ${layout.flexStart} bg-gradient-lightblue-2`}>
        <div className={`${layout.boxWidth}`}>
          <Features />
        </div>
      </div>

      <div className={`${sizing.paddingX} ${layout.flexStart}`}>
        <div className={`${layout.boxWidth}`}>
          <Team />
        </div>
      </div>

      <div className={`${sizing.paddingX} ${layout.flexStart} bg-dimBlue`}>
        <div className={`${layout.boxWidth}`}>
          <CTA />
        </div>
      </div>

      <div className={`${sizing.paddingX} ${layout.flexStart}`}>
        <div className={`${layout.boxWidth}`}>
          <News />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
