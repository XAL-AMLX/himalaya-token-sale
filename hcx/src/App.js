import React, { Component } from 'react';
import background from "./figmasunthree.png"
import "./App.css";
  
class App extends Component {
  render() {
   const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: ' no repeat',
    };
    return (
      <div style={myStyle} >
        <div className='hcx-title'>
          <h1>HCX</h1>
        </div>
      </div>
    );
  }
}
   
export default App;


