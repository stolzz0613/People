import React, { useState } from 'react';
import { people } from "./people.json"
import Listado from "./Listado";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container p-5">
      <div className="row align-items-center mx-lg-n5">
        <div className="col" style={{ width: "200px" }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(true);
            }}
          >
            Mostrar Nombres
      </button>
          <Listado
            people={people}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
