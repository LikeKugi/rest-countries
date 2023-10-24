import { FC, JSX } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './Search.module.scss';

interface ISearchProps {
  search: string,
  setSearch: (arg: string) => void
}

const Search: FC<ISearchProps> = ({ setSearch, search }): JSX.Element => {
  return (
    <label className={styles.search}>
      <span className={styles.search__ico}><IoSearch /></span>
      <input className={styles.search__input}
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             type="text"
             placeholder={'Search for a country...'}/>
    </label>
  );
};
export default Search;
