import { JSX, useEffect } from 'react';
import Container from '@/components/Container/Container';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ThemeNames } from '@/utils';
import { setTheme } from '@/store/theme/theme.actions';
import { selectCurrentTheme } from '@/store/theme/theme.selectors';
import { clearControls } from '@/store/controls/controls.actions';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectCurrentTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === ThemeNames.LIGHT ? ThemeNames.DARK : ThemeNames.LIGHT;
    dispatch(setTheme(newTheme));
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <Link
            className={styles.header__title}
            to={RoutesConstants.INDEX}
            onClick={() => dispatch(clearControls())}
          >
            Where is the world?
          </Link>
          <div className={styles.header__switcher} onClick={handleChangeTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
