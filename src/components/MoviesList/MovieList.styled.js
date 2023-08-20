import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  max-width: 500px;
`;

export const Item = styled.li`
  padding: 5px;

  &:nth-child(even) {
      background: linear-gradient(0.25turn, #d1f1d1, #ffffff));
  }

  &:nth-child(odd) {
      background: linear-gradient(0.25turn, #36bf36, #ffffff);
  }
`;

export const StyledLink = styled(Link)`
  color: #000000;
  font-weight: 500;

  &:hover {
    color: #13247e;
  }
`;