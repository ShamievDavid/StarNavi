import React, { useEffect, useState } from 'react';
import { Button, Select } from 'components/ui-kit';
import { Field, HoveredCells } from 'components';
import { useFetch } from 'hooks';
import './Game.scss';

const MODES_ENDPOINT = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export const Game = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);
  const [hoveredHistory, setHoveredHistory] = useState([]);
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

    root.style.setProperty('--grid-columns', selectedModeObject.field);

    setSelectedMode(selectedModeObject);
    setReset(!reset);
    setStart(false);
    setHoveredHistory([]);
  };

  const handleButtonClickActive = () => {
    setReset(!reset);
    setStart(!start);
    setHoveredHistory([]);
  };

  return (
    <div className="game__wrapper">
      <div className="game">
        <div className="game__header">
          <div className="game__select">
            <Select
              options={data?.map((mode) => mode.name)}
              setSelection={handleSelectedMode}
              initialOption="pick mode"
            />
          </div>

          <div className="game__button">
            <Button
              title="start"
              activeTitle="reset"
              handleOnClick={() => setStart(true)}
              handleOnClickActive={handleButtonClickActive}
              active={start}
              disabled={!selectedMode}
            />
          </div>
        </div>

        <div>
          <Field
            cells={selectedMode?.field}
            reset={reset}
            start={start}
            setHoveredHistory={setHoveredHistory}
            hoveredHistory={hoveredHistory}
          />
        </div>
      </div>
      <div>
        <HoveredCells cells={hoveredHistory} />
      </div>
    </div>
  );
};
