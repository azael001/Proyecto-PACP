import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
    </div>
  );
}
export default ErrorPage