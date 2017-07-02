import React, { Component } from 'react';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
      <Header title="Directorio"/>
      Hola Mundo
      <Footer copyright= "Realizado por Juan Carlos Garcia"/>
      </div>
    );
  }
}

export default App;
