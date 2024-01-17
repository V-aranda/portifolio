import {Navbar_Bar, Navbar_Nav,Navbar_Ham,Navbar_Mains} from './Nav.style'
import {useState,useEffect} from 'react'
import logo from '/pics/ma_logo.png'
import { BsList, BsLinkedin, BsXLg} from "react-icons/bs"

export default function Navbar(){
  const [ativo,setativo] = useState(false)
  const handleMenu = () => {
    setativo(!ativo)
    console
  }  

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 600) return;
      setScrollY(window.scrollY);
    
    
  };

  useEffect(() => {
    // Adiciona o evento de scroll quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o evento de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <Navbar_Bar $scroll={scrollY}  className={ativo?"open":"closed"}>
      <Navbar_Mains >
        <a target='blank' href="https://www.linkedin.com/in/vinicius-aranda-366602229/"><BsLinkedin/></a>
        <Logo/>
        <Navbar_Ham onClick={handleMenu}>{ativo?<BsXLg/>:<BsList/>}</Navbar_Ham>
      </Navbar_Mains> 
      <Navbar_Nav>
      <List/>
      </Navbar_Nav>
    </Navbar_Bar>
  )
}
export function List(){
    return(
      <>
        <li><a href="#">Inicio</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#conhecimentos">Conhecimentos</a></li>
        <li><a href="#projetos">Projetos</a></li>
      </>  
    )
}

export function Logo(){
    return(
        <a className="logo_link" href='#'><img src={logo} alt="logo"/></a>
    )
}