import { FC, JSX } from 'react';
import styles from './Button.module.scss';

const Button: FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, onClick }): JSX.Element => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
