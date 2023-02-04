import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-8 py-4 flex align-center justify-between border-b border-b-indigo-500">
        <Link className="text-blue-500 hover:text-blue-600" to="/">
          URL Shortener
        </Link>
        <div className="flex align-center space-x-4">
          <Link className="text-blue-500 hover:text-blue-600" to="/login">
            Zaloguj
          </Link>
          <Link className="text-blue-500 hover:text-blue-600" to="/register">
            Zarejestruj
          </Link>
        </div>
      </header>

      <Outlet />

      <footer className="text-center px-2 py-4">
        <p>URL Shortener</p>
      </footer>
    </div>
  );
}
