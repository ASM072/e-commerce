// eslint-disable-nextline

import './App.css';
import { Component } from 'react';

class App extends Component {
  
  constructor ()
  {
    super();
    this.state = {
     
    };
  }

  componentDidMount ()
  {
    
  }

  render ()
  {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Watches' onChange=
          {
          ( event ) =>
          {
          console.log( event );
          }
          }>
          
        </input>
      </div>
    );
  }
}

export default App;
