import React from 'react';
import './About.scss';
import imgMan from '../imgs/man-mobile.svg';
import Button from './Button';
import { MaquetterConsumer } from '../context';
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <h2 className="about-title">Let's get ac quainted</h2>
          <div className="col-12 text-center col-md-4 text-md-left">
            <img src={imgMan} alt="man-mobile" className="img-fluid" />
          </div>
          <div className="col-12 text-center col-md-8 text-md-left">
            <div className="about__info">
              <h3>I am cool frontend developer</h3>
              <p className="p2">
                When real users have a slow experience in mobile, they're much
                less likely ti find what they are looking for or purchase from
                you in the future. For many sites this equates to a huge missed
                opportunity, especially when more than half of visits are
                abandoned if a mobile page takes over 3 seconds to load.
              </p>
              <p className="p2">
                Last week, Google Search and Ads teams announced two new speed
                initiatives to help improve user-experience on the web.
              </p>
              <MaquetterConsumer>
                {value => {
                  const { goTosection } = value;
                  return (
                    <Button
                      title="Sign up"
                      btnStyle="text"
                      onClick={goTosection}
                    />
                  );
                }}
              </MaquetterConsumer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
