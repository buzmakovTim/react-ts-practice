import React, { useState } from 'react';
import c from './Select.module.css';

type SelectPropsType = {
    items: string[]
}


export const Select: React.FC<SelectPropsType> = ({items}) => {

    let [title, setTitle] = useState<string>('Select')
    let [isCollapsed, setCollapsed] = useState<boolean>(false)

    const collapsedCallBack = () => {
        setCollapsed(!isCollapsed)
    }

    const titleSetCallback = (e: string) => {
        setTitle(e)
        setCollapsed(!isCollapsed)
    }

    return (
        <div>
            <div onClick={collapsedCallBack}>{title}</div>

            {
             isCollapsed ? <div className={c.container}>   
                 {isCollapsed ? items.map( (i) => <div className={c.item} onClick={ () => {titleSetCallback(i)}}>{i}</div>) : ""}
                 </div> : ""
            }
            

        </div>
    )
}