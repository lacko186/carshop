import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ car }) => {
    const { brand, model, year, price } = car;
    return (
        <div className="card mb-3 ">
            <div className="card-body bg-secondary text-white">
                <h5 className="card-title">{brand} {model}</h5>
                <p className="card-text">Évjárat: {year}</p>
                <p className="card-text">Ár: ${price.toLocaleString()}</p>
                <button className="btn btn-primary">Érdekel</button>
            </div>
        </div>
    );
};

export default Card;