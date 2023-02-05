import { Form, redirect, useActionData, Link } from "react-router-dom";
import localforage from "localforage";
import { API_ENDPOINT_BASE_URL } from "../api/config";
import { v4 as uuidv4 } from "uuid";

export async function loader() {
  const username = await localforage.getItem("username");

  if (username) {
    return redirect("/dashboard");
  }

  return {
    username,
  };
}

export async function action({ request }) {
  const formData = await request.formData();

  const originalUrl = formData.get("originalUrl");
  const randomLinkId = uuidv4();

  const response = await fetch(`${API_ENDPOINT_BASE_URL}/links`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      originalUrl,
      urlAlias: randomLinkId,
      owner: {
        id: Math.floor(Math.random() * 10000).toString(),
        username: "mateusz",
      },
    }),
  });

  return {
    originalUrl,
    randomLinkId,
  };
}

export default function IndexPage() {
  const data = useActionData();

  const destUrl = data ? `https://localhost:5173/r/${data.randomLinkId}` : "";

  return (
    <section className="flex items-center flex-1">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            {data ? "Sukces" : "Skróć Link"}
          </span>
        </h1>

        {!data ? (
          <Form method="post">
            <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
              Wprowadź link
            </p>

            <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <input
                name="originalUrl"
                id="originalUrl"
                type="text"
                className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                placeholder="https://bardzo-dlugi-link.com"
              />

              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
              >
                Utwórz
              </button>
            </div>
          </Form>
        ) : (
          <div className="mx-auto text-center space-y-2">
            <p>Twój tymczasowy link do zasobu to:</p>
            <p>
              <Link
                to={`r/${data.randomLinkId}`}
                className="text-blue-500"
                target="_blank"
              >
                {destUrl}
              </Link>
            </p>
            <p>
              <Link to="/">Utwórz nowy link</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
