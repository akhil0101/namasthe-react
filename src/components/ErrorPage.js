import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: 24 }}>
      <h1>Something went wrong</h1>
      <p>We couldn't process your request.</p>
      {error && (
        <pre style={{ background: "#f7f7f7", padding: 12, overflow: "auto" }}>
          {String(error?.status || "")}{" "}
          {String(error?.statusText || error?.message || "")}
        </pre>
      )}
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
