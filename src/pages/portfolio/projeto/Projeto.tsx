

import {Title, Text, ConPhoto,ConText,ContentContainer, Lnk_button} from "./sobre.style"


export default function Projeto(Project:any){

    return(
        
            <ContentContainer className={Project.classname}>    
                <ConText>
                    <Title>
                        {Project.name}
                    </Title>
                    <Text>
                        {Project.desc}    
                    </Text>
                    
                </ConText>
                <ConPhoto>
                    <img src={Project.img} alt="" />
                </ConPhoto>
                <Lnk_button href={Project.link} target="blank">
                    Visitar
                </Lnk_button>
                
            </ContentContainer> 
        
             
    )
}