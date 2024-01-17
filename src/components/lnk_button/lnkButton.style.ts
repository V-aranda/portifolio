import styled from "styled-components"

const Link_button = styled.a`
    padding: 15px 20px;
    border: 1px solid #fff;
    backdrop-filter: blur(5px);
    border-radius:15px;
    margin-bottom: 2vw;
    font-size: 100%;
    font-weight: bold;
    transition: all 500ms;
    display: flex;
    &&:hover{
        scale: 1.05;
        box-shadow: rgba(225, 225, 225, 0.35) 0px 5px 15px;
        background-color: white;
        color: #163980;
    }
    svg{
        margin-inline: 5px;
        margin-block: auto;
        font-weight: bolder;
    }

    
`


export{Link_button}