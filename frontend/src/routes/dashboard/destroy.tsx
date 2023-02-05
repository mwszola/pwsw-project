import { API_ENDPOINT_BASE_URL } from "../../api/config";
import { redirect } from "react-router-dom";

export async function action({ params }) {
  const response = await fetch(
    `${API_ENDPOINT_BASE_URL}/links/${params.linkId}`,
    {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw response;
  }

  return redirect("/dashboard");
}
