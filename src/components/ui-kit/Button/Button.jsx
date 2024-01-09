import React from 'react';
import './Button.scss';
import classNames from 'classnames';

export const Button = ({
  title,
  activeTitle,
  handleOnClick,
  active,
  handleOnClickActive,
}) => {
  return (
    <button
      className={classNames('button', {
        'button--active': active,
      })}
      onClick={active ? handleOnClickActive : handleOnClick}
    >
      {active ? activeTitle : title}
    </button>
  );
};
