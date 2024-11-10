import MenusList from "./MenusList.jsx";
import {FaMinus, FaPlus} from 'react-icons/fa'
import {useState} from "react";

export default function ListItem({item}) {

    const [displayChildren, setDisplayChildren] = useState({})

    const handleDisplayChildren = (getLabel)=>{
        setDisplayChildren({...displayChildren,[getLabel]:!displayChildren[getLabel]})
    }

    return (
        <li className="m-3 ">
            <div className="flex gap-3 font-bold text-3xl" onClick={()=>handleDisplayChildren(item.label)}>
                <p>
                {item.label}
                </p>
                {item.children && item.children.length ? (
                    <span >
                        {displayChildren[item.label] ? <FaMinus color="#000" size={25}/> : <FaPlus color="#000" size={25}/>}
                    </span>
                ):null}
            </div>

            {item.children && item.children.length && displayChildren[item.label] ?
                <div>
                        <MenusList menus={item.children} />
                </div>
                : null}
        </li>
    )
}