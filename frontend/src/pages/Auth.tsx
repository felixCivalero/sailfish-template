// src/pages/Auth.tsx
import { supabase } from "@/lib/supabase";

export default function Auth() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
