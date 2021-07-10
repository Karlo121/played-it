import { Link } from 'react-router-dom';
import {
  StyledContainer,
  StyledContent,
  StyledLink,
  LogoIcon,
  StyledButton,
  AddIcon,
} from './Navbar.style';

const Navbar = () => {
  return (
    <header>
      <StyledContainer>
        <StyledContent>
          <Link className='linkHover' to='/watching'>
            <LogoIcon />
            Seen it
          </Link>
        </StyledContent>
        <StyledContent>
          <StyledLink to='/seen'>Seen</StyledLink>
        </StyledContent>
        <StyledContent>
          <StyledLink to='/add'>
            <StyledButton>
              <AddIcon />
              Add
            </StyledButton>
          </StyledLink>
        </StyledContent>
      </StyledContainer>
    </header>
  );
};

export default Navbar;
