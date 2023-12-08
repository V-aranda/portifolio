import Section from "../../components/section/Section"

import Photo_me from "../../assets/images/Hero_me.png"
import {HeroTitle, HeroPhoto,HeroBottom,ContentContainer,Gt_button} from "./hero.style"
import { BsGithub, BsInstagram  } from "react-icons/bs"

export function Hero(){

    return(
        <ContentContainer>
            <Section>
                <HeroTitle className="cont">
                    <span>
                        <h1>VINICIUS ARANDA</h1>
                        <h2>/ DESENVOLVENDO EXPERIENCIAS<br/>/ QUE VÃO ALÉM DA APLICAÇÃO</h2>
                    </span>
                    <div className="buttons"> 
                        <Gt_button href="https://github.com/v-aranda" target="blank"><BsGithub />Github</Gt_button>
                        <Gt_button href="https://www.instagram.com/viniciuzaranda" target="blank"><BsInstagram />Chama DM</Gt_button>
                    </div>
                </HeroTitle>
                <HeroPhoto className="cont"><img src={Photo_me} alt="" /></HeroPhoto>
                
            </Section>
            <HeroBottom></HeroBottom>
        </ContentContainer>
        
        
    )

}