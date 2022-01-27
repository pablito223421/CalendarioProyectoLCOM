import * as React from "react";

interface HeaderProps {
    mes:number;
    anio: number;
    mesNombre: string[];
    onPrevClick: ()=>void;
    onNextClick: ()=>void;
}
export default class Header extends React.Component<HeaderProps, {}> {
    render(){
        return(
            <div className="flex space-between header">
                <i className="fa fa-chevron-left" onClick={() => this.props.onPrevClick() }></i>
                { this.props.mesNombre[this.props.mes] } - { this.props.anio}
                <i className="fa fa-chevron-right" onClick={() => this.props.onNextClick() }></i>
            </div>
        );
    }
}