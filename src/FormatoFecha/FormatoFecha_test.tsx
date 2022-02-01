import { formatoFecha } from "./FormatoFecha";

describe("common functions", () => {
  it("debe devolver nulo al llamar formato Fecha con nulo", () => {
    const result = formatoFecha(null);

    expect(result).toEqual(null);
  });

  it("debe volver en blanco al llamar formato Fecha con espacio en blanco", () => {
    const result = formatoFecha("");

    expect(result).toEqual("");
  });

  it("debería arrojar un error al llamar al formato Fecha con fecha no válida", () => {
    const result = formatoFecha("a");

    expect(result).toEqual("Fecha Inválida.");
  });

  it("debe devolver una nueva fecha al llamar formato Fecha con fecha válida", () => {
    const result = formatoFecha(new Date());

    expect(result).toEqual("12/23/2020");
  });
});
