
import Navbar from "./components/navbar/Navbar"
import Ferramentas from "./pages/ferramentas/Ferramentas"
import { Hero } from "./pages/hero/Hero"
import Sobre from "./pages/sobre/Sobre"
import Linguagens from "./pages/linguagens/Linguagens"
import Footer from "./pages/footer/Footer"


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Sobre id={"sobre"}/>
      <Ferramentas id={"ferramentas"}/>
      <Linguagens id={"habilidades"}/>
      <Footer/>
    </>
  )
}

export default App
