import Section from "../../components/section/Section"

import Photo_me from "../../assets/images/Hero_me.png"
import {HeroTitle, HeroPhoto,HeroBottom,ContentContainer,Gt_button} from "./hero.style"
import { BsGithub } from "react-icons/bs"

export function Hero(){

    return(
        <ContentContainer>
            <Section  sectionclass="container" classname="content">
                <HeroTitle>
                    <span>
                        <h1>VINICIUS ARANDA</h1>
                        <h2>/ DESENVOLVENDO EXPERIENCIAS<br/>/ QUE VÃO ALÉM DA APLICAÇÃO</h2>
                    </span>
                    <Gt_button href="https://github.com/v-aranda" target="blank"><BsGithub />Github</Gt_button>
                </HeroTitle>
                <HeroPhoto><img src={Photo_me} alt="" /></HeroPhoto>
                
            </Section>
            <HeroBottom></HeroBottom>
        </ContentContainer>
        
        
    )

}