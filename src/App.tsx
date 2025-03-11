import { BrowserRouter as Router, Link } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                Cognify
              </span>
            </div>
            <Link
              to="/login"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            >
              Sign In
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Learning Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master AI, machine learning, and data science with our interactive courses and personalized tutoring.
            </p>
            <div className="space-x-4">
              <Link
                to="/login"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-500"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}
