import React from "react";
import Header from "@/app/components/Header/Header";

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
	
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	
	return res.json()
}

interface Todos {
	id: number;
	title: string;
}

export default async function page() {
	const todos: Todos[] = await getData();
	const listItems = todos.map(todo =>
		<li key={todo.id}>
			<p>{todo.id} - {todo.title}</p>
		</li>
	);
	
	return (
		<>
			<Header />
			<ul>{listItems}</ul>
		</>
	);
}