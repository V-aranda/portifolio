import Section from "../../components/section/Section"
import Projeto from "./projeto/Projeto"
import {Content_container} from "./portifolio.style"
import {Swiper, SwiperSlide} from 'swiper/react'
import { projetos } from "./data"
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper/modules';



export default function Portifolio(){
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index:any, className:any) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return(
        <Content_container>
            <Section>
                <h1 className="title">MEU PORTFOLIO</h1>
                <Swiper loop={true}
                        pagination={pagination}
                        navigation={true}
                        modules={[Pagination,Navigation]}>
                {projetos.map((pagina)=>{
                    return(
                        <SwiperSlide>
                            {pagina.map((projeto)=>{
                                return(                              
                                    <Projeto name={projeto.name} 
                                        desc={projeto.desc}
                                        img={projeto.img}
                                        key={projeto.name}
                                        link={projeto.link}
                                        classname={"projeto"}/>  
                                )
                            })}
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </Section>
        </Content_container>
        
    )
}