import React, { useContext, useRef } from 'react';
import BugContext from '../../context/bug/bugContext';

const BugFilter = () => {
  const bugContext = useContext(BugContext);
  const text = useRef('');
  const { filterBugs, clearFilter } = bugContext;

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterBugs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Bugs...'
        onChange={onChange}
      />
    </form>
  );
};

export default BugFilter;
