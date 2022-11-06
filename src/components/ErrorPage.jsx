import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../styles/error.css";

const ErrorPage = () => {
  const navigateHome = useNavigate();
  return (
    <div className="error-div">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <h1>uh oh, the page you are looking for does not exist !</h1>
      <button onClick={() => navigateHome("/")}>Go home</button>
    </div>
  );
};

export default ErrorPage;
