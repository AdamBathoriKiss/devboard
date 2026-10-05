import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorPage(): React.JSX.Element{
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
    return <h1>Hibakód: {error.status} – {error.statusText}</h1>;
  }

  if (error instanceof Error) {
    return <h1>Váratlan hiba: {error.message}</h1>;
  }

  return <h1>Ismeretlen hiba történt</h1>;
}