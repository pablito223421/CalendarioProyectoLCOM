import { GET_FECHA_ACTUAL, 
         SET_DIAS,
         MES_ANTERIOR,
         MES_SIGUIENTE,
         TOGGLE_DETALLE_SB,
         TOGGLE_EVENTOS_SB,
         TOGGLE_NUEVO_EVENTO_SB,
         SET_DETALLE_DIA,
         AGREGAR_FECHA_EVENTO,
         BORRAR_EVENTO,
         SET_EVENTOS,
         EDITAR_EVENTO,
         CAMBIAR_EVENTO_FIELD,
         BORRAR_EVENTO_FIELD } from "./tipos_accion"; 


export const setDiasObj = (diasArr: { visible: boolean; diaDelMes: number; fecha: string; }[]) => ({
  type: SET_DIAS,
  payload: diasArr
});

export const getFechaActualObj = (año: any, mes: any, fecha: any) => ({
  type: GET_FECHA_ACTUAL,
  payload: {
    año,
    mes,
    fecha,
  },
});


export const anteriorMeshObj = (mes: number, año: number) => ({
  type: MES_ANTERIOR,
  payload: {
    mes,
    año
  }
});


export const siguienteMesObj = (mes: number, año: any) => ({
  type: MES_SIGUIENTE,
  payload: {
    mes,
    año
  }
});



export const setDetalleDiaObj = (hoydia: any, eventos: any) => ({
  type: SET_DETALLE_DIA,
  payload: {
    hoydia,
    eventos
  }
});


export const toggleDetalleSidebarObj = (condicion: any) => ({
  type: TOGGLE_DETALLE_SB,
  payload: condicion
});


export const toggleEventosSidebarObj = (condicion: any) => ({
  type: TOGGLE_EVENTOS_SB,
  payload: condicion
});


export const toggleNuevoEventoSidebarObj = (condicion: any) => ({
  type: TOGGLE_NUEVO_EVENTO_SB,
  payload: condicion
});

export const editarEventoSidebarObj = (obj: any) => ({
  type: EDITAR_EVENTO,
  payload: obj
})


export const borrarEventoObj = (id: any) => ({
  type: BORRAR_EVENTO,
  payload: id

});


export const setEventosObj = (eventos: never[]) => ({
  type: SET_EVENTOS,
  payload: eventos

});

export const cambiarEventoField = (name: any, value: any) => ({
  type: CAMBIAR_EVENTO_FIELD,
  payload: {
    name,
    value
  }
})


export const borrarEventoField = () => ({
  type: BORRAR_EVENTO_FIELD ,
})


export const agregarFechaEvento = (fecha: any) => ({
  type: AGREGAR_FECHA_EVENTO,
  payload: fecha
})