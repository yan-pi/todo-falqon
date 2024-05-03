import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="rounded-2xl overflow-hidden">
              <img src="src/assets/falqon.jpeg" alt="Falqon Logo" />
            </div>
            <span className="text-xl font-bold">Sign in</span>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="name@example.com" required type="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}