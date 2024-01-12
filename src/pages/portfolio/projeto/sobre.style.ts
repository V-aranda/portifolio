import styled from "styled-components"
    const ContentContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media screen and (min-width: 992px){
            justify-content: left;
        }
    `
    const Title = styled.h1``
    const Text = styled.p`
        font-size: 1rem;
        margin-top: 10px;
        text-align: left;
        span{
            color: var(--main-sat);
            font-weight: 600;
        }
        @media screen and (min-width: 768px){
            font-size: 1.25rem;
        }

    `
    const ConText = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (min-width: 992px){
            width: 50%;
    }
    `
    const ConPhoto = styled.div`
        box-sizing: border-box;
        margin-top: 30px; 
        width: 100%;
        img{
            width: 100%;
            @media screen and (min-width: 576px){
                width: 100%; 
            }
        }
        
        @media screen and (min-width: 992px){
            margin-top: 0px;
            width: 50%;
            padding-left: 10%;
        }
    
    `
    const Lnk_button = styled.a`
    padding: 15px 20px;
    background-color: var(--main-sat);
    border-radius:15px;
    margin-bottom: 2vw;
    font-size: 100%;
    font-weight: bold;
    transition: all 500ms;
    &&:hover{
        scale: 1.05;
        box-shadow: rgba(225, 225, 225, 0.35) 0px 5px 15px;
        background-color: red;
    }
    svg{
        margin-right: 5px;
    }

    
`
export{Text,Title,ConPhoto,ConText,ContentContainer,Lnk_button}