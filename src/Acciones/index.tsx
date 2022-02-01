import {
    AGREGAR_NOTA,
    ACTUALIZAR_NOTA,
    ELIMINAR_NOTA,
    SET_FECHA,
    SHOW_ACTUALIZA_NOTA,
  } from "../Constantes/Constantes";
  
  export const agregarNota = (data: any) => {
    return {
      type: AGREGAR_NOTA,
      payload: data,
    };
  };
  
  export const actualizarNota = (data: any) => {
    return {
      type: ACTUALIZAR_NOTA,
      payload: data,
    };
  };
  
  export const eliminarNota = (tileKey: any) => {
    return {
      type: ELIMINAR_NOTA,
      payload: tileKey,
    };
  };
  
  export const cambiarFecha = (nextDate: any) => {
    return {
      type: SET_FECHA,
      payload: nextDate,
    };
  };
  
  export const setFecha = (date: any) => {
    return {
      type: SET_FECHA,
      payload: date,
    };
  };
  
  export const showActualizaNota = (tileKey: any) => {
    return {
      type: SHOW_ACTUALIZA_NOTA,
      payload: tileKey,
    };
  };