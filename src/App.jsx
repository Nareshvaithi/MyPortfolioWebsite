import './App.css'
import { About } from './components/About'
import { Contact } from './components/contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/projects'
import { Resume } from './components/resume'
import { Skills } from './components/Skills'

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App
