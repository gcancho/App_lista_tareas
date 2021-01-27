import { v4 as uuidv4 } from 'uuid';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

// Recibe los parametros de la App
const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput=(e)=>{
        cambiarInputTarea(e.target.value)
    }

    // Funcion de enviar del formulario
    const handleSubmit = (e) =>{
        e.preventDefault();
        cambiarTareas([
            // Todas las tareas que ya teniamos anteriormente
            ...tareas,
             {
                 id: uuidv4(),
                 texto: inputTarea,
                 completada: false
             }
        ]
        );
    }

    return (
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={handleInput}
            />
            <button
                type="submit"
                className="formulario-tareas__boton">
                    <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn"/>
            </button>
        </form>
    );
}

export default FormularioTareas;