
import Navbar from "./components/navbar/Navbar"
import Ferramentas from "./pages/ferramentas/Ferramentas"
import { Hero } from "./pages/hero/Hero"
import Sobre from "./pages/sobre/Sobre"
import Linguagens from "./pages/linguagens/Linguagens"
import Footer from "./pages/footer/Footer"
import Projects from "./pages/projects/Projects"
import Portifolio from "./pages/portfolio/Portifolio"
import '../public/globals.css'


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Sobre id={"sobre"}/>
      <Ferramentas id={"conhecimentos"}/>
      <Linguagens />
      <Projects id={"projetos"}/>
      <Portifolio/>
      <Footer/>
    </>
  )
}

export default App
