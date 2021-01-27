import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
    return (
        <ul className="lista-tareas">
            {
                tareas.length > 0 ?
                    tareas.map((tarea) => {
                        // Tiene como propiedad 'tarea' para pasarsela al componente 'Tarea'
                        return <Tarea 
                            key={tarea.id} 
                            tarea={tarea}/>;
                    })
                    :
                    <div className="lista-tareas__mensaje">No hay tareas agregadas</div>}
        </ul>
    );
}

export default ListaTareas;