import React from 'react';
import Bugs from '../bugs/Bugs';
import BugForm from '../bugs/BugForm';
import BugFilter from '../bugs/BugFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <BugForm />
      </div>
      <div>
        <BugFilter />
        <Bugs />
      </div>
    </div>
  );
};

export default Home;
