import { useRouteError } from "react-router-dom";
import MenuAll from '../components/MenuAll';
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
     <MenuAll/>
    </div>
  );
}
export default ErrorPage