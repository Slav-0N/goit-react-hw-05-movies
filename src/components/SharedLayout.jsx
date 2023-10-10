import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Container } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
