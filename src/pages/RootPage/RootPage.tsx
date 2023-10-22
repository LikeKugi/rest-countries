import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

const RootPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
export default RootPage;
