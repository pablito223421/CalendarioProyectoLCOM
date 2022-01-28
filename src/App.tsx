
import * as React from "react";
import { Provider } from 'react-redux';
import "./App.scss";
import configureStore from "./Historias/Historia";
import RtCalendario from "./Componentes/Calendario";
import AddEvent from "./Componentes/AgregarEvento_Componente";

const store = configureStore();

function App () {

    return(
      
      <div>
        <Provider store={store}>
        <AddEvent/>
        <RtCalendario />
        </Provider>,
        document.getElementById("root")
      </div>
    );
  }



export default App;
