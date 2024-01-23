import styled from "styled-components";

const LoaderContainer = styled.section`

    width: 100%;
    height: 100vh;
    background-color: #272727;
    color:white;
    position:fixed;
    z-index: 55;
    display: flex;
    align-items: center;
    justify-content: center;
    && h4{
        span{
            margin-bottom: 15px;
        }
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`

export{LoaderContainer}