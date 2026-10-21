
import LoginForm from "./Component/LoginForm";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-50 via-white to-violet-100">
      <header className="border-b border-indigo-100 bg-white/80 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
            🔑
          </div>
          <span className="text-xl font-extrabold text-slate-900">
            SecureLogin
          </span>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-5 py-12">
        <LoginForm />
      </div>

      <footer className="px-6 py-5 text-center text-sm text-slate-500">
        React Uncontrolled Form · Built with Tailwind CSS
      </footer>
    </main>
  )
}
