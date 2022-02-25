import React from 'react';

const Checkbox = ({ prefecture, selectPrefecture, deselectPrefecture, checkboxState }) => {
  return (
    <label className="checkbox">
      {prefecture.prefName}
      <input
        type="checkbox"
        checked={checkboxState === 'checked' ? true : false}
        onChange={() => {
          if (checkboxState === 'unchecked') selectPrefecture(prefecture);
          else if (checkboxState === 'checked') deselectPrefecture(prefecture.prefCode);
        }}
        disabled={checkboxState === 'loading' ? true : false}
      />
      <span className={checkboxState === 'loading' ? 'loading' : 'checkmark'}></span>
    </label>
  );
};

export default Checkbox;
