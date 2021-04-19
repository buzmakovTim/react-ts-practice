import React from 'react';

type AccordionTitlePropsType = {
  title: string;
};

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default AccordionTitle;
