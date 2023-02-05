import localforage from "localforage";
import { redirect } from "react-router-dom";

export async function action() {
  await localforage.removeItem("username");

  return redirect("/login");
}
