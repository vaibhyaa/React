/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ltxezzmexxqdbmeonwrn.supabase.co";
const supabaseKey = "sb_publishable_Mwvs20Mgbwfr4oig7J6p2g_xVbtnuhk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
