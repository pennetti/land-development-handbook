import React from 'react';
import PropTypes from 'prop-types';

const Chapter = ({ name, contents }) => (
  <div>
    <h2>{name}</h2>
    <p>{contents}</p>
  </div>
  );

Chapter.propTypes = {
  name: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};

export default Chapter;
