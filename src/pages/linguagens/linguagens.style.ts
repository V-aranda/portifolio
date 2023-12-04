import styled from "styled-components"


const ContentContainer = styled.div`
    && .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        h1{
            margin-bottom: 30px;
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
        
    }
`

const TechsContainer = styled.div`
box-sizing: border-box;
    width:100%;
    border-radius: 25px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    justify-content: center;
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
        background-color:var(--main-background);
    }
    @media screen and (min-width: 576px){
        width:50%;
        margin-bottom: 0px;
        &&.backend{
         border-radius: 0px  25px 25px 0px;
        }
        &&.frontend{
            border-radius: 25px 0px 0px 25px;
        }
    }
    @media screen and (min-width: 992px){
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
    .tecnologias{
        aspect-ratio: 1/1;
        width:23%;
    }
    @media screen and (min-width: 992px){
        width: 75%;
    }

`

export{TechsContainer,TechsContent, TechsSection,ContentContainer}