import styled from 'styled-components'

const ProjectsContainer = styled.div`
    && .content{
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    && .container{
        overflow-x: hidden;
        padding-inline: 0px;
    }
`

const Slide_img = styled.img`
    width: 100%;

`
const Swiper_Content = styled.div`
    padding-block: 2rem;
    width: 200%;
    @media screen and (min-width: 576px){
        width: 150%;
        
    }
`
const Slide_content = styled.div`
    h2{
        padding: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-inline: 2.5vw;
    
`


export{Slide_img,Slide_content,ProjectsContainer, Swiper_Content}