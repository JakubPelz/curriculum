import React from 'react';
import ServerSide from './projectStatus/ServerSide';
import ServerFrontEnd from './projectStatus/ServerFrontEnd';
import GameSupport from './projectStatus/GameSupport';

const MainDown = () => {

    return (
      <div className="ui three column doubling grid container">
          <div className="column"><ServerSide /></div>
          <div className="column"><ServerFrontEnd /></div>
          <div className="column"><GameSupport /></div>
      </div>
    )
};
export default MainDown;

