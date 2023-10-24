import { FC, JSX } from 'react';
import styles from './Container.module.scss';

const Container: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props): JSX.Element => {
  const { children, ...other } = props;
  return (
    <div className={styles.container} {...other}>
      {children}
    </div>
  );
};
export default Container;
