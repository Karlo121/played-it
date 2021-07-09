import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MoviesAndTv } from '@styled-icons/fluentui-system-regular/MoviesAndTv';

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #705e78;
`;

export const StyledContent = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export const StyledHome = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  margin-top: 0px;
`;

export const StyledHeader = styled.h1`
  color: white;
  margin-left: 0px;
`;

export const StyledItem = styled.li`
  display: inline;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 27px;
  margin-right: 30px;

  :hover {
    color: #fea443;
  }
`;

export const LogoIcon = styled(MoviesAndTv)`
  color: white;
  height: 70px;
`;
