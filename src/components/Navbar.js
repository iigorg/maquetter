import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import Sign from './Sign';
import MenuDrawer from './MenuDrawer';
import './Navbar.scss';
import { MaquetterConsumer } from '../context';

export default class Navbar extends Component {
  render() {
    return (
      <MaquetterConsumer>
        {value => {
          return (
            <div className="fixed-top">
              <div className="container">
                <div className="row">
                  <nav className="navbar d-none d-lg-flex d-xl-flex">
                    <Logo width={134} className="logo" />
                    <ul className="nav-links">
                      <li>
                        <a href="#about" className="nav-link">
                          About me
                        </a>
                      </li>
                      <li>
                        <a href="#relationships" className="nav-link">
                          Relationships
                        </a>
                      </li>
                      <li>
                        <a href="#requirements" className="nav-link">
                          Requirements
                        </a>
                      </li>
                      <li>
                        <a href="#users" className="nav-link">
                          Users
                        </a>
                      </li>
                      <li>
                        <a href="#sign" className="nav-link">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                    <Sign user={value} />
                  </nav>
                  <div className="col-12 d-lg-none d-xl-none">
                    <div className="navbarSmall">
                      <Logo width={120} className="logoSmall" />
                      <MenuDrawer user={value} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MaquetterConsumer>
    );
  }
}
