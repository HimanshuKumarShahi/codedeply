import LoginButton from "../components/auth/login-button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">CodeDeploy</h1>

        <p className="mt-3 text-muted-foreground">
          Deploy your projects like Vercel.
        </p>

        <div className="mt-6">
          <LoginButton />
        </div>
      </div>
    </main>
  );
}