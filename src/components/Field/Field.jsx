import React, { useEffect, useRef } from 'react';
import { Cell } from 'components/Cell';
import './Field.scss';
import classNames from 'classnames';

export const Field = ({ cells, reset, start, setHoveredHistory }) => {
  const fieldRef = useRef(null);

  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.style.pointerEvents = start ? 'auto' : 'none';
    }
  }, [start]);

  const renderCells = (cellWidth) => {
    const cellArray = [];

    for (let i = 0; i < cells; i++) {
      for (let j = 0; j < cells; j++) {
        cellArray.push(
          <Cell
            key={`${i}-${j}`}
            row={i}
            col={j}
            cellWidth={cellWidth}
            reset={reset}
            cells={cells}
            setHoveredHistory={setHoveredHistory}
          />
        );
      }
    }

    return cellArray;
  };

  const cellWidth = cells < 50 ? 310 / cells : 620 / cells;

  return (
    <div
      className={classNames(cells ? 'field' : 'field--hidden', {
        'field--huge': cells > 50,
      })}
      ref={fieldRef}
    >
      {renderCells(cellWidth)}
    </div>
  );
};
