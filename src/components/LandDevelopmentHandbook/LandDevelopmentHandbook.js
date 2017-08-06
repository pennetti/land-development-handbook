import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TableOfContents from '../TableOfContents/TableOfContents';
import PageNotFound from '../PageNotFound/PageNotFound';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Chapter from '../Chapter/Chapter';
import './LandDevelopmentHandbook.scss';
import chapters from '../ChapterContent';

const LandDevelopmentHandbook = () => (
  <div className="land-development-handbook">
    <h1>Land Development Handbook</h1>

    <nav>
      <Breadcrumbs />
    </nav>

    <Switch>
      <Route exact path="/" component={TableOfContents} />
      {chapters.map(chapter =>
        <Route
          exact
          key={chapter.number}
          path={`/chapter-${chapter.number}`}
          render={() => <Chapter
            name={chapter.name}
            contents={chapter.contents}
          />}
        />,
      )}
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default LandDevelopmentHandbook;
