import React from 'react';
import Header from './Componentes/Header';
import HeroSec from './Componentes/HeroSec';
import Produtos from './Componentes/Produtos';
import Tamanhos from './Componentes/Tamanhos';
import Sobre from './Componentes/Sobre';



const App = () => {
  return (
    <div className="App ">
      <Header />
      <HeroSec />
      <Produtos />
      <Tamanhos />
      <Sobre />
    </div>
  );
};

export default App;