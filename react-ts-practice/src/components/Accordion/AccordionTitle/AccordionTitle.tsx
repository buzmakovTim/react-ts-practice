import React from 'react';
import c from './AccordionTitle.module.css';

type AccordionTitlePropsType = {
  title: string;
  accordionCollapsed: () => void;
};

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
  title,
  accordionCollapsed,
}) => {
  return (
    <div>
      <h3 className={c.title} onClick={accordionCollapsed}>
        {title}
      </h3>
    </div>
  );
};

export default AccordionTitle;
