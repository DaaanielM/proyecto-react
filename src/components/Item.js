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
export default function Item({ item, changeCantidad }) {
	// useState es un hook que nos permite crear un estado para un componente.
	const [stock, changeStock] = useState(item.stock);
	// El método handleClick debe aumentar el estado de App y restar la cantidad en stock del Item.
	const handleClick = () => {
		changeStock(stock - 1);
		changeCantidad();
	};
	// Llamar stock a props.stock para que el componente Item pueda mostrar la cantidad de stock.
	return (
		<>
			{/* maquetar Item aquí */}
			{/*Aquí se muestra el nombre, la descripcion y el stock*/}
			{/*Esta información la estamos trayendo mediante props de Listado*/}

			<div key={item.id} className='producto'>
				<h3>{item.producto.nombre}</h3>
				<p>{item.producto.descripcion}</p>
				<h5>
					En stock:
					{stock > 0 ? stock : <span>agotado</span>}
				</h5>
				{/* El disabled, deshabilita el boton y button recibe la función handleClick que restara el stock */}
				<button disabled={stock === 0} onClick={handleClick}>
					{stock > 0 ? (
						<span className='stock'>comprar</span>
					) : (
						<span className='sin-stock'>sin stock</span>
					)}
				</button>
			</div>
		</>
	);
}
