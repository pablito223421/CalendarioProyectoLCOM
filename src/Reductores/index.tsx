import { combineReducers } from "redux";
import { ReductorFecha } from "./ReductorFecha";
import { ReductorNota } from "./ReductorNota";

export const reductor = combineReducers({
  date: ReductorFecha,
  note: ReductorNota,
});