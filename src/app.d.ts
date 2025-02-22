// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { SupabaseClient } from "@supabase/supabase-js";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			supabase: SupabaseClient
			
		}
	}
}

export {};

