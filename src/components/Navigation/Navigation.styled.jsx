import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  min-height: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 16px;
`;

export const Link = styled(NavLink)`
  padding: 12px;
  text-decoration: none;
  font-weight: 500;
  color: #212121;
  font-size: 18px;

  &.active {
    color: #ff6347;
  }
`;
