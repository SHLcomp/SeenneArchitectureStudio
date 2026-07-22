import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Cta from '../components/cta/Cta'
import Footer from '../components/footer/Footer'
import Founder from '../components/founder/Founder'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Process from '../components/pocess/Process'
import Projects from '../components/projects/Projects'
import Values from '../components/values/Values'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Founder />
        <Projects />
        <About />
        <Process />
        <Values />
        <Cta />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home