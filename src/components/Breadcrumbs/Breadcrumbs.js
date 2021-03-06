import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const breadCrumbTitles = {
  '': 'Table of Contents',
  'chapter-1': 'Chapter 1',
};

const BreadcrumbsItem = ({ match }) => {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)];
  const to = title === undefined ? '/' : match.url;

  return (
    <span>
      <Link to={to}>{title || 'Page Not Found'}</Link>
      {!match.isExact && title && ' / '}
      {title &&
      <Route
        path={`${match.url === '/' ? '' : match.url}/:path`}
        component={BreadcrumbsItem}
      />
      }
    </span>
  );
};

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};

export default function Breadcrumbs() {
  return (
    <Route path="/" component={BreadcrumbsItem} />
  );
}
