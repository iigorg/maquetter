import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Relationships from './components/Relationships';
import Requirements from './components/Requirements';
import UsersList from './components/UsersList';
import Register from './components/Register';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <About />
        <Relationships />
        <Requirements />
        <UsersList />
        <Register />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
