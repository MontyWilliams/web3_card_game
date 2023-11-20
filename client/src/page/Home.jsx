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
    <>Welcome to the crypto card game <br /> yeah yea <br /></>,
    <>Connect  Wallet to do stuff <br /> Ther is no limit with crypto!</>
)
