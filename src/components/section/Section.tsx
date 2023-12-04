import {Section_container,Section_content} from './Section.style'


interface SectionProps{
    children:any,
    classname?: any,
    sectionclass?:any,
    id?:string
}

export default function Section({children,classname,sectionclass,id}: SectionProps){

    return(
        <Section_container id={id} className={`${sectionclass}`}>
           <Section_content className = {classname}>
                {children}
           </Section_content>
        </Section_container>
    )
}