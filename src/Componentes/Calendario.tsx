/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import Header from "./Header";
import DayStrip from "./DayStrip";
import Fecha_Mes from "./Fechas_Mes";
import Eventos from "./Eventos";
import { connect } from "react-redux";


interface CalenderState {
    dayNames: string[];
    monthNames: string[];
    monthNamesFull: string[];
    year: number;
    month: number;
    selectedYear: number;
    selectedMonth: number;
    selectedDt: Date;
    selectedDate: number;
    selectedDateString:string;
    startDay: number;
    weekNumbers: boolean;
    firstOfMonth: Date;
    daysInMonth: number;
    minDate: Date;
    disablePast:boolean;
}

interface CalenderProps {
    events: iEvent[]
}

interface iEvent {
    id: string;
    date: string;
    eventName: string;
}

class Calendario extends React.Component<CalenderProps, CalenderState> {
    onPrevClick:any;
    onNextClick:any;
    selectDate:any;
    onSelectDate:any;
    events:iEvent[];
    
    calc: (year:number,month:number) => { firstOfMonth:Date, daysInMonth: number }

    constructor(props:any){
        super(props);
        this.onPrevClick = this._onPrevClick.bind(this);
        this.onNextClick = this._onNextClick.bind(this);
        this.calc = this._calculate.bind(this);
        this.onSelectDate = this._onSelectDate.bind(this);
        this.events = [];
        this.state = this.getInitialState();
    }    

    private _calculate = (year: number, month: number) => {
        return {
            firstOfMonth: new Date(year, month, 1),
            daysInMonth: new Date(year, month + 1, 0).getDate(),
            year: year,
            month: month,
            selectedMonth: month,
            selectedDateString: (month + 1) + '/1/' + year
        };
    }

    private getInitialState = () => {
        let date = new Date(),
        daysInMonth = (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();        
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDate: date.getDate(),
            selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            startDay: 1,
            weekNumbers: false,
            minDate: new Date(2100, 0, 1),
            disablePast: true,
            dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstOfMonth: new Date(date.getFullYear(), date.getMonth(), 1),
            daysInMonth: daysInMonth,
            selectedDateString: (date.getMonth() + 1) + '/1/'+ date.getFullYear()
        }
    }

    private _onPrevClick = () => {
        let state:any = {};
        if (this.state.month > 0) {
            state.month = this.state.month - 1;
            state.year = this.state.year;
        } else {
            state.month = 11;
            state.year = this.state.year - 1;
        }
        this.setState(this.calc(state.year, state.month));
    }

    private _onNextClick = () => {
        let state:any = {};
        if (this.state.month < 11) {
            state.month = this.state.month + 1;
            state.year = this.state.year;
        } else {
            state.month = 0;
            state.year = this.state.year + 1;
        }
        this.setState(this.calc(state.year, state.month));
    }

    private _onSelectDate = (year: number, month:number, date:number) => {        
        this.setState({
            selectedYear: year,
            selectedMonth: month,
            selectedDate: date,
            selectedDt: new Date(year, month, date),
            selectedDateString:  (month + 1) +'/'+ date +'/'+ year
        });
    }

    private _getCurrentMonthEventDates = (year: number, month:number) => {
        

        return [0];
    }
    
    render(){      
        return(
            <div>
                <div className="calender">
                    <Header mesNombre={ this.state.monthNamesFull } mes={ this.state.month } anio={ this.state.year } onPrevClick={ this.onPrevClick } onNextClick={ this.onNextClick }/>
                    <DayStrip diaNombre={ this.state.dayNames }/>
                    
                    <Fecha_Mes  weekNumbers={this.state.weekNumbers} minDate={ this.state.minDate } disablePast={ this.state.disablePast } onSelectDate={ this.onSelectDate } month={ this.state.month } year={ this.state.year } daysInMonth={this.state.daysInMonth} firstOfMonth={this.state.firstOfMonth} startDay={this.state.startDay} />
                </div>
                <Eventos events={ this.props.events } selectedDate={this.state.selectedDateString}/>                
            </div>
        )
    }
}


function mapStateToProps(state:any) {
    return {
        events: state.events
    }
}

const RtCalendario = connect(mapStateToProps)(Calendario);
export default RtCalendario;