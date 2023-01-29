import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "components/BaseLayout";

const routers = createBrowserRouter([{ path: "/", element: <BaseLayout /> }]);

export default routers;
