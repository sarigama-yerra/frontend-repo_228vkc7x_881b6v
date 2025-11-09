import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-8 border-t border-black/5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} RARES DEV — Built with love and clean code.
      </footer>
    </div>
  )
}

export default App
