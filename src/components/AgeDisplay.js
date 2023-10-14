import React from 'react';

const AgeDisplay = ({ age }) => {
  return (
    <div>
      {age ? <p>Your age is: {age} years</p> : null}
    </div>
  );
};

export default AgeDisplay;
