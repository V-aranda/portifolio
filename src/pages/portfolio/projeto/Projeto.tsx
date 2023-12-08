

import {Title, Text, ConPhoto,ConText,ContentContainer} from "./sobre.style"


export default function Projeto(Project:any){

    return(
        <a href={Project.link} target="blank">
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
            </ContentContainer> 
        </a>
             
    )
}