import React from 'react';
import { DataServer } from './Data';

const ServerSide = () => {
    
    return (
        <div>
            {DataServer.map((item, index) => {
                return (
                    <div className="column" key={index}>
                        <h3 className="ui center aligned header">{item.name}</h3>
                        <div className="ui raised segment max_width">
                            <div className="ui teal progress active" data-percent={item.dataPercent}>
                                <div className="bar" style={{ transitionDuration: "300ms", width: `${item.dataPercent}%` }}></div>
                                <div className="label" >{item.dataPercent}%</div>
                            </div>
                        </div>
                        {item.subBar.map((bar, barIndex) => {
                            return (
                                <div style={{padding: "10px"}} key={barIndex}>
                                    <p className="ui center aligned container">{bar.name}</p>                                  
                                    <div className="ui olive progress active" data-percent={bar.dataPercent}>
                                        <div className="bar" style={{ transitionDuration: "300ms", width: `${bar.dataPercent}%` }}>
                                        </div>
                                        <div className="label" style={{fontSize: "12px"}}>{bar.dataPercent}%</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
};

export default ServerSide;
