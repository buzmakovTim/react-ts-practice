import React, {
  ChangeEvent,
  ChangeEventHandler,
  useRef,
  useState,
} from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input',
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
      />{' '}
      - {value}{' '}
    </>
  );
};

export const GetValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      {' '}
      <input ref={inputRef} /> <button onClick={save}>save</button> - actual
      value: {value}{' '}
    </>
  );
};

export const ControlledInput = () => {
  const [parentValue, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return <input value={parentValue} onChange={onChange} />;
};

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked);
  };

  return <input type="checkbox" checked={value} onChange={onChange} />;
};

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>('2');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <select value={value} onChange={onChange}>
      <option>none</option>
      <option value={'1'}>Vancouver</option>
      <option value={'2'}>Toronto</option>
      <option value={'3'}>Calgary</option>
    </select>
  );
};

export const ControlledInputWithFixedValue = () => (
  <input value={'buzmakovTim.com'} />
);
