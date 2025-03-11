import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-light.png" 
              alt="Logo" 
              className="h-8 w-auto dark:hidden"
            />
            <img 
              src="/logo-dark.png" 
              alt="Logo" 
              className="h-8 w-auto hidden dark:block"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Simplify Your Workflow with Cognify
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            An intuitive platform that helps you manage projects, collaborate with teams, and achieve your goals faster.
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Fast Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built for speed with modern technologies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Secure Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security for your data
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Intuitive Interface
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designed for ease of use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Cognify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
