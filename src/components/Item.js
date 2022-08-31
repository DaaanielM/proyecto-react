// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la define el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0, "agotado" si llega a 0)

import { useState } from 'react';

// import { useState } from 'react';

//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
	// useState es un hook que nos permite crear un estado para un componente.

	// El método handleClick debe aumentar el estado de App y restar la cantidad en stock del Item.

	// Llamar stock a props.stock para que el componente Item pueda mostrar la cantidad de stock.

	return <div className='producto'>{/* maquetar Item aquí */}</div>;
}
