import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = ({ location }) => (
  <p>
    Page not found - the path {location.pathname},
    did not match any React Router routes.
  </p>
);

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PageNotFound;
