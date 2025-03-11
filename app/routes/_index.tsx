import { useEffect, useState } from "react";

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center pt-10 text-gray-900 dark:text-gray-100">
        Welcome to the Login Page
      </h1>
      <div className="text-center mt-4">
        <a 
          href="/login"
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
