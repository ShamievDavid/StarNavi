import React from 'react';
import { PopUp } from './components';
import './HoveredCells.scss';

export const HoveredCells = ({ cells }) => (
  <div className="hovered-cells">
    <h2 className="hovered-cells__title">Hovered squares</h2>
    <div className="hovered-cells__container">
      {cells?.map(([row, col]) => (
        <PopUp
          row={row + 1}
          col={col + 1}
        />
      ))}
    </div>
  </div>
);
