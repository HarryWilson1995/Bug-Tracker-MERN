import React, { Fragment, useContext } from 'react';
import BugContext from '../../context/bug/bugContext';
import BugItem from './BugItem';

const Bugs = () => {
  const bugContext = useContext(BugContext);

  const { bugs } = bugContext;
  return (
    <Fragment>
      {bugs
        .sort((a, b) => (a.priority > b.priority ? 1 : -1))
        .map((bug) => (
          <BugItem key={bug.id} bug={bug} />
        ))}
    </Fragment>
  );
};

export default Bugs;
