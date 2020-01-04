import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header'

class App extends Component {

  state = {
    titulo:'Budget Manager'
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo = {this.state.titulo}
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column"> 
                    Formulario
            </div>

            <div className="one-half column"> 
                    Vista Previa 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
