import styled from "styled-components";

const Section_container = styled.section`

    
    display: flex;
    flex-direction: column;
    align-items:center;

    box-sizing: border-box;
    padding-inline: 8vw;
    padding-top : 6rem;
    @media screen and (min-width: 576px){
        padding-inline: 9vw;
    }
    @media screen and (min-width: 1270px){
        padding-inline: 18vw;
    }
`
const Section_content = styled.div`  
    width: 100%;
    
`

export{Section_container,Section_content}