import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
