import PropTypes from 'prop-types';

export const Button = ({ showFilms, isShown }) => {
  return (
    <button onClick={showFilms}>{isShown ? 'Hide films' : `Show Films`}</button>
  );
};

Button.propTypes = {
  showFilms: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};
