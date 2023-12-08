import styled from "styled-components"
    const ContentContainer = styled.div`
    && .Section{
        padding-top: 10rem;
    }
    && .Content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    `
    const Title = styled.h1`
        color: var(--blend);
    `
    const Text = styled.p`
        font-size: 1rem;
        margin-top: 10px;
        text-align: justify;
        span{
            color: var(--main-sat);
            font-weight: 600;
        }
        span:nth-child(1){
            color: var(--sec-sat);
            font-weight: 600;
        }
        @media screen and (min-width: 768px){
            font-size: 1.5rem;
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
        }
        @media screen and (min-width: 576px){
            width: 50%;
            
        }
        @media screen and (min-width: 992px){
            margin-top: 0px;
            width: 50%;
            padding-left: 10%;
        }
    
    `
export{Text,Title,ConPhoto,ConText,ContentContainer}