import React, {useState} from "react";
import "./AcademicRecord.css"

const AcademicRecord = () =>{
    const color = "green"

    return (
        <div className="record">
            <div>
                <h2>Historia Académica</h2>
                <h2>Ingeníeria de sistemas y computación</h2>
                <b>Estado: Abierto <span style={{color}}>●</span> </b>
                <br/>
                <b>Facultad de Ingeniería, Sede Bogotá</b>
                <br/>
                <div className="small">
                    <h2 className="sm">PAPA</h2>
                </div>
                <div className="small">
                    <h2 className="sm">PAPI</h2>
                </div>
            </div>
            <div className="r2">
                <div className="sr">
                    <h2 className="srt">Materias cursadas</h2>
                </div>
                <div className="sr">
                    <h2 className="srt">Materias pendientes</h2>
                </div>
            </div>

        </div>
    );
}
export default AcademicRecord