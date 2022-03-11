import React from 'react';

const Footer = () => {
  return (
    <div
      className="ui inverted vertical footer segment"
      style={{ marginTop: '30px' }}
    >
      <div className="ui two column stackable grid container">
        <div className="column">
          <p>
            Link to my GIT for more information{' '}
            <a
              href="https://github.com/JakubPelz/myGame"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'white' }}
            >
              HERE
            </a>
            .
          </p>
        </div>
        <div className="column">
          <p>The lower part of the website is continuously updated.</p>
        </div>
      </div>
      <h4 className="ui center aligned header">
        <a
          href="https://www.linkedin.com/in/jakub-pelz-69429621a/"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'white' }}
        >
          Jakub Pelz - LinkedIn
        </a>
      </h4>
    </div>
  );
};

export default Footer;
