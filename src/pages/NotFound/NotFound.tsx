import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';

const NotFound = (): JSX.Element => {
  return (
    <>
      <h1>Not Found</h1>
      <Link to={RoutesConstants.INDEX}>Back to main</Link>
    </>
  );
};
export default NotFound;
