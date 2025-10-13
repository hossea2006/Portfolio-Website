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
        githubUrl="https://github.com/yourusername"
        linkedinUrl="https://linkedin.com/in/yourusername"
      />
      <Hero
        name="Your Name"
        title="Software Developer"
        description="I'm passionate about building scalable web applications and solving complex problems with clean, efficient code. I love working with modern technologies and continuously learning new skills to create innovative solutions."
        imageUrl="https://via.placeholder.com/400x400?text=Your+Photo"
      />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}

export default App
