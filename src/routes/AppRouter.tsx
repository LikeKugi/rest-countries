import { JSX } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RoutesConstants } from '@/routes/RoutesConstants';
import RootPage from '@/pages/RootPage/RootPage';
import NotFound from '@/pages/NotFound/NotFound';
import DetailsPage from '@/pages/DetailsPage/DetailsPage';
import HomePage from '@/pages/HomePage/HomePage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesConstants.INDEX} element={<RootPage />}>
      <Route index element={<HomePage />} />
      <Route path={RoutesConstants.DETAILS} element={<DetailsPage />} />
      <Route path={RoutesConstants.NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);

const AppRouter = (): JSX.Element => {
  return <RouterProvider router={routes} />;
};
export default AppRouter;
