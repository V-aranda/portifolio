import styled from "styled-components"


const ListIcons_container= styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`
const ListIcons_item = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        text-align: center;
    }
    && img{
        border-radius: 25%;
        width: 100%;
        min-width:70px;
    }

`


export{ListIcons_item,ListIcons_container}