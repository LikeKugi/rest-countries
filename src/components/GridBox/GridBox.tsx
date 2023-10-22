import { FC, JSX, ReactNode } from 'react';
import styles from './GridBox.module.scss';

interface IGridBoxProps {
  children: ReactNode | string | null | undefined
}

const GridBox: FC<IGridBoxProps> = ({children}): JSX.Element => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};
export default GridBox;
