import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';

class PulseNav extends Component {

  constructor(props) {
    super(props);
    this._createNavItems = this._createNavItems.bind(this);
    this.state = {nav : props.links};
  }

  _createNavItems() {
    // Some temporary variable is needed to store the react-bootstrap NavItems
    let navbarItems = [];
    let arrIndex = 1;
    for (let linkInfo of this.state.nav) {
      navbarItems[arrIndex] = (<NavItem href = {linkInfo['href']}> {linkInfo['title']}
      </NavItem>);
      arrIndex++;
        // ...
        // Example of how to access the links from the array
        // {linkInfo['href']}
        // Example of how to access the titles from the array
        // {linkInfo['title']}
    }
    return navbarItems;
}
  render() {
    return (
      <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="home#">Pulse 2019</a>

              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              {  this._createNavItems() }

            </Nav>
        </Navbar>
        // The above code snippet Should setup the navbar brand under the navbar header
        // Please look at the React Bootstrap Component link in the previous section
        // We now need the NavItems from _createNavItems().
        // Similar to how you accessed memebers of linkInfo
        // Need to refer to function as this._createNavItems()
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default PulseNav;
