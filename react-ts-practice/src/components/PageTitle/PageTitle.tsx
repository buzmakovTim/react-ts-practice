import React from 'react';

type PageTitlePropsType = {
  title: string;
};

const PageTitle: React.FC<PageTitlePropsType> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
