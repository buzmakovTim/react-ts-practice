import React from 'react';
import { ItemType } from '../../../App';


type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void 
};

const AccordionBody: React.FC<AccordionBodyPropsType> = ({items, onClick}) => {
  return (
    <div>
      <ul>
        {items.map((i) => <li onClick={ () => {onClick(i.value)}} key={i.value}>{i.title}</li>)}
      </ul>
    </div>
  );
};

export default AccordionBody;
