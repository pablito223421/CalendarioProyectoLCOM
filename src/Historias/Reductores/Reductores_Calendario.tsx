import HISTORIA_CONSTANTES from "../Constantes";
import * as _ from "lodash";
import { combineReducers } from "redux";

interface iEvent {
    id: string;
    fecha: string;
    eventoNombre: string;
}

interface iAction extends iEvent {
    type: string;
    index: number;
}

let events = (state:iEvent[] = [], action:iAction) => {
    switch (action.type) {
        case HISTORIA_CONSTANTES.ACTIONS.AGREGAR_EVENTO: {
            return [
                ...state,
                {
                    id: action.id,
                    fecha: action.fecha,
                    eventName: action.eventoNombre
                }   
            ]
        }
        case HISTORIA_CONSTANTES.ACTIONS.BORRAR_EVENTO: {
            //do not mutate state hence create new array
            let newArray = state.slice();
            newArray.splice(action.index, 1);
            return newArray;
        }
        default: {
          return state
        }
    }
}

export const calenderApp = combineReducers({ events });