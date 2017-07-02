


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';



const MiPrimerComponente = () =>
(
<div className="text-center">
<Header title="Directorio"/>
      Hola Mundo
      <Footer copyright= "Realizado por Juan Carlos Garcia"/>
      </div>


);


ReactDOM.render(
   <MiPrimerComponente/>,
    document.getElementById('root')
);


