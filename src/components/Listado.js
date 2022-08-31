import React, { useState } from 'react';
import Registros from './data.json';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item';
export default function Listado(props) {
	// Exportar stock a Item para que pueda ser usado por el componente Item.
	// Exportar handleClick a Item para que pueda ser usado por el componente Item.
	// useState es un hook que nos permite crear un estado para un componente.
	const [numero, setNumero] = useState();
	const [count, setCount] = useState(props.cantidad);

	// El método handleClick debe aumentar el estado de App y restar la cantidad en stock del Item.
	function handleClick() {
		setCount(count + 1);
		setNumero(numero - 1);
	}
	return (
		<div className='container'>
			{/* renderizamos los Item aquí */}
			<span>Stock: {numero}</span>
			<span>Producto: {count}</span>
			{Registros.map((item) => {
				return (
					<div key={item.id} className='producto'>
						<h3>{item.producto.nombre}</h3>
						<p>{item.producto.descripcion}</p>
						<h5>En stock: {item.stock}</h5>
						<button onClick={handleClick}>Comprar</button>
					</div>
				);
			})}
		</div>
	);
}
