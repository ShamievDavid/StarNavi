import React, { useEffect, useRef } from 'react';
import './Field.scss';
import { Cell } from 'components/Cell';

export const Field = ({ cells, reset, start }) => {
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
            i={i}
            j={j}
            cellWidth={cellWidth}
            reset={reset}
            cells={cells}
          />
        );
      }
    }

    return cellArray;
  };

  // const styleObj = {
  //   gridTemplateColumns: `repeat(${cells}, ${310 / cells}px)`,
  // };

  const cellWidth = 310 / cells;

  return (
    <div
      className="field"
      // style={styleObj}
      ref={fieldRef}
    >
      {renderCells(cellWidth)}
    </div>
  );
};
