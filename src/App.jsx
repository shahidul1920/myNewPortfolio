import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DownDemoSec from './components/DownDemoSec'
import StackingShowCases from './components/StackingShowCases'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <StackingShowCases />
      <DownDemoSec />
    </>
  )
}

export default App