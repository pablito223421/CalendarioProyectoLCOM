import * as React from 'react';

interface iEvento {
    id: string;
    fecha: string;
    eventoNombre: string;
}

export default class Eventos extends React.Component<{ events: iEvento[], selectedFecha:string }, {}> {
    getDayName = (dayIndex:number) => {
        switch(dayIndex) {
            case 0: return 'Domingo'
            case 1: return 'Lunes'
            case 2: return 'Martes'
            case 3: return 'Miércoles'
            case 4: return 'Jueves'
            case 5: return 'Viernes'
            case 6: return 'Sabado'
        }
    }
    render() {
        let events,        
        selectedDate = this.props.selectedFecha;
        if(this.props.events) {
            // eslint-disable-next-line array-callback-return
            events = this.props.events.map((event:iEvento, i:number) => {
                if(selectedDate !== '' && event.fecha === selectedDate) {
                    let date = new Date(event.fecha);
                    return(
                        <div key={i} className="flex align-center event">
                            <div className="flex flex-column event-date">
                                <p>{this.getDayName(date.getDay())}</p>
                                <p>{date.getDate()}</p>
                            </div>
                            <div>{event.eventoNombre}</div>
                        </div>
                    ) 
                }
            });
        }
        return(
            <div className="">
                {events}
            </div>
        );
    }
}