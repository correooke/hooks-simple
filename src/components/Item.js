import React from 'react';

const Item = ({ image, title, details}) => {
    return (
        <div className='item'>
            <img src={image} alt=""/>
            <div className="text">
                <h3>{title}</h3>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Item;