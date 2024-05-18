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
	title: string;
}

export default async function page() {
	const todos: Todos[] = await getData();
	
	return(
		<>
			<Header />
			{todos.map(todo => <p>{todo.title}</p>)}
		</>
	);
}