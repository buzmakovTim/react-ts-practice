import React, { useState } from 'react';
import AccordionBody from './AccordionBody/AccordionBody';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import c from './Accordion.module.css';
import { ItemType } from '../../App';


type AccordionPropsType = {
  title: string
  items: ItemType[]
  onClick: (value: any) => void
};

const Accordion: React.FC<AccordionPropsType> = ({ title, items, onClick }) => {
  let [collapsed, setCollapsed] = useState(true);

  function accordionCollapsed() {
    setCollapsed(!collapsed);
  }
  
  

  return (
    <div>
      <AccordionTitle title={title} accordionCollapsed={accordionCollapsed} />
      {collapsed ? <AccordionBody items={items} onClick={onClick}/> : ''}
    </div>
  );
};

export default Accordion;
