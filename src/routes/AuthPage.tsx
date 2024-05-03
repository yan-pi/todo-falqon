import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../store/userSlice";

export function AuthPage() {
  const [password, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar o comportamento padrão do formulário

    if (password === "falqon") {
      // Substitua 'senhaCorreta' pela senha correta
      dispatch(setPassword(password));
      window.location.href = "/todo";
      console.log("User authenticated successfully");
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-2xl overflow-hidden">
              <img src="src/assets/falqon.jpeg" alt="Falqon Logo" />
            </div>
            <span className="text-xl font-bold">Sign in</span>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <Label htmlFor="user">User</Label>
            <Input id="user" placeholder="falqon" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
