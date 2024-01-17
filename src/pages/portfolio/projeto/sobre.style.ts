import styled from "styled-components"
    const ContentContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media screen and (min-width: 992px){
            justify-content: left;
        }
        a:hover{
            color: #7536A8 !important;
        }
    `
    const Title = styled.h1`
        color: var(--text-neutral) !important; 
        text-shadow: 2px 2px 5px black; 
    `
    const Text = styled.p`
        font-size: 1rem;
        margin-top: 10px;
        text-align: left;
        color: var(--text-neutral) !important; 
        text-shadow: 2px 2px 5px black;  
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
        margin-block: 30px; 
        width: 100%;
        img{
            width: 100%;
            @media screen and (min-width: 576px){
                width: 100%; 
            }
        }
        
        @media screen and (min-width: 992px){
            margin-block: 0px;
            width: 50%;
            padding-left: 2%;
        }
    
    `
    
export{Text,Title,ConPhoto,ConText,ContentContainer}