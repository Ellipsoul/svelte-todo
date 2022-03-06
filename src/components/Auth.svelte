<script>
  import { supabase } from "../supabase";

  let loading = false;
  let email;

  // Attempt to log in with email
  const handleLogin = async () => {
    try {
      // By default Supabase uses email login with a magic link
      loading = true;
      const {error} = await supabase.auth.signIn({email});
      if (error) throw error;
      alert("Check your email for a magic login link!")
    } catch (error) {
      console.log(error);
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  }
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
  Log In
</h1>
<p class="text-center mt-2">Sign in with a magic link using your email</p>

<!-- Main form -->
<form on:submit|preventDefault={handleLogin}>
  <!-- Field for entering a valid email address -->
  <div class="flex flex-col text-sm mb-2">
    <label for="email" class="font-bold mb-2 text-gray-800">Email</label>
    <input
      name="email"
      type="email"
      placeholder="Your email"
      bind:value={email}
      class="appearance-none shadow-sm border border-gray-200
        p-2 focus:outline-none focus:border-gray-500 rounded-lg"
    >
  </div>
  <!-- Log In Button -->
  <button
    type="submit"
    class="w-full shadow-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
    disabled={loading}
  >
    Log In
  </button>
</form>