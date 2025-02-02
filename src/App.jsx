import React from 'react';
import Header from './Componentes/Header';
import HeroSec from './Componentes/HeroSec';
import Produtos from './Componentes/Produtos';
import Tamanhos from './Componentes/Tamanhos';
import Sobre from './Componentes/Sobre';
import Contato from './Componentes/Contato';
import Footer from './Componentes/Footer';

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <section id="home"><HeroSec /></section>
      <section id="produtos"><Produtos /></section>
      <section id="tamanhos"><Tamanhos /></section>
      <section id="sobre"><Sobre /></section>
      <section id="contato"><Contato /></section>
      <Footer />
    </div>
  );
};

export default App;
