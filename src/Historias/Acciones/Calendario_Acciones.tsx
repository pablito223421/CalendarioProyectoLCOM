import HISTORIA_CONSTANTES from "../Constantes";

export const addEvent = (fecha: string, evento: string , id:number) => ({
    type: HISTORIA_CONSTANTES.ACTIONS.AGREGAR_EVENTO,
    id: id,
    fecha: fecha,
    eventoNombre: evento
})

export const deleteEvent = (index: number) => ({
    type: HISTORIA_CONSTANTES.ACTIONS.BORRAR_EVENTO,
    index: index
})