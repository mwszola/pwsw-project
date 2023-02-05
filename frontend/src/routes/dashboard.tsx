import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { API_ENDPOINT_BASE_URL } from "../api/config";
import type { ApiLink } from "../api/types";

export async function loader() {
  const response = await fetch(`${API_ENDPOINT_BASE_URL}/links`);

  const data: ApiLink[] = await response.json();

  return data;
}

export default function Dashboard() {
  const allLinks = useLoaderData();

  return (
    <main className="flex-1 flex">
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800 dark:text-white">
                Linki
              </h2>

              <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-4 -mx-3 space-y-3 ">
              {allLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`link/${link.id}`}
                  className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span>{link.urlAlias}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <div>
        <Outlet />
      </div>
    </main>
  );
}
