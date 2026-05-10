import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DownDemoSec from './components/DownDemoSec'
import StackingShowCases from './components/StackingShowCases'
import DemoStacking from './components/DemoStacking'
import ImageFlow from './components/ImageFlow'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <StackingShowCases />
      <ImageFlow />
      <DownDemoSec />
      {/* <DemoStacking /> */}
    </>
  )
}

export default App