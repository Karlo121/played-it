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
            <StyledLink to='/watching'>Played it</StyledLink>
            <StyledList>
              <StyledItem>
                <StyledLink to='/seen'>Played</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/add'>Add</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledLogo>
        </StyledContent>
      </StyledContainer>
    </header>
  );
};

export default Navbar;
