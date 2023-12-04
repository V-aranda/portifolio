import styled from 'styled-components'
import Herobg from "../images/Hero_background.png"
import Herobotton from "../images/Hero_botton.png"



const Hero_container = styled.div`

    background-color: var(--main-background);
    background-attachment: fixed;
    box-shadow: -1px 45px 100px 22px rgba(0, 0, 0, 0.78) inset;
    min-height: 75vh;
    background-image: url(${Herobg});
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    position: relative;
    display: flex;
    
`
const Hero_botton = styled.div`
    background-image: url(${Herobotton});
    width: 100% ;
    background-size: 100% 100%;

    height: 30%;
    max-height: 350px;
    position: absolute;
    
    bottom: -15%;
    
    

`
const Hero_photo = styled.img`
min-width: 280px;
    width: 25%;
    mix-blend-mode: luminosity; 
    margin-top: auto;
`
const Hero_Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    && span{
        border-left: solid white 4px;
        padding: 1.5rem;
        font-family: Montserrat Alternates;
        h1{
            font-weight: 800;
            font-size: calc(0.5rem + 1.8vw);
        }
        h3{
            font-weight: 400;
            font-size: calc(0.25rem + 1vw);
        }
        
    }
    
`


export{Hero_container,Hero_botton,Hero_photo,Hero_Title}