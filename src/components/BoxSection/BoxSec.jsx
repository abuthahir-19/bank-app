import React from 'react';

const BoxSec = ({picture, head, para}) => {
    return (
        <div className="box-container-bank">
            <img src={picture} alt="Dynamic" />
            <h3>{ head }</h3>
            <p>{ para } </p>
        </div>
    );
}

export default BoxSec;