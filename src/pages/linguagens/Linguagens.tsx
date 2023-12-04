import Section from "../../components/section/Section"
import { TechsContainer, TechsContent, TechsSection, ContentContainer} from "./linguagens.style"
import ListIcons from "../../components/list/ListIcons"
import { useEffect, useState } from 'react'



export default function Linguagens({ id }:any) {
    const [front, setfront] = useState([])
    const [back, setback] = useState([])
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
    
    useEffect(() => {
        fetch("../../../public/dados.json").then((data) => data.json()
            .then((ferramentas) => {
                setfront(ferramentas.front)
                setback(ferramentas.back)
                return
            }))
    }, [])

    return (
        <ContentContainer>
            <Section id={id} classname="content">
                <h1>MINHAS HABILIDADES</h1>
                <TechsSection>

                    <TechsContainer onMouseEnter={handlefront} 
                                    className={`frontend ${frontend_p?"front":"back"}`}>
                        <TechsContent>
                            <h2>Tecnologias<br />Frontend</h2>
                            <ListIcons classname="tecnologias"  array={front} notname={true} />
                        </TechsContent>
                    </TechsContainer>

                    <TechsContainer onMouseEnter={handleback} 
                                    onMouseLeave={handlefront}  
                                    className={`backend ${backend_p?"front":"back"}`}>
                        <TechsContent>
                            <h2>Tecnologias<br />Backend</h2>
                            <ListIcons classname="tecnologias" array={back} notname={true} />
                        </TechsContent>
                    </TechsContainer>

                </TechsSection>
            </Section>
        </ContentContainer>
        
    )
}