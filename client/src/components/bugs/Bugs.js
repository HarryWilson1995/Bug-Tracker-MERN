import React, { Fragment, useContext } from 'react';
import BugContext from '../../context/bug/bugContext';

const Bugs = () => {
  const bugContext = useContext(BugContext);

  const { bugs } = bugContext;
  return (
    <Fragment>
      {bugs.map((bug) => (
        <h3>{bug.name}</h3>
      ))}
    </Fragment>
  );
};

export default Bugs;
