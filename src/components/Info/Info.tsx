import { FC, JSX, useEffect } from 'react';
import { ICountry } from '@/types/countriesTypes';
import { Link } from 'react-router-dom';
import styles from './Info.module.scss';
import { RoutesConstants } from '@/routes/RoutesConstants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectDetailsBorders } from '@/store/details/details.selectors';
import { loadBorders } from '@/store/details/details.actions';
import { IAction } from '@/store/types';

interface IInfoProps extends ICountry {}

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
  tld,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectDetailsBorders);

  useEffect(() => {
    if (Array.isArray(borders) && borders.length > 0) {
      dispatch(loadBorders(borders) as unknown as IAction<Array<string[]>>);
    }
  }, [borders, dispatch]);

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
              {Object.entries(currencies).map(([code, { name }]) => (
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
          {!neighbors || !neighbors.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.info__tags}>
              {neighbors.map(([country, code]) => (
                <Link
                  className={styles.info__tag}
                  key={code}
                  to={`${RoutesConstants.INDEX}${code}`}
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
