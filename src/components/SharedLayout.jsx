import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Container } from './SharedLayout.styled';

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
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
