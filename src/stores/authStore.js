import { writable } from 'svelte/store';

// Tracks the authenticated user in supabase
export const user = writable(false);
