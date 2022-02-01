import { CAMBIAR_FECHA } from "../Constantes/Constantes";
import { ReductorFecha } from "./ReductorFecha";
describe("date reducer", () => {
  
  it("debe devolver nulo al llamar al reductor de fecha con estado nulo y acción en blanco", () => {
    const result = ReductorFecha ({ state: null, action: "" });

    expect(result).toEqual(null);
  });

  it("debe devolver el estado inicial al llamar al reductor de fecha con el estado inicial y la acción en blanco", () => {
    const initialState = new Date();
    const result = ReductorFecha ({ state: initialState, action: "" });

    expect(result).toEqual(initialState);
  });

  it("debe devolver el nuevo estado al llamar al reductor de fecha con el nuevo estado y la acción de cambio de fecha", () => {
    const initialState = new Date();
    const newDate = new Date();
    const result = ReductorFecha ({
        state: initialState, action: {
          type: CAMBIAR_FECHA,
          payload: newDate,
        }
      });

    expect(result).toEqual(newDate);
  });
});