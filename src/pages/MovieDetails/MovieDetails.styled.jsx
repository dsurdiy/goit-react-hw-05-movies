import styled from 'styled-components';

export const GoBackBtn = styled.button`
  margin-bottom: 20px;
  padding: 0;
  cursor: pointer;

  a {
    display: inline-block;
    padding: 5px;
    text-decoration: none;
    color: inherit;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
