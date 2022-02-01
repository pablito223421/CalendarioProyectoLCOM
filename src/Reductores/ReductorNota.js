import {
    AGREGAR_NOTA,
    ACTUALIZAR_NOTA,
    ELIMINAR_NOTA,
    SET_FECHA,
    SHOW_ACTUALIZA_NOTA,
  } from "../Constantes/Constantes";

  import { formatoFecha } from "../FormatoFecha/FormatoFecha";

  const initialState = {
    date: formatoFecha(new Date()),
    notes: [],
    showUpdateNote: false,
    editTile: {},
  };
  
  export const ReductorNota = (state = initialState, action) => {
    switch (action.type) {
      case SET_FECHA:
        return {
          ...state,
          date: formatoFecha(action.payload),
        };
      case AGREGAR_NOTA:
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
  
      case ELIMINAR_NOTA:
        return {
          ...state,
          showUpdateNote: false,
          notes: state.notes.filter((n) => n.key !== action.payload),
        };
      case SHOW_ACTUALIZA_NOTA:
        return {
          ...state,
          showUpdateNote: !!action.payload,
          editTile: action.payload && {
            ...state.notes.filter((n) => n.key === action.payload)[0],
          },
        };
      case ACTUALIZAR_NOTA:
        const newNotes = state.notes.map((note) => {
          if (note.key === action.payload.key) {
            note.description = action.payload.description;
            note.title = action.payload.title;
            return { ...note };
          }
          return note;
        });
  
        return {
          ...state,
          showUpdateNote: false,
          notes: [...newNotes],
        };
      default:
        return state;
    }
  };


