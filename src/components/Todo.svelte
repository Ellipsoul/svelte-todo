<script>
  import { deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
  export let todo;
</script>

<!-- List item for tood -->
<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-1 py-2 px-4">
  <!-- Checkbox for whether the todo has been completed -->
  <input
    name="completed"
    type="checkbox"
    checked={todo.completed}
    on:change={() => toggleTodoCompleted(todo.id)}
    class="mr-2 h-5 w-5"
  />
  <!-- Text of the todo -->
  <span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
    {todo.text}
  </span>
  <!-- Button to delete the todo -->
  <button
    type="button"
    class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none"
    on:click={() => deleteTodo(todo.id)}>
    Delete
  </button>
</li>