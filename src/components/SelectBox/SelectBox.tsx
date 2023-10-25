import { FC } from 'react';
import Select, { StylesConfig } from 'react-select';
import styles from './SelectBox.module.scss';

interface IOption {
  value: string;
  label: string;
}

interface ISelectBoxProps {
  options: IOption[];
}

const colourStyles: StylesConfig<IOption> = {
  control: (styles) => ({
    ...styles, backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
    cursor: 'pointer',
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
      ':active': {
        ...styles[':active'],
        color: 'var(--colors-ui-base)!important',
        backgroundColor: 'var(--colors-text)',
      }
    };
  },
};


const SelectBox: FC<ISelectBoxProps> = ({ options }) => {

  return (
    <Select className={styles.select}
            defaultValue={null}
            options={options}
            onChange={e => console.log(e)}
            placeholder={'Filter by Region'}
            isClearable={true}
            styles={colourStyles}/>
  );
};

export default SelectBox;
