import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
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
                tareas.length > 0 ? tareas.map((tarea,) => {
                    // Tiene como propiedad 'tarea' para pasarsela al componente 'Tarea'
                    if (mostrarCompletadas) {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            toogleCompletada={toogleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />;
                    // Si la tarea no esta completada, la devolvemos
                    } else if (!tarea.completada) {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            toogleCompletada={toogleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />;
                    }
                    // Si ya esta completada no la devolvemos
                    return;
                })
                    :
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>}
        </ul>
    );
}

export default ListaTareas;