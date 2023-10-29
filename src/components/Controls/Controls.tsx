import { JSX } from 'react';
import styles from './Controls.module.scss';
import Search from '@/components/Search/Search';
import SelectBox from '@/components/SelectBox/SelectBox';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectControlsRegion } from '@/store/controls/controls.selectors';
import { IOption } from '@/types/base';
import { setRegion } from '@/store/controls/controls.actions';
import { MultiValue, SingleValue } from 'react-select';

const optionsMap: Record<string, IOption> = {
  Africa: { value: 'Africa', label: 'Africa' },
  Americas: { value: 'Americas', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Controls = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectControlsRegion);

  const handleSelect = (region: MultiValue<IOption> | SingleValue<IOption>) => {
    dispatch(setRegion((region as IOption)?.value || ''));
  };

  return (
    <div className={styles.controls}>
      <Search />
      <SelectBox options={options} value={optionsMap[region]} onChange={handleSelect} />
    </div>
  );
};
export default Controls;
