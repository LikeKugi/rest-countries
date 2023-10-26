import { JSX } from 'react';
import styles from './Controls.module.scss';
import Search from '@/components/Search/Search';
import SelectBox from '@/components/SelectBox/SelectBox';

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Controls = (): JSX.Element => {
  return (
    <div className={styles.controls}>
      <Search />
      <SelectBox options={options} />
    </div>
  );
};
export default Controls;
