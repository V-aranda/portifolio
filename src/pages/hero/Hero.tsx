import Section from "../../components/section/Section"

import Photo_me from "../../assets/images/Hero_me.png"
import {HeroTitle, HeroPhoto,HeroBottom,ContentContainer} from "./hero.style"

export function Hero(id){

    return(
        <ContentContainer>
            <Section id={id} sectionclass="container" classname="content">
                <HeroTitle>
                    <span>
                        <h1>VINICIUS ARANDA</h1>
                        <h2>/ DESENVOLVENDO EXPERIENCIAS<br/>/ QUE VÃO ALÉM DA APLICAÇÃO</h2>
                    </span>
                </HeroTitle>
                <HeroPhoto><img src={Photo_me} alt="" /></HeroPhoto>
                
            </Section>
            <HeroBottom></HeroBottom>
        </ContentContainer>
        
        
    )

}