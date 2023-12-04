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
    margin-bottom: 10vw;
    display: flex;
    align-items: center;
    span{
        color: var(--text-neutral);
        border-left: 10px solid var(--text-neutral);
        padding-left: 1.5rem;
    }
    /* @media screen and (min-width: 576px){
        margin-bottom: 0px;
    } */

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

export{HeroPhoto, HeroTitle,HeroBottom,ContentContainer}