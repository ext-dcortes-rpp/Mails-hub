import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para el hub VISION.
 *
 * Variables de entorno necesarias:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 *
 * Estas se configuran:
 *   - Localmente: en el archivo .env.local
 *   - En producción: en el dashboard de Vercel → Settings → Environment Variables
 *
 * En el hello world todavía no se usa, pero queda listo para la fase 3
 * cuando guardemos plantillas configuradas por usuarios.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isSupabaseConfigured = () => supabase !== null;
