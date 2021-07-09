import { Link } from 'react-router-dom';
import {
  StyledContainer,
  StyledContent,
  StyledItem,
  StyledLink,
  StyledList,
  StyledHome,
  StyledHeader,
  LogoIcon,
} from './Navbar.style';

const Navbar = () => {
  return (
    <header>
      <StyledContainer>
        <StyledContent>
          <StyledHome>
            <>
              <StyledHeader>
                <LogoIcon />
                Seen it
              </StyledHeader>
            </>
            <StyledLink to='/watching'>Watching</StyledLink>
            <StyledList>
              <StyledItem>
                <StyledLink to='/seen'>Seen</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/add'>Add</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledHome>
        </StyledContent>
      </StyledContainer>
    </header>
  );
};

export default Navbar;
