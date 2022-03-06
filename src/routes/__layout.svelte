<script>
  import '../tailwind.css';
  import { supabase } from '../supabase';
  import { user } from "../stores/authStore"
  import Auth from '../components/Auth.svelte';
  import Navbar from '../components/Navbar.svelte';
  import { loadTodos } from '../stores/todoStore';

  // Update the user in the store with the user from supabase
  user.set(supabase.auth.user())
  // Detect changes on the user status
  supabase.auth.onAuthStateChange((_, session) => {
    // If we have a user session, load the todos
    user.set(session?.user);
    if (session?.user) {
      loadTodos();
    }
  })

</script>

<svelte:head>
  <title>Svelte-Kit To-Do</title>
</svelte:head>
<div class="container mx-auto my-6 max-w-lg">
  {#if $user}
    <Navbar />
    <slot></slot>
  {:else}
    <Auth />
  {/if}
</div>