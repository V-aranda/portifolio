import styled from "styled-components"
import bottom from "../../assets/images/Hero_botton.png"
import background from "../../assets/images/Hero_background.png"


const ContentContainer=styled.div`
    && .content{
        display: flex;
        flex-wrap: wrap;
        max-height: 95vh;
        overflow: hidden;
        div{
            width: 100%;  
            @media screen and (min-width: 576px){
                width: 50%;  
            }
        }
    }
    && .container{
        background-image: url(${background});
    }

`


const HeroTitle = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
    span{
        color: var(--text-neutral);
        border-left: 10px solid var(--text-neutral);
        padding-left: 1.5rem;
        margin-bottom: 5vh;
    }
    @media screen and (min-width: 576px){
        margin-bottom: 0px;
        span{
            margin-bottom: 5vw;
        }
    }

`
const Gt_button = styled.a`
    padding: 15px 20px;
    background-color: var(--main-sat);
    border-radius:15px;
    margin-bottom: 5vw;
    font-size: 130%;
    font-weight: bold;
    transition: all 500ms;
    &&:hover{
        scale: 1.2;
        box-shadow: rgba(225, 225, 225, 0.35) 0px 5px 15px;
    }
    svg{
        margin-right: 5px;
    }

    
`


const HeroPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    img{
        mix-blend-mode: luminosity;
        width: 100%;
    }
`
const HeroBottom = styled.div`
    margin-top: calc(-50px + -2.5vw);
    height: calc(100px + 5vw);
    width: 100%;
    
    position: absolute;
    background-image: url(${bottom});
    background-size: 100% 100%;
`

export{HeroPhoto, HeroTitle,HeroBottom,ContentContainer,Gt_button}