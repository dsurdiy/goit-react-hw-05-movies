import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};
