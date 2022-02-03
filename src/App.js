import './App.css'
import './index.css'
import React from 'react'
import About from './components/About/About.js'
import Contact from './components/Contacts/Contacts.js'
import Navbar from './components/Navbar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import Skills from './components/Skills/Skills.js'
function App () {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
