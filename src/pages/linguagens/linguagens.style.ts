import styled from "styled-components"


const ContentContainer = styled.div`
    && .Content{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1{
            text-align: center;
        }
    }

`

const TechsSection = styled.section`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 576px){
        flex-direction: row;
        justify-content: space-between;
    }
    @media screen and (min-width: 992px){
        width: 75%;
        position: relative;
        border-radius: 25%;
        justify-content: center;
        min-height: 39vw;
    }
`

const TechsContainer = styled.div`
box-sizing: border-box;
    width:100%;
    border-radius: 25px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    justify-content: start;
    align-items: center;
    text-align: center;

    color: var(--text-neutral);

    h2{
        margin-bottom: 5%;
    }
    &&.backend{
        background-color:var(--main-neutral);
    }
    &&.frontend{
        background-color:var(--sec-neutral);
    }
    @media screen and (min-width: 576px){
        width:50%;
        &&.backend{
         border-radius: 0px  25px 25px 0px;
        }
        &&.frontend{
            border-radius: 25px 0px 0px 25px;
        }
    }
    @media screen and (min-width: 992px){
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px,rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 50px;
        position : absolute;
        width: 65%;
        border-radius: 50%!important;
        aspect-ratio: 1/1;
        &&.frontend{
            left: 0px;
        }
        &&.backend{
            right: 0px;
        }
        &&.front{
            z-index: 1;
            scale: 1; 
            transition: all 1000ms;
        }
        &&.back{
            z-index: 0;
            filter: blur(3px);
            scale: 0.8;
            
            transition: all 1000ms;
            
        }
    }

`
const TechsContent = styled.div`
    margin: auto;
    .tecnologias{
        aspect-ratio: 1/1;
        width:23%;
    }
    .tecnologiasb{
        aspect-ratio: 1/1;
        width:35%;
        
    }
    @media screen and (min-width: 992px){
        width: 75%;
    }

`

export{TechsContainer,TechsContent, TechsSection,ContentContainer}