import { CAMBIAR_FECHA } from "../Constantes/Constantes";

const initialState = new Date();

export function ReductorFecha({ state = initialState, action }: { state: Date; action: any; }) {
  switch (action.type) {
    case CAMBIAR_FECHA:
      return action.payload;
    default:
      return state;
  }
}