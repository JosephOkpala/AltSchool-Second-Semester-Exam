import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ marginTop: "2rem" }}>
      <p style={{ marginBottom: "0.2rem" }}>Something went wrong:</p>
      <pre style={{ color: "red", marginBottom: "0.2rem" }}>
        {error.message}
      </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb({ username }) {
  if (username === "bomb") {
    throw new Error("💥 BOOOOOOM 💥");
  }
  return `Hi ${username}`;
}

function ErrorBound() {
  const [username, setUsername] = React.useState("");
  const usernameRef = React.useRef(null);

  return (
    <div className="error-boundary">
      <Helmet>
        <title>Error Boundary</title>
        <meta
          name="description"
          content="A page that show error boundary in action"
        />
        <link rel="canonical" href="/error" />
      </Helmet>
      <label style={{ fontSize: "1.5rem" }}>
        {`Username: `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername("");
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default ErrorBound;
