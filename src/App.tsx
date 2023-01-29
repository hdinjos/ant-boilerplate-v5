import React, { useState } from "react";

import "./assets/styles/layout.css";

import { RouterProvider } from "react-router-dom";
import routers from "./routers";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
