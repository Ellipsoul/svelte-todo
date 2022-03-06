<script>
  import TodoForm from "../components/TodoForm.svelte";
  import Todo from "../components/Todo.svelte";
  import { todos } from "../stores/todoStore";
</script>

<main class="flex flex-col">
  <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
    My To-Do List
  </h1>

  <TodoForm />

  {#each $todos as todo}
  <Todo todo={todo} />
  {/each}
</main>