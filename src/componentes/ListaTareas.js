import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas }) => {
    // Recibe id
    const toogleCompletada = (id) => {
        console.log('Estamos editando la tarea con id,', id);
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                // Devuelve la tarea con los mismos valores que ya teniamos pero el valor de completada lo invierte
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                // Devuelve la tarea con los mismos valores que ya teniamos pero el valor de completada lo invierte
                return { ...tarea, texto: nuevoTexto }
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
            }
            return;
        }));
    }

    return (
        <ul className="lista-tareas">
            {
                tareas.length > 0 ?
                    tareas.map((tarea,) => {
                        // Tiene como propiedad 'tarea' para pasarsela al componente 'Tarea'
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            toogleCompletada={toogleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />;
                    })
                    :
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>}
        </ul>
    );
}

export default ListaTareas;