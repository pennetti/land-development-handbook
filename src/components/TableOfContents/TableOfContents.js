import React from 'react';
import { Link } from 'react-router-dom';
import chapters from '../ChapterContent';

const TableOfContents = () => (
  <div>
    {chapters.map(chapter =>
      <Link to={`/chapter-${chapter.number}`} key={chapter.number}>
        {chapter.name}
      </Link>,
    )}
  </div>
);

export default TableOfContents;
