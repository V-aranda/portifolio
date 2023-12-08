import styled from "styled-components";

const Content_container = styled.div`

    .Section{
        background: rgb(84,9,119);
        background: linear-gradient(0deg, rgba(84,9,119,1) 0%, rgba(95,24,153,1) 44%, rgba(198,164,225,1) 77%, rgba(255,255,255,1) 100%);
    }
    .Content{
        color: var(--text-light);
        min-height: 100vh;
        .title{
            text-align: center;
        }
    }
    .swiper{
        
        .swiper-slide{
            
            .projeto{
                padding-block: 3rem;
                *{
                 color: var(--text-neutral) !important; 
                 text-shadow: 2px 2px 5px black;  
                }
                @media screen and (min-width: 573px){
                    padding-inline: 3rem;
                }
                
                
            }
        }
    }
`

export{Content_container}