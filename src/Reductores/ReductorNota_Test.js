import { AGREGAR_NOTA,SET_FECHA} from "../Constantes/Constantes";
  import { formatoFecha } from "../FormatoFecha/FormatoFecha";
  import { ReductorNota } from "./ReductorNota";

  const initialState = {
    date: formatoFecha(new Date()),
    notes: [],
    showUpdateNote: false,
    editTile: {},
  };
  
  describe("note reducer", () => {
    it("should return null while calling note reducer with null state and blank action", () => {
      expect(ReductorNota(null, "")).toEqual(null);
    });
  
    it("should return initialState while calling note reducer with blank action", () => {
      expect(ReductorNota(initialState, "")).toEqual(initialState);
    });
  
    it("should return new State while calling note reducer with SET_DATE action", () => {
      const newDate = new Date();
      expect(
        ReductorNota(initialState, {
          type: SET_FECHA,
          payload: newDate,
        })
      ).toEqual({ ...initialState, date: formatoFecha(newDate) });
    });
  
    it("should return new State while calling note reducer with ADD_NOTE action", () => {
      const newDate = new Date();
      const newState = {
        title: "tile 1",
        description: "description 1",
        date: newDate,
        key: Date.now(),
      };
      expect(
        ReductorNota(initialState, {
          type: AGREGAR_NOTA,
          payload: newState,
        })
      ).toEqual({
        ...initialState,
        notes: [...initialState.notes, newState],
      });
    });
  });