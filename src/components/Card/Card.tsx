import { FC, JSX } from 'react';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';
import { ICountryInfoElement } from '@/types/countriesTypes';
import styles from './Card.module.scss';

interface ICardProps {
  img: string;
  name: string;
  info: ICountryInfoElement[];
}

const Card: FC<ICardProps> = ({ img, info, name }): JSX.Element => {
  return (
    <article className={styles.card}>
      <Link className={styles.card__link} to={`${RoutesConstants.COUNTRY}/${name}`}>
        <img className={styles.card__img} src={img} alt={name} />
        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{name}</h3>
          <ul className={styles.card__list}>
            {info.map((el) => (
              <li className={styles.card__item} key={el.title}>
                <b>{el.title}:</b> {el.description}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
};
export default Card;
