import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MoviesAndTv, Add } from '@styled-icons/fluentui-system-regular';

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #705e78;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 27px;

  :hover {
    color: #fea443;
  }
`;

export const LogoIcon = styled(MoviesAndTv)`
  color: white;
  height: 70px;

  :hover {
    color: #fea443;
  }
`;

export const AddIcon = styled(Add)`
  color: white;
  height: 30px;
  margin-right: 5px;
`;

export const StyledContent = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;

  .linkHover {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 27px;
    :hover {
      color: #fea443;
      ${LogoIcon} {
        color: #fea443;
      }
    }
  }

  :hover {
    color: #fea443;
  }
`;

export const StyledHeader = styled.h1`
  color: white;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  font-size: 27px;
  display: flex;
  font-weight: 900;

  background-color: transparent;
  border: 3px solid white;
  border-radius: 7px;

  :hover {
    color: #fea443;
    border-color: #fea443;
    ${AddIcon} {
      color: #fea443;
    }
  }
`;
