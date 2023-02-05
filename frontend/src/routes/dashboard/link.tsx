import { API_ENDPOINT_BASE_URL } from "../../api/config";
import { ApiLink } from "../../api/types";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`${API_ENDPOINT_BASE_URL}/links`);

  const allLinks: ApiLink[] = await response.json();

  const link = allLinks.find((link) => String(link.id) === params.linkId);

  return link ?? null;
}

export default function LinkView() {
  const data = useLoaderData();

  const destUrl = `http://localhost:5173/r/${data.urlAlias}`;

  console.log("data", data);
  return (
    <div>
      <h1 className="text-2xl">Podgląd: {data.urlAlias}</h1>

      <div className="mt-16">
        <p>
          Adres źródłowy:{" "}
          <a className="text-blue-500" href={data.originalUrl} target="_blank">
            {data.originalUrl}
          </a>
        </p>
        <p>
          Adres docelowy:{" "}
          <a className="text-blue-500" href={destUrl} target="_blank">
            {destUrl}
          </a>
        </p>
      </div>

      <Form method="post" action="destroy" className="mt-16">
        <button
          type="submit"
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
        >
          Usuń
        </button>
      </Form>
    </div>
  );
}
