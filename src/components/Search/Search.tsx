import { ChangeEvent, JSX } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectControlsQuery } from '@/store/controls/controls.selectors';
import { setSearch } from '@/store/controls/controls.actions';

const Search = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const search = useAppSelector(selectControlsQuery);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  }

  return (
    <label className={styles.search}>
      <span className={styles.search__ico}><IoSearch /></span>
      <input className={styles.search__input}
             value={search}
             onChange={(e) => handleSearch(e)}
             type="text"
             placeholder={'Search for a country...'}/>
    </label>
  );
};
export default Search;
