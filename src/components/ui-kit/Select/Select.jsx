import React, { useState } from 'react';
import './Select.scss';
import classNames from 'classnames';

export const Select = ({ options, setSelection, initialOption }) => {
  const [selected, setSelected] = useState(initialOption);
  const [dropOptions, setDropOptions] = useState(false);

  const handleSelect = (option) => () => {
    setSelected(option);
    setSelection(option);
  };

  return (
    <div className="select">
      <div
        className={classNames('select__input', {
          'select__input--opened': dropOptions,
        })}
        id="select"
        onClick={() => setDropOptions(!dropOptions)}
        tabIndex={0}
        onBlur={() => setDropOptions(false)}
      >
        <>
          <div className="select__selected">{selected}</div>
          {dropOptions && (
            <ul className="select__options">
              {options.map((option) => (
                <li
                  key={option}
                  value={option}
                  className={classNames('select__option', {
                    'select__option--selected': selected === option,
                  })}
                  onClick={handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </>
      </div>
    </div>
  );
};
