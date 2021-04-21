import React, { useState } from 'react';
import AccordionBody from './AccordionBody/AccordionBody';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import c from './Accordion.module.css';

type AccordionPropsType = {
  title: string;
};

const Accordion: React.FC<AccordionPropsType> = ({ title }) => {
  let [collapsed, setCollapsed] = useState(false);

  function accordionCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div>
      <AccordionTitle title={title} accordionCollapsed={accordionCollapsed} />
      {collapsed ? <AccordionBody /> : ''}
      {/* <button
        className={c.showOrNot}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        Show or Not
      </button>
      {!collapsed && <AccordionBody />} */}
    </div>
  );
};

export default Accordion;
