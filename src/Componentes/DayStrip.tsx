import * as React from "react";

export default class DayStrip extends React.Component<{ diaNombre:string[] }, {}> {
    render(){
        let dias = this.props.diaNombre.map((day:string, i:number) => {
            return <div key={i} className="r-cell">{day}</div>
        });
        return(
            <div className="flex day-strip">
                {dias}
            </div>
        );
    }
}