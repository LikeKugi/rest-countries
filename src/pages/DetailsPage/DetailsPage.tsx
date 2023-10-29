import { JSX, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { IoArrowBack } from 'react-icons/io5';
import Info from '@/components/Info/Info';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectDetailsCountry, selectDetailsStatus } from '@/store/details/details.selectors';
import { loadCountryByCode } from '@/store/details/details.actions';
import { IAction, Status } from '@/store/types';

const DetailsPage = (): JSX.Element => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentCountry = useAppSelector(selectDetailsCountry);
  const currentStatus = useAppSelector(selectDetailsStatus);

  useEffect(() => {
    dispatch(loadCountryByCode(countryName as string) as unknown as IAction<string>);
  }, [countryName, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && currentStatus === Status.RECEIVED && <Info {...currentCountry} />}
    </div>
  );
};
export default DetailsPage;
