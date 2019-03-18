import React from 'react';
import './Relationships.scss';
import css from '../imgs/css.svg';
import html from '../imgs/html.svg';
import javascript from '../imgs/javascript.svg';

export default function Relationships() {
  return (
    <section id="relationships">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">
              About my relationships with web-development
            </h2>
          </div>
          <div className="col-12 text-center col-md-12 col-lg-4 text-md-left">
            <div className="relation d-block d-md-flex d-lg-block">
              <span>
                <img src={html} alt="html" />
              </span>
              <div className="relation__title">
                <h3>I'm in love with HTML</h3>
                <p className="p2">
                  Hypertext Markup Language (HTML) is the standard markup
                  language for creatind web pages and web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center col-md-12 col-lg-4 text-md-left">
            <div className="relation d-block d-md-flex d-lg-block">
              <span>
                <img src={css} alt="css" />
              </span>
              <div className="relation__title">
                <h3>CSS my best friend</h3>
                <p className="p2">
                  Cascading Style Sheets (CSS) is a style sheet language used
                  for describing the presentation of a document written in a
                  markup language like HTML.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center col-md-12 col-lg-4 text-md-left">
            <div className="relation d-block d-md-flex d-lg-block">
              <span>
                <img src={javascript} alt="javascript" />
              </span>
              <div className="relation__title">
                <h3>JavaScript is my passion</h3>
                <p className="p2">
                  JavaScript is a high-level, interpreted programming language.
                  It is a language which is also characterized as dynamic,
                  weakly typed, prototype-based and multi-paradigm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
