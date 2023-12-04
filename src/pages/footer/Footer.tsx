import Section from "../../components/section/Section"
import { FooterContainer, Footer_Nav} from "./Footer.style"
import { Logo,List } from "../../components/navbar/Navbar"
import logo from '/pics/ma_logo.png'
export default function Footer(){
    
    return(
       <FooterContainer>
         <Section classname="content" sectionclass="container">
            
            <Logo/>
            <Footer_Nav>
                <List/> 
            </Footer_Nav>
        </Section>
       </FooterContainer>
    )

}