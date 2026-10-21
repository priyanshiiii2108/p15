
import { useRef, useState } from 'react'

function FormInput({ label, name, type, placeholder, autoComplete }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />
    </div>
  )
}

export default function LoginForm() {
  const formRef = useRef(null)
  const [submittedData, setSubmittedData] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(formRef.current)

    const username = formData.get('username')
    const password = formData.get('password')

    setSubmittedData({ username, password })
  }

  function handleReset() {
    formRef.current.reset()
    setSubmittedData(null)
    setShowPassword(false)
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
            🔐
          </div>

          <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your username and password to continue.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <FormInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            autoComplete="username"
          />

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-20 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Reset Form
          </button>
        </form>
      </section>

      {submittedData && (
        <section
          aria-live="polite"
          className="mt-6 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-700">
              ✓
            </span>
            <div>
              <h2 className="font-bold text-slate-900">
                Form Submitted Successfully
              </h2>
              <p className="text-sm text-slate-500">
                Retrieved from the uncontrolled form.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Username
              </p>
              <p className="mt-1 break-words font-medium text-slate-800">
                {submittedData.username}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Password
              </p>
              <p className="mt-1 font-mono text-slate-800">
                {'•'.repeat(submittedData.password.length)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Password retrieved successfully; masked for privacy.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
