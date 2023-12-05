import Section from "../../components/section/Section"
import { TechsContainer, TechsContent, TechsSection, ContentContainer} from "./linguagens.style"
import ListIcons from "../../components/list/ListIcons"
import {  useState } from 'react'
import {frontend,backend} from "./data"



export default function Linguagens({ id }:any) {
    const [frontend_p, setf] = useState(true)
    const [backend_p, setb] = useState(false)

    const handlefront = ()=>{
        setf(true)
        setb(false)
    }
    const handleback = ()=>{
        setf(false)
        setb(true)
    }

    return (
        <ContentContainer>
            <Section id={id} classname="content">
                <h1>MINHAS HABILIDADES</h1>
                <TechsSection>

                    <TechsContainer onMouseEnter={handlefront} 
                                    className={`frontend ${frontend_p?"front":"back"}`}>
                        <TechsContent>
                            <h2>Tecnologias<br />Frontend</h2>
                            <ListIcons classname="tecnologias"  array={frontend} notname={true} />
                        </TechsContent>
                    </TechsContainer>

                    <TechsContainer onMouseEnter={handleback} 
                                    onMouseLeave={handlefront}  
                                    className={`backend ${backend_p?"front":"back"}`}>
                        <TechsContent>
                            <h2>Tecnologias<br />Backend</h2>
                            <ListIcons classname="tecnologias" array={backend} notname={true} />
                        </TechsContent>
                    </TechsContainer>

                </TechsSection>
            </Section>
        </ContentContainer>
        
    )
}