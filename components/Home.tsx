import React from 'react';

const Home = (): React.ReactNode => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_center,rgba(26,35,50,0.3)_0%,transparent_80%)]">
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
        LUCAS BACCELLI
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-widest font-fira-code uppercase">
        Designer, Desenvolvedor Front End & de Apps
      </p>
    </section>
  );
};

export default Home;
