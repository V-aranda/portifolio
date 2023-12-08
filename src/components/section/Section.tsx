import {Section_container,Section_content} from './Section.style'


interface SectionProps{
    children:any,
    classname?: any,
    sectionclass?:any,
    id?:string
}

export default function Section({children,id}: SectionProps){

    return(
        <Section_container id={id} className="Section">
           <Section_content className ="Content" >
                {children}
           </Section_content>
        </Section_container>
    )
}