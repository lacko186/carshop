import React from "react";
import 'react-bootstrap/dist/react-bootstrap.min.js';

const Card = ({ car }) => {
    const { brand, model, year, price } = car;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{brand} {model}</h5>
                <p className="card-text">Évjárat: {year}</p>
                <p className="card-text">Ár: ${price.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Card;