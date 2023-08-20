import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  max-width: 500px;
`;

export const Item = styled.li`
  padding: 5px;

  &:nth-child(even) {
    background-color:#d1f1d1
  }

  &:nth-child(odd) {
    background-color: #87df87;
  }
`;

export const StyledLink = styled(Link)`
  color: #000000;
  font-weight: 500;

  &:hover {
    color: #13247e;
  }
`;