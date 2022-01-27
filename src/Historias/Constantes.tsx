const HISTORIA_CONSTANTES = {
    ACTIONS: {
        GET_EVENTOS: 'GET_EVENTOS',
        AGREGAR_EVENTO: 'AGREGAR_EVENTO',
        BORRAR_EVENTO: 'BORRAR_EVENTO'
    },

    initialState: {
        //events: Array()
        events: [
            {
                id: '',
                fecha: '1/1/2018',
                eventoNombre: 'Test event from store'
            },{
                id: '',
                fecha: '1/1/2018',
                eventoNombre: 'Test event from store2'
            },{
                id: '',
                fecha: '1/2/2018',
                eventoNombre: 'Test event from store 1234'
            },{
                id: '',
                fecha: '2/1/2018',
                eventoNombre: 'Test event from store3'
            },{
                id: '',
                fecha: '2/10/2018',
                eventoNombre: 'Test event from store4'
            }
        ]
    } 
}

export default HISTORIA_CONSTANTES;