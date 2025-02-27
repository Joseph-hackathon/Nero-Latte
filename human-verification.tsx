import { ChevronRight } from "lucide-react"

export default function HumanVerification() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-3xl font-bold text-orange-500">Let's confirm you are human</h1>
        <p className="mb-6 text-sm text-gray-600">
          Complete the security check before continuing. This step verifies that you are not a bot, which helps to
          protect your account and prevent spam.
        </p>
        <button className="mb-6 inline-flex items-center rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
          Begin
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
        <div>
          <select className="rounded border border-gray-300 px-2 py-1 text-sm">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  )
}

