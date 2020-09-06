import React, { Fragment, useContext } from 'react';
import BugItem from './BugItem';
import BugContext from '../../context/bug/bugContext';

const Bugs = () => {
  const bugContext = useContext(BugContext);

  const { bugs, filtered } = bugContext;

  if (bugs.length === 0) {
    return <h4>Please add a bug</h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((bug) => <BugItem key={bug._id} bug={bug} />)
        : bugs
            .sort((a, b) => (a.priority > b.priority ? 1 : -1))
            .map((bug) => <BugItem key={bug._id} bug={bug} />)}
    </Fragment>
  );
};

export default Bugs;
