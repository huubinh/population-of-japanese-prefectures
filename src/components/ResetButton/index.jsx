import React from 'react';

const ResetButton = ({ reset }) => {
  return (
    <label className="reset-container">
      <button className="reset-button" onClick={reset} />
      リセット
    </label>
  );
};

export default ResetButton;
