import { FC, JSX } from 'react';
import Container from '@/components/Container/Container';
import styles from './Main.module.scss';

const Main: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  ...other
}): JSX.Element => {
  return (
    <main className={styles.main} {...other}>
      <Container>{children}</Container>
    </main>
  );
};
export default Main;
