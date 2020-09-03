import React from 'react';
import Bugs from '../bugs/Bugs';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>{/* Bug Form */}</div>
      <div>
        <Bugs />
      </div>
    </div>
  );
};

export default Home;
