

import { Link_button } from "../../../components/lnk_button/lnkButton.style"
import {Title, Text, ConPhoto,ConText,ContentContainer} from "./sobre.style"
import { BsBoxArrowUpRight } from "react-icons/bs";

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
                <Link_button href={Project.link} target="blank">
                    
                    Visitar
                    < BsBoxArrowUpRight/>
                </Link_button>
                
            </ContentContainer> 
        
             
    )
}