import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  const [numClicks, setNumClicks] = useState(0);

  return (
    <div className="App">
        
        <div className="contenedor-principal">
          <Contador numDeClicks={numClicks} />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={manejarClick}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
  );
}

export default App;
