import { FC } from 'react';
import Select from 'react-select';
import styles from './SelectBox.module.scss';

interface IOption {
  value: string;
  label: string;
}

interface ISelectBoxProps {
  options: IOption[];
}


const SelectBox: FC<ISelectBoxProps> = ({ options }) => {

  return (
    <Select className={styles.select}
            defaultValue={null}
            options={options}
            onChange={e => console.log(e)}
            placeholder={'Filter by Region'}
            isClearable={true}/>
  );
};

export default SelectBox;
