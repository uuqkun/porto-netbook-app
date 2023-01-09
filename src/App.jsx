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
          <Features />
          <Team />
          <CTA />
          <News />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
