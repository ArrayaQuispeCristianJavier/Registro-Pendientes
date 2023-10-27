import React, { useState } from "react";
function ListaDeNotas() {

    const nota = {
        descripcion: "",
        estado: true
    }

    const [pendiente, setPendiente] = useState([]);

    //Lo que se va juntando
    const [newNota, setNewNota] = useState(nota);


    //Agregar un pendiente
    const agregar = () => {
        //Si no se ingresa ninguna pendiente osea contiene algun texto
        if (newNota !== "" && pendiente != newNota) {
            setPendiente([...pendiente, newNota]);//... es como hacer una copia en arrays            
            console.log(nota.estado);
            console.log("Se registro una tarea");//Verificacion del ingreso de una tarea pendiente
            console.log(pendiente);
        }
    }


    //Funcion para eliminar un pendiente
    function eliminar(notaToDelete) {
        setPendiente(pendiente.filter(nota => nota !== notaToDelete))
    }

    return (
        <>
            <h1>Lista de Pendientes</h1>
            <label>Escribe algun pendiente</label><br></br>
            <input type="text" onChange={e => setNewNota(e.target.value)}></input>
            <button type="button" onClick={agregar}>Guardar pendiente</button>
            <ul>
            {pendiente.map(item => <li key={item}>{item}<button onClick={() => eliminar(item)}>eliminar</button></li>)}
            </ul>
        </>
    );
}
export default ListaDeNotas;