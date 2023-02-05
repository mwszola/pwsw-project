import { Form, redirect } from "react-router-dom";
import { API_ENDPOINT_BASE_URL } from "../../api/config";

export async function action({ request }) {
  const formData = await request.formData();

  await fetch(`${API_ENDPOINT_BASE_URL}/links`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      originalUrl: formData.get("originalUrl"),
      urlAlias: formData.get("urlAlias"),
      owner: {
        id: Math.floor(Math.random() * 10000).toString(),
        username: "mateusz",
      },
    }),
  });

  return redirect("/dashboard");
}

export default function NewLink() {
  return (
    <div>
      <Form className="w-full max-w-md" method="post">
        <div className="flex justify-center mx-auto">
          <h2 className="text-xl sm:text-xl xl:text-3xl">
            Tworzenie nowego linku
          </h2>
        </div>

        <div className="relative flex items-center mt-6">
          <input
            type="url"
            name="originalUrl"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="https://to-jest-bardzo-dlugi-link..."
          />
        </div>

        <div className="relative flex items-center mt-4">
          <input
            type="text"
            name="urlAlias"
            className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="moj-dokument"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Utwórz
          </button>
        </div>
      </Form>
    </div>
  );
}
