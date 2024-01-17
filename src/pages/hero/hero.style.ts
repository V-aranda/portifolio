import styled from "styled-components"
import bottom from "../../assets/images/Hero_botton.png"
import background from "../../assets/images/Hero_background.png"


const ContentContainer=styled.div`
    && .Content{
        display: flex;
        flex-wrap: wrap;
        max-height: 95vh;
        overflow: hidden;
        .cont{
            width: 100%;  
            @media screen and (min-width: 576px){
                width: 50%;  
            }
        }
    }
    && .Section{
        background-image: url(${background});
        background-size: cover;
        background-attachment: fixed;
    }

`


const HeroTitle = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:center;
    .buttons{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 1rem;
        @media screen and (min-width: 576px){
            margin-top: 2rem;
        }
    }
    span{
        color: var(--text-neutral);
        border-left: 10px solid var(--text-neutral);
        padding-left: 1.5rem;
        h1{
            font-size: 145%;
        }
        h2{
            font-size: 80%;
        }
        
            
        @media screen and (min-width: 720px){
            h1{
                font-size: 175%;
            }
            h2{
                font-size: 100%;
            }
        }    
        @media screen and (min-width: 992px){
            h1{
                font-size: 3.5vw;
            }
            h2{
                font-size: 125%;
            }
        } 
        @media screen and (min-width: 992px){
            h1{
                font-size: 2.5vw;
            }
            h2{
                font-size: 125%;
            }
        } 
        
    }
    
    
    @media screen and (min-width: 576px){
        margin-bottom: 0px;
        
        
    }
    @media screen and (min-width: 720px){
        margin-bottom: 5vw;
        justify-content: center;
        
    }
`



const HeroPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    @media screen and (max-width: 576px){
        min-height: 100vw;
    }
    img{
        mix-blend-mode: normal;
        width: 100%;
        @media screen and (max-width: 576px){
        width: 85%
    }
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