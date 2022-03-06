<script>
  import '../tailwind.css';
  import '../app.css';
  import {supabase} from '../supabase';
</script>

<svelte:head>
  <title>Svelte-Kit To-Do!</title>
</svelte:head>
<div class="container mx-auto my-6 max-w-lg">
  <slot></slot>
</div>