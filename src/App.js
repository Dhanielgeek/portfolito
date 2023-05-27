import React from 'react'
import Navbar from './Components/Navabar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contacts from './Components/Contacts.jsx'
const App = () => {
  return (
    <div>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contacts/>
    </div>
  )
}

export default App;
