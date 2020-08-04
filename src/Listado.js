import React from 'react';
import Datos from "./Datos";


const Listado = ({people}) => {
    return (
        <div className="row mt-5">
            {people.map(dato => (
                <Datos
                    dato={dato}
                />
            ))}
        </div>
    );
}

export default Listado;