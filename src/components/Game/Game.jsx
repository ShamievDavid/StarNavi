import React, { useEffect, useState } from 'react';
import { Button, Select } from 'components/ui-kit';
import './Game.scss';
import { useFetch } from 'hooks';
const mockArr = [1, 2, 3, 4];

const MODES_ENDPOINT = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export const Game = () => {
  const [mode, setMode] = useState(null);
  const { loadData, data } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      await loadData(MODES_ENDPOINT);
    };

    fetchData();
  }, []);

  return (
    <div className="game">
      <div className="game__header">
        <div className="game__select">
          <Select
            options={data?.map((mode) => mode.name)}
            setSelection={setMode}
            initialOption="pick mode"
          />
        </div>

        <Button title="start" />
      </div>

      <div>{mode}</div>
    </div>
  );
};
