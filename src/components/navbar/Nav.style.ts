import styled from "styled-components";

const Navbar_Bar = styled.nav<{ $scroll?: any; }>`
    background-color: rgba(21,23,34,${props=>props.$scroll/600});
    padding-block: 15px;
    
    position : fixed;

    color: var(--text-neutral);
    box-sizing: border-box;

    width: 100%;
    

    display: flex;
    
    z-index: 2; 
    


    
    && a{
        color: var(--text-neutral);
    }
    @media screen and (max-width: 992px){
        transition: all 500ms;
        &&.open{
            box-shadow: -1px 50px 10px 60vh rgba(0,0,0,0.5);
            justify-content: start;
            background-color: var(--main-light);
            flex-direction: column;
            padding-bottom: 10vw !important;


            *{  
                color: black;
                img{
                    filter: brightness(0%);
                }
            }
            ul{
                display: block;
                
            }
        }
        &&.closed{
            justify-content: space-between;
            align-items: center;

        }
    }

    @media screen and (min-width: 992px){
        align-items: center;
        justify-content: end !important;
        padding-block: 30px;
    }
    

`
const Navbar_Mains = styled.span`
    padding-inline: 10vw;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    * svg{
            font-size: 40px;
    }
    && a{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        
        img{
            width: 100%;
        }
    }
    @media screen and (min-width: 992px){
        position: absolute;
    }
 `    

const Navbar_Ham = styled.button`   
    border: none;
    aspect-ratio: 1/1;
    background-color: transparent;
    color: var(--text-dark);
    visibility: visible;
    

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 992px){
        visibility: hidden;
    }

`

const Navbar_Nav = styled.ul`
    padding-inline: 10vw;
    box-sizing: border-box;
    list-style: none;
    display: none;
    z-index: 3;
    li{
          padding-top: 15px;  
    }
    @media screen and (min-width: 992px){
        display: flex;
        li{
          padding: 2px 10px;  
        }
        && li:not(:nth-child(1)){
            border-left: solid var(--text-neutral) 1px;
        }
        
    }
   
`

export{Navbar_Bar,Navbar_Nav,Navbar_Ham,Navbar_Mains}