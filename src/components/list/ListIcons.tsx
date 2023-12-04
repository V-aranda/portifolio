
import {ListIcons_item,ListIcons_container} from './listicon.style'

interface ListIconsProps{
    array: {}[],
    notname?: boolean,
    classname?: string,

}
export default function ListIcons({array, notname,classname}:ListIconsProps){
    return(

        <ListIcons_container>
            {array.map((item:any,index:number)=>{
                return(
                    <ListIcons_item key={`${index}`} className={classname}>
                        
                        <img src={item.img} title={item.name} alt={item.name} />
                        {!notname &&
                        <h2>
                            {item.name}   
                        </h2>}
                    </ListIcons_item>
                    )
            })}
        </ListIcons_container>
    )
}

