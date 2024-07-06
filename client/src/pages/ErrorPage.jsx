// ErrorPage.jsx
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <p>Error: {error?.message || "Unknown error"}</p>
    </div>
  );
};

export default ErrorPage;
