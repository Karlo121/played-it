import { Link } from 'react-router-dom';
import {
  StyledContainer,
  StyledContent,
  StyledItem,
  StyledLink,
  StyledList,
  StyledLogo,
} from './Navbar.style';

const Navbar = () => {
  return (
    <header>
      <StyledContainer>
        <StyledContent>
          <StyledLogo>
            <StyledLink to='/'>Played it</StyledLink>
            <StyledList>
              <StyledItem>
                <StyledLink to='/'>Playing</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/'>Finished</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/'></StyledLink>
              </StyledItem>
            </StyledList>
          </StyledLogo>
        </StyledContent>
      </StyledContainer>
    </header>
  );
};

export default Navbar;
