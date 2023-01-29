import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "components/BaseLayout";
import MenuOne from "pages/menu1";
import MenuSub1 from "pages/menu2/sub-menu21";
import MenuSub2 from "pages/menu2/sub-menu22";
import MenuThree from "pages/menu3";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <MenuOne /> },
      { path: "/menu1", element: <MenuOne /> },
      { path: "/menu2-1", element: <MenuSub1 /> },
      { path: "/menu2-1/add", element: <MenuSub1 /> },
      { path: "/menu2-2", element: <MenuSub2 /> },
      { path: "/menu3", element: <MenuThree /> },
    ],
  },
]);

export default routers;
