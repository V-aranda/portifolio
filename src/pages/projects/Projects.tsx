import Section from "../../components/section/Section"

import {Swiper, SwiperSlide} from 'swiper/react'
import { Slide_img, Slide_content } from "./Projects.style"
import 'swiper/css'

export default function Projects(){
    return(
        <Section>
            <h1>Projetos Que Faço Parte</h1>
            <Swiper 
                spaceBetween={50}
                slidesPerView={3}
            >
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide_content>
                        <Slide_img alt="tsete" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&usqp=CAU"}/>
                        Slide 1
                    </Slide_content>
                </SwiperSlide>
            </Swiper>
        </Section>
    )
}