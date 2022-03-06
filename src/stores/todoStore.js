import { writable } from 'svelte/store';

// Initialise empty to-do list
export const todos = writable([]);

// Add a new todo to the list
export const addTodo = (text) => {
	todos.update((cur) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

// Delete a todo from the list by id
export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

// Change the completed status of a todo by id
export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				todos[i].completed = !todos[i].completed;
				break;
			}
		}
		return todos;
	});
};
