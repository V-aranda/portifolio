import Section from "../../components/section/Section"
import proj1 from "../../assets/images/projeto-1.png"
import proj2 from "../../assets/images/projeto-2.png"
import embreve from "../../assets/images/projeto-0.png"

import {Swiper, SwiperSlide} from 'swiper/react'
import { Slide_img, Slide_content, ProjectsContainer, Swiper_Content} from "./Projects.style"
import 'swiper/css'

export default function Projects({id}:any){
    return(
        <ProjectsContainer id={id}>
            <Section>
            <h1>Projetos Que Faço Parte</h1>
            <Swiper_Content>
                    <Swiper 
                        spaceBetween={0}
                        slidesPerView={3}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Slide_content>
                                <Slide_img alt="tsete" src={embreve}/>
                                <h2>Em Breve...</h2>
                            </Slide_content>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide_content>
                                <Slide_img alt="tsete" src={proj1}/>
                                <h2>Connectech 2023</h2>
                            </Slide_content>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide_content>
                                <Slide_img alt="tsete" src={proj2}/>
                                <h2>Rolê Digital</h2>
                            </Slide_content>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide_content>
                                <Slide_img alt="tsete" src={embreve}/>
                                <h2>Em Breve...</h2>
                            </Slide_content>
                        </SwiperSlide>
                        
                    </Swiper>
                </Swiper_Content>
            </Section>
            
            
        </ProjectsContainer>
        
    )
}