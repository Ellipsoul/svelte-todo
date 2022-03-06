<script>
  import {addTodo} from "../stores/todoStore";
  let newTodo = '';  // 2-way bound variable for new todo

  const handleSubmit = () => {
    if (newTodo.length === 0) return;
    addTodo(newTodo);
    newTodo = '';
  };
</script>

<form
  class="flex flex-col gap-y-2 pb-5"
  on:submit|preventDefault={handleSubmit}
>
  <div class="flex flex-col gap-y-2">
    <label for="todo" class="font-bold mb-2 text-gray-800"></label>
    <!-- bind: sets up 2-way binding -->
    <input
      bind:value={newTodo}
      class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none rounded-lg"
      type="text"
      name="todo"
      placeholder="What needs to be done?">
  </div>
  <button
    type="submit"
    class="w-full rounded shadow-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
    Add Task
  </button>
</form>