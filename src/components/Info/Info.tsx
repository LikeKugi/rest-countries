import { FC, JSX } from 'react';
import { ICountry } from '@/types/countriesTypes';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';
import styles from './Info.module.scss'

interface IInfoProps extends ICountry{}

const Info: FC<IInfoProps> = ({name, nativeName, flag, capital, population, region, subregion, topLevelDomain, currencies, languages, borders}): JSX.Element => {
  return (
    <section className={styles.info}>
      <img className={styles.info__img} src={flag}
           alt={name}/>
      <div>
        <h1 className={styles.info__title}>{name}</h1>
        <div className={styles.info__group}>
          <ul className={styles.info__list}>
            <li className={styles.info__item}><b>Native Name:</b> {nativeName}</li>
            <li className={styles.info__item}><b>Population</b> {population}</li>
            <li className={styles.info__item}><b>Region:</b> {region}</li>
            <li className={styles.info__item}><b>Sub Region:</b> {subregion}</li>
            <li className={styles.info__item}><b>Capital:</b> {capital}</li>
          </ul>
          <ul className={styles.info__list}>
            <li className={styles.info__item}><b>Top Level Domain</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}</li>
            <li className={styles.info__item}><b>Currency</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}</li>
            <li className={styles.info__item}><b>Top Level Domain</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}</li>
          </ul>
        </div>
        <div className={styles.info__meta}>
          <b>Border Countries</b>
          {!borders || !borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.info__tags}>
              {borders.map((country) => (
                <Link className={styles.info__tag} key={country} to={`${RoutesConstants.COUNTRY}/${country}`}>
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
