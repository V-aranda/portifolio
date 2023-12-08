import Section from "../../components/section/Section"

import {Title, Text, ConPhoto,ConText,ContentContainer} from "./sobre.style"
import maico from "../../assets/images/ma_ico.png"

export default function Sobre({id}:any){

    return(
        <ContentContainer>
            <Section id={id}>
                <ConText>
                    <Title>
                        Olá,
                    </Title>
                    <Text>
                        Me chamo Vinícius Aranda, Desenvolvedor Web, no caminho do Fullstack. 
                        Possuo proficiência na criação de experiências para o usuário, UI designer Amador, 
                        participo de projetos e crio interfaces interativas como freelancer. 
                        
                    </Text>
                    <Text>
                        Tenho um curso técnico completo em <span>Informática para internet</span> e atualmente estou cursando um 
                        bacharelado em <span>Sistemas de Informação</span>.
                    </Text>
                </ConText>
                <ConPhoto>
                    <img src={maico} alt="" />
                </ConPhoto>
            </Section>
        </ContentContainer>
        
    )
}