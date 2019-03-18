import React from 'react';
import './Header.scss';
import Button from './Button';
import { MaquetterConsumer } from '../context';
export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center col-md-7 col-lg-6 text-md-left">
              <h1>Test assignment for Frontend Developer position</h1>
              <p className="p1">
                We kindly remind you that your test assignment should be
                submited as a link to github/bitbucket repository. Please be
                patient, we consider and respond to every application that meets
                minimum requirements. We look forward to your submission. Good
                luck!
              </p>
              <div className="header-button">
                <MaquetterConsumer>
                  {value => {
                    const { goTosection } = value;
                    return <Button title="Sign up" btnStyle="primary" onClick={goTosection} />;
                  }}
                </MaquetterConsumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
