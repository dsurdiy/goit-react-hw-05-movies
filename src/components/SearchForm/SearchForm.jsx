import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { StyledField, SearchBtn } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    if (query === '') return;

    onSubmit(query);
    resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form>
        <StyledField type="text" name="query" />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
