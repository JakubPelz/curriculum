import React from 'react';

const Server = () => {
  return (
    <div>
      <div className="ui inverted section divider"></div>
      <h2 className="ui center aligned header">Gastronomy project</h2>
      <div
        className="ui two column stackable grid center aligned container"
        style={{ padding: '20px' }}
      >
        <div className="column">
          <div className="ui raised segment max_width">
            <div className="ui teal progress active" data-percent="6">
              <div
                className="bar"
                style={{ transitionDuration: '300ms', width: '6%' }}
              ></div>
              <div className="label">6%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui inverted section divider"></div>
    </div>
  );
};

export default Server;
