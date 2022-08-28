import { Field } from 'formik';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  width: 300px;
  min-height: 30px;
  margin-bottom: 20px;
  border: 1px solid #dfd8d8;
  border-radius: 5px;

  :focus {
    outline: 2px solid #ff6347;
  }
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 5px;
  border: 1px solid #dfd8d8;
  border-radius: 5px;
  cursor: pointer;
`;
