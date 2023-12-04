import ListIcons from "../../components/list/ListIcons"
import Section from "../../components/section/Section"
import {FerramentasContainer} from "./ferramentas.style.ts"
import { useEffect, useState } from 'react'



export default function Ferramentas({id}:any){
    const [ferramentas,setferramentas] = useState([])
    useEffect(()=>{
        fetch("../../../public/dados.json").then((data)=>data.json()
                                           .then((ferramentas)=>setferramentas(ferramentas.ferramentas)))
                                            
    },[])
    return(
        <Section id={id}>
            <FerramentasContainer>
                <h1>Ferramentas que Uso</h1>
                <ListIcons classname="ferramenta" array={ferramentas}/>
            </FerramentasContainer>
            
        </Section>
        
    )
    
}