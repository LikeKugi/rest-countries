import { JSX } from 'react';
import Container from '@/components/Container/Container';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styles from './Header.module.scss'

const Header = (): JSX.Element => {
  const theme = 'light';
  return (
    <header className={styles.header}>
        <Container>
          <div className={styles.header__wrapper}>
            <Link className={styles.header__title} to={RoutesConstants.INDEX}>Where is the world?</Link>
            <div className={styles.header__switcher}>
              {theme === 'light' ? (
                <IoMoonOutline size="14px" />
              ) : (
                <IoMoon size="14px" />
              )}{' '}
              <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
            </div>
          </div>
        </Container>
    </header>
  );
};
export default Header;
