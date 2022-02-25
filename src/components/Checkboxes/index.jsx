import React from 'react';
import Checkbox from '../Checkbox';
import ResetButton from '../ResetButton';

const Checkboxes = ({
  checkboxStates,
  prefectures,
  selectPrefecture,
  deselectPrefecture,
  reset
}) => {
  return (
    <div className="container">
      <section className="checkboxes">
        {prefectures.map((prefecture, index) => {
          return (
            <Checkbox
              key={prefecture.prefCode}
              prefecture={prefecture}
              selectPrefecture={selectPrefecture}
              deselectPrefecture={deselectPrefecture}
              checkboxState={checkboxStates[index].state}
            />
          );
        })}
        <ResetButton reset={reset} />
      </section>
    </div>
  );
};

export default Checkboxes;
