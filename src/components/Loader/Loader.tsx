import { useEffect, useState } from "react"

import { LoaderContainer } from "./loader.style"
import {BounceLoader} from 'react-spinners'


export default function Loader(){

    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fakeDataFetch = ()=>{
            setTimeout(()=>{
                setIsLoading(false)
            },2000)
        }
        fakeDataFetch()
    },[])

    return(
        <>
        {isLoading&&<LoaderContainer><h4><BounceLoader color="#8000ff" />Carregando</h4></LoaderContainer>}
        
        </>
    )
}