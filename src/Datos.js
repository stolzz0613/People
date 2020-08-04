import React from 'react';
import moment from 'moment';

const Datos = ({ dato }) => {
    let birthDate = moment(dato.birthDate).format("MM/DD/YYYY");
    let now = moment().format("MM/DD/YYYY");
    let age = moment(now).format("YYYY") - moment(birthDate).format("YYYY");
    let remainingBirth = (parseInt(moment(birthDate).format("MM")) * 30 + parseInt(moment(birthDate).format("DD")));
    let remainingNow = (parseInt(moment(now).format("MM")) * 30 + parseInt(moment(now).format("DD")));
    let diff = (remainingBirth - remainingNow);

    return (
        <div className="card m-3">
            <div className="card-body">
                <p>{dato.firstName}</p>
                <p>Fecha de nacimiento: {birthDate}</p>
                <p>Edad: {age} años</p>
                {diff < 0
                    ? <p>Tiempo restante: {diff + 365} dias</p>
                    : <p>Tiempo restante: {diff} dias</p>
                }
            </div>
        </div>

    );
}

export default Datos;