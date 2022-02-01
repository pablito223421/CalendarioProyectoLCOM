import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCalendar from "react-calendar";
import { cambiarFecha, setFecha } from "../Acciones/index";

function Calendario() {
  const value = useSelector((state) => state.date.value);
  const dispatch = useDispatch();

  return (
    <ReactCalendar
      onClickDay={(date) => dispatch(setFecha(date))}
      onChange={(nextValue) => dispatch(cambiarFecha(nextValue))}
      value={value}
    />
  );
}

export default Calendario;