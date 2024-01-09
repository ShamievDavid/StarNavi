import React, { useEffect, useState } from 'react';
import './Cell.scss';
import classNames from 'classnames';

export const Cell = ({ row, col, cellWidth, reset, setHoveredHistory }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHoveredHistory((prev) => {
      if (
        prev.some(([prevRow, prevCol]) => prevRow === row && prevCol === col)
      ) {
        return prev.filter(
          ([prevRow, prevCol]) => !(prevRow === row && prevCol === col)
        );
      } else {
        return [...prev, [row, col]];
      }
    });
    setHovered(!hovered);
  };

  useEffect(() => {
    setHovered(false);
  }, [reset]);

  const styleObj = {
    width: cellWidth,
    height: cellWidth,
  };

  return (
    <div
      className={classNames('cell', {
        'cell--hovered': hovered,
      })}
      style={styleObj}
      onMouseEnter={handleHover}
    />
  );
};
