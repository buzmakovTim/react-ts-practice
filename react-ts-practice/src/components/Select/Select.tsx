import React, { useState } from 'react';
import c from './Select.module.css';

type SelectType = {
    value: number
    title: string
}

type SelectPropsType = {
    items: SelectType[]
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
            <div onClick={collapsedCallBack} onMouseOver={collapsedCallBack} className={c.title}>{title}</div>

            {
             isCollapsed ? <div className={c.container} onMouseLeave={collapsedCallBack}>   
                 {isCollapsed ? items.map( (i) => <div key={i.value} className={c.item} onClick={ () => {titleSetCallback(i.title)}}>{i.title}</div>) : ""}
                 </div> : ""
            }
            
            <div>Testing </div>

        </div>
    )
}