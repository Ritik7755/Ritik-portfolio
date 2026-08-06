// =========================================
// SUPABASE CONFIGURATION
// =========================================

const SUPABASE_URL = "https://vtrryqnnkiteqcicrvjk.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0cnJ5cW5ua2l0ZXFjaWNydmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzIzNzIsImV4cCI6MjEwMTYwODM3Mn0.K9Z-hHbp9taxiQR8Hd2eduifV6plsA5FEaSOf7mYLm8";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("✅ Supabase Connected");