import React from 'react';
import { TitleAndDescriptionViewmodel } from './TitleAndDescriptionViewmodel';

const TitleAndDescription = ({
  title,
  description,
}: TitleAndDescriptionViewmodel) => {
  return (
    <div className="text-gray-800 ">
      <h1 className="h1">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TitleAndDescription;
