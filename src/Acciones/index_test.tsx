import {
    AGREGAR_NOTA,
    ACTUALIZAR_NOTA,
    ELIMINAR_NOTA,
    SET_FECHA,
    SHOW_ACTUALIZA_NOTA,
  } from "../Constantes/Constantes";

import * as Acciones from "./index";

describe("actions", () => {
  it("debe crear una acción para agregar una nota", () => {
    const data = {};
    const expectedAction = {
      type:AGREGAR_NOTA,
      payload: data,
    };
    expect(actions.addNote(data)).toEqual(expectedAction);
  });

  it("debe crear una acción para actualizar una nota", () => {
    const data = {};
    const expectedAction = {
      type: ACTUALIZAR_NOTA,
      payload: data,
    };
    expect(actions.updateNote(data)).toEqual(expectedAction);
  });

  it("debe crear una acción para eliminar una nota", () => {
    const tileKey = 1;
    const expectedAction = {
      type: ELIMINAR_NOTA,
      payload: tileKey,
    };
    expect(actions.deleteNote(tileKey)).toEqual(expectedAction);
  });

  it("debe crear una acción para cambiar la fecha", () => {
    const nextDate = new Date().getDate();
    const expectedAction = {
      type: SET_FECHA,
      payload: nextDate,
    };
    expect(actions.changeDate(nextDate)).toEqual(expectedAction);
  });

  it("debe crear una acción para cambiar la fecha", () => {
    const date = new Date().getDate();
    const expectedAction = {
      type: SET_FECHA,
      payload: date,
    };
    expect(actions.setDate(date)).toEqual(expectedAction);
  });

  it("debe crear una acción para mostrar la nota de actualización", () => {
    const tileKey = 1;
    const expectedAction = {
      type: SHOW_ACTUALIZA_NOTA,
      payload: tileKey,
    };
    expect(actions.showUpdateNote(tileKey)).toEqual(expectedAction);
  });
});