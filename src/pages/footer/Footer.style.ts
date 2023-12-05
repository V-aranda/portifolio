import styled from "styled-components";

const FooterContainer = styled.div`

    .content{
        
        color: var(--text-neutral);
        display: flex;
        align-items: center;
        a{
            min-height:  50px;
            height: 10%;
            max-height: 100px;
            aspect-ratio: 1/1;
            img{
                width: 100%;
            }
        }

    }
    .container{
        background-color: var(--main-dark);
        padding: 40px;
        margin-top: 50px;
    }

`
const Footer_Nav = styled.ul`
    border-left: 3px solid var(--text-neutral);
    padding-left: 10px;
    margin-left: 25px;
    li{
        padding-block: 3px;
    }

`

export{FooterContainer,Footer_Nav}