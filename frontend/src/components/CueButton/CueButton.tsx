import React from 'react';
import { CueButtonViewModel } from './CueButtonViewModel';

const CueButton = ({ title }: CueButtonViewModel) => {
  return (
    <button className="px-4 py-1 text-black transition duration-200  shadow-primary hover:bg-red-hard border-theme bg-red-primary">
      {title}
    </button>
  );
};

export default CueButton;
