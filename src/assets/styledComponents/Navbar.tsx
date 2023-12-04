import styled from 'styled-components'

const SNavbar = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline:30px;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    color: white;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    
    && a svg, button svg{
        color: white;
        font-size: 2rem;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    && .navbarnav{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    && .navbarnav1 a, .navbarnav2 a{
        padding: 0px 15px;
        color: white;
        font-family: Montserrat Alternates;
        text-shadow: #000000 1px 0 10px;

        
    }
    && img{
        min-width: 50px;
        width: 30%;
        max-width: 3.5rem;
        padding: 15px;
        
        background-color: #000000;
        box-shadow: inset -5px 5px 34px 18px #FFFFFF;

    }
    && .navbarnav1 a{
        border-right: solid white 1px; 
    }
    && .navbarnav2 a{
        border-left: solid white 1px; 
    }

    && button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        visibility: visible;
    }
`


export{SNavbar}