import React from 'react';

const GamesAlert = ({ resultsLength }) => {
  if (resultsLength === 0) {
    return (
      <div className='border flex flex-col justify-center items-center w-full  mx-auto mt-4 rounded-md   bg-gradient-to-r from-lime-600  to-cyan-600 mb-6 py-2'>
        <h2 className='text-lg lg:text-xl font-bold tracking-wide capitalize text-white'>No games with this filters</h2>
      </div>
    );
  }
  return (
    <div className='border flex flex-col justify-center items-center w-full  mx-auto mt-4 rounded-md   bg-gradient-to-r from-sky-400  to-violet-600 mb-6 py-2'>
      <h2 className='text-lg lg:text-xl font-bold tracking-wide capitalize text-white'>Games: {resultsLength}</h2>
    </div>
  );
};

export default GamesAlert;
