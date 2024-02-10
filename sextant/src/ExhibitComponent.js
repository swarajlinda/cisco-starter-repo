// ExhibitComponent.js
import React from 'react';

const ExhibitComponent = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default ExhibitComponent;
