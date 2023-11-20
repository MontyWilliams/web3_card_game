import React from 'react';

import pageHOC from '../components/pageHOC';

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">Avax Gods</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
    </div>
  )
};

export default pageHOC(
  Home,
)
