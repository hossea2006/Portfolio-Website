import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Navbar
        githubUrl="https://github.com/hossea2006"
        linkedinUrl="https://www.linkedin.com/in/ahossein2006/"
      />
      <Hero
        name="Ashfaque Hossein"
        title="Software Developer"
        description="I'm passionate about building scalable web and mobile applications and solving complex problems with clean, efficient code. I love working with modern technologies and continuously learning new skills to create innovative solutions."
        imageUrl="/assets/profile.png"
      />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}

export default App
