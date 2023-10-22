import * as React from "react"

import AboutMe from '../components/AboutMe.js'
import Footer from "../components/Footer.js"
import Header from '../components/Header.js'
import Presentation from '../components/Presentation.js'
import Proyects from '../components/Proyects.js'
import Skills from '../components/Skills.js'

const IndexPage = () => {

  React.useEffect(()=>{
  },[])

  return (
    <main>
      <Header />
      <Presentation />
      <AboutMe />
      <Skills/>
      <Proyects/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
