import React from 'react';
import Bugs from '../bugs/Bugs';
import BugForm from '../bugs/BugForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <BugForm />
      </div>
      <div>
        <Bugs />
      </div>
    </div>
  );
};

export default Home;
