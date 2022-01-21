import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {anteriorMesDispatch,siguienteMesDispatch} from "../Acciones/creacion_Acciones";

const Botones = () => {

    const calendarContext = useSelector(state);
  
    const dispatch = useDispatch();
  
    return (
      <div className="buttons">
        <button
          className="prev-btn"
          onClick={() => {
            dispatch(anteriorMesDispatch(calendarContext));
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            dispatch(siguienteMesDispatch(calendarContext));
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };
  
  export default Botones;

function state(state: any) {
    throw new Error("Function not implemented.");
}