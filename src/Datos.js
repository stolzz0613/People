import React from 'react';

const Datos = ({ dato }) => {
    console.log(dato.birthDate.split())
    return (
        <div className="card">
            <div className="card-body">
                <p>{dato.firstName}</p>
                <p>{dato.birthDate}</p>
            </div>
        </div>

    );
}

export default Datos;