import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StackingShowCases from './components/StackingShowCases'
import ImageFlow from './components/ImageFlow'
import Expernc from './components/Expernc'
import PersonalProjects from './components/PersonalProjects'
import SkillsSection from './components/SkillsSection'
import WorkHistory from './components/WorkHistory'
import { Discover } from './components/Discover'

export const App = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#f5f5f5] text-zinc-900 selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <StackingShowCases />
      {/* <ImageFlow /> */}
      <Expernc />
      <PersonalProjects />
      <SkillsSection />
      <WorkHistory />
      <Discover />
    </div>
  )
}

export default App