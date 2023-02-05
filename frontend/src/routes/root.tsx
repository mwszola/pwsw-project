import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import localforage from "localforage";

export async function loader() {
  const username = await localforage.getItem("username");

  return {
    username,
    isLoggedIn: !!username,
  };
}

export default function Root() {
  const { isLoggedIn, username } = useLoaderData();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-8 py-4 flex align-center justify-between border-b border-b-indigo-500">
        <Link className="text-blue-500 hover:text-blue-600" to="/">
          URL Shortener
        </Link>
        <div className="flex align-center space-x-4">
          {isLoggedIn ? (
            <>
              <p>Witaj, {username}</p>
              <Form action="logout" method="post">
                <button type="submit">Wyloguj</button>
              </Form>
            </>
          ) : (
            <>
              <Link className="text-blue-500 hover:text-blue-600" to="/login">
                Zaloguj
              </Link>
              <Link
                className="text-blue-500 hover:text-blue-600"
                to="/register"
              >
                Zarejestruj
              </Link>
            </>
          )}
        </div>
      </header>

      <Outlet />

      <footer className="text-center px-2 py-4">
        <p>URL Shortener</p>
      </footer>
    </div>
  );
}
