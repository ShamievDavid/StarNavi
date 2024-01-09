import React, { useEffect, useState } from 'react';
import { Button, Select } from 'components/ui-kit';
import './Game.scss';
import { useFetch } from 'hooks';
import { Field } from 'components/Field';

const MODES_ENDPOINT = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export const Game = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);
  const { loadData, data } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      await loadData(MODES_ENDPOINT);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectedMode = (selectedModeName) => {
    const selectedModeObject = data.find(
      (mode) => mode.name === selectedModeName
    );

    const root = document.documentElement;

    console.log('fields', selectedModeObject.field);

    root.style.setProperty('--grid-columns', selectedModeObject.field);

    setSelectedMode(selectedModeObject);
    setReset(!reset);
    setStart(false);
  };

  const handleButtonClickActive = () => {
    setReset(!reset);
    setStart(!start);
  };

  return (
    <div className="game">
      <div className="game__header">
        <div className="game__select">
          <Select
            options={data?.map((mode) => mode.name)}
            setSelection={handleSelectedMode}
            initialOption="pick mode"
          />
        </div>

        <Button
          title="start"
          activeTitle="reset"
          handleOnClick={() => setStart(true)}
          handleOnClickActive={handleButtonClickActive}
          active={start}
        />
      </div>
      <div>
        <Field
          cells={selectedMode?.field}
          reset={reset}
          start={start}
        />
      </div>
    </div>
  );
};
