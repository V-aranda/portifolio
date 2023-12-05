import ListIcons from "../../components/list/ListIcons"
import Section from "../../components/section/Section"
import {FerramentasContainer} from "./ferramentas.style.ts"

import {ferramentas} from "./data.ts" 


export default function Ferramentas({id}:any){
    
    return(
        <Section id={id}>
            <FerramentasContainer>
                <h1>Ferramentas que Uso</h1>
                <ListIcons classname="ferramenta" array={ferramentas}/>
            </FerramentasContainer>
            
        </Section>
        
    )
    
}