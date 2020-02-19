import React from "react";

export const Card = (props) => {

    return(
        <section>
            <h2> Nombre: {props.name} </h2>
            <p> Carrera: {props.career} </p>
            <p> Correo: {props.email} </p>

      </section>
    );
}