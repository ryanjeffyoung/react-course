import React from 'react';
import './App.css';
import { Navbar, NavbarBrand, Nav} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">This is my Logo</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}


export default App;
