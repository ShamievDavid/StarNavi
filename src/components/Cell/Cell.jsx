import React, { useEffect, useState } from 'react';
import './Cell.scss';
import classNames from 'classnames';

export const Cell = ({ i, j, cellWidth, reset, cells }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    console.log(i, j, cellWidth);
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
