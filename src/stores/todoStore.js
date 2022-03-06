import { writable } from 'svelte/store';
import { supabase } from '../supabase';

// Initialise empty to-do list
export const todos = writable([]);

// Load the todos from supabase
export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();
	if (error) return console.error(error);
	todos.set(data);
};

// Add a new todo to the list
export const addTodo = async (text, user_id) => {
	// Insert new todo into supabase table
	const { data, error } = await supabase
		.from('todos')
		.insert([{ text, user_id, completed: false }]);
	if (error) return console.error(error);
	// Update the local todo list if there is no error
	todos.update((cur) => [...cur, data[0]]);
};

// Delete a todo from the list by id
export const deleteTodo = async (id) => {
	// Delete todo from supabase table
	const { error } = await supabase.from('todos').delete().match({ id });
	if (error) return console.error(error);
	// Update the local todo list if there is no error
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

// Change the completed status of a todo by id
export const toggleTodoCompleted = async (id, currentState) => {
	// Update todo in supabase table
	const { error } = await supabase.from('todos').update({ completed: !currentState }).match({ id });
	if (error) return console.error(error);
	// Update the local todo list if there is no error
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
