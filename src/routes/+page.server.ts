import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabase.from("tableName").select();
  return { objectName: data ?? [], props: {} };
}