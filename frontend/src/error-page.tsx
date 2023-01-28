import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="w-full min-h-screen grid place-content-center text-center">
            <h1 className="text-4xl">Oops!</h1>
            <p className="mt-4">Wybacz, coś poszło nie tak.</p>
            <p className="mt-2">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}