import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BugContext from '../../context/bug/bugContext';
import BugItem from './BugItem';

const Bugs = () => {
  const bugContext = useContext(BugContext);

  const { bugs, filtered } = bugContext;

  if (bugs.length === 0) {
    return <h4>Please add a bug</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((bug) => <BugItem key={bug.id} bug={bug} />)
          : bugs.map((bug) => (
              <CSSTransition key={bug.id} timeout={500} classNames='item'>
                <BugItem bug={bug} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Bugs;
