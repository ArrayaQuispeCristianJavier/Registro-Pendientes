import React, { useState } from "react";
function ListaDeNotas() {
    //Definimos una estructura del objeto de la nota
    const nota = {
        titulo: "",
        descripcion: "",
        estado: false
    }
    //Almacenamiento de la lista de notas pendinte
    const [pendiente, setPendiente] = useState([]);

    //Estado para almacenar la nota que se esta ingresando
    const [newNota, setNewNota] = useState(nota);

    //Agregar un pendiente
    const agregar = () => {
        //Si no se ingresa ninguna pendiente osea contiene algun texto
        //Devuelve verdadero si el elemento de newNotas esta en el arreglo de pendiente
        //se le pone el "!" para indicar que si newNota no esta pendiente sera verdadero  pero en caso contrario  seria falso
        //Se agrega includes para verificar si esta presente en el arreglo, es un booleano
        if (newNota !== "" && !pendiente.includes(newNota)) {
            setPendiente([...pendiente, newNota]);//... es como hacer una copia en arrays            
            //Establece el estado de la nota a verdadero ya que en objeto por defecto lo tenemos como false
            setNewNota({... nota, estado : true})
            console.log(newNota.estado);
            console.log("Se registro una tarea");//Verificacion del ingreso de una tarea pendiente
            console.log(pendiente);
            
        }
        setNewNota("");//Limpia el input, osea todo vuelve por defecto
    }


    //Funcion para eliminar un pendiente
    const eliminar = (notaToDelete) => {
        //Usamo la funcion filter para crear una nueva lista de pendiente con los elemento que cumplen la condicion
        
        setPendiente(pendiente.filter(nota => nota !== notaToDelete))
    }

    return (
        <>
            <h1>Lista de Pendientes</h1>
            <label>Escribe algun pendiente</label><br></br>
            <input type="text" onChange={e => setNewNota(e.target.value)}></input><br></br>
            <button type="button" onClick={agregar}>Guardar pendiente</button>
            <ul>
                {/* Cuando se hace click en eliminar la lista item se llama a la funcion(item), en este caso item = notaToDelete 
                Cualquiero nota que pongamos seria igual a {item} y eliminar que tiene notaToDelete tendria al elemento que introducimos y esta como eliminar(item)
                eliminar (notaToDelete) = eliminar(item)*/}
                {pendiente.map(item => <li>{item}<button onClick={() => eliminar(item)}>eliminar</button></li>)}
            </ul>
        </>
    );
}
export default ListaDeNotas;