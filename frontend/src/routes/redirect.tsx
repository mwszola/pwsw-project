import { useLoaderData } from "react-router-dom";
import { API_ENDPOINT_BASE_URL } from "../api/config";
import { ApiLink } from "../api/types";
import { useEffect } from "react";

export async function loader({ params }) {
  const response = await fetch(`${API_ENDPOINT_BASE_URL}/links`);

  const allLinks: ApiLink[] = await response.json();

  const link = allLinks.find((link) => link.urlAlias === params.linkId);

  return link ?? null;
}

export default function RedirectPage() {
  const link = useLoaderData();

  useEffect(() => {
    if (link) {
      window.location.href = link.originalUrl;
    }
  }, [link]);

  return <p>Redirecting...</p>;
}
