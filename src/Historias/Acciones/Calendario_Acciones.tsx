import HISTORIA_CONSTANTES from "../Constantes";
const idGenerator = require('uuid/v4');

export const addEvent = (fecha: string, evento: string) => ({
    type: HISTORIA_CONSTANTES.ACTIONS.AGREGAR_EVENTO,
    id: idGenerator(),
    fecha: fecha,
    eventoNombre: evento
})

export const deleteEvent = (index: number) => ({
    type: HISTORIA_CONSTANTES.ACTIONS.BORRAR_EVENTO,
    index: index
})