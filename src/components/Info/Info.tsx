import { FC, JSX } from 'react';
import { ICountry } from '@/types/countriesTypes';
import { Link } from 'react-router-dom';
import styles from './Info.module.scss';

interface IInfoProps extends ICountry {
}

const Info: FC<IInfoProps> = ({
  name,
  flags,
  capital,
  population,
  region,
  subregion,
  currencies,
  languages,
  borders,
  tld
}): JSX.Element => {
  return (
    <section className={styles.info}>
      <img className={styles.info__img} src={flags.svg} alt={name.common} />
      <div>
        <h1 className={styles.info__title}>{name.official}</h1>
        <div className={styles.info__group}>
          <ul className={styles.info__list}>
            <li className={styles.info__item}>
              <b>Native Name:</b> {name.nativeName.eng?.official || name.official}
            </li>
            <li className={styles.info__item}>
              <b>Population</b> {population}
            </li>
            <li className={styles.info__item}>
              <b>Region:</b> {region}
            </li>
            <li className={styles.info__item}>
              <b>Sub Region:</b> {subregion}
            </li>
            <li className={styles.info__item}>
              <b>Capital:</b> {capital}
            </li>
          </ul>
          <ul className={styles.info__list}>
            <li className={styles.info__item}>
              <b>Top Level Domain</b>{' '}
              {tld.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li className={styles.info__item}>
              <b>Currency</b>{' '}
              {Object.entries(currencies).map(([code, {name}]) => (
                <span key={code}>{name} </span>
              ))}
            </li>
            <li className={styles.info__item}>
              <b>Top Level Domain</b>{' '}
              {Object.values(languages).map((language) => (
                <span key={language}>{language}</span>
              ))}
            </li>
          </ul>
        </div>
        <div className={styles.info__meta}>
          <b>Border Countries</b>
          {!borders || !borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.info__tags}>
              {borders.map((country) => (
                <Link
                  className={styles.info__tag}
                  key={country}
                  to={`${country}`}
                >
                  {country}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Info;
