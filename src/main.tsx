import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { AuthPage } from "./routes/AuthPage.tsx";
import { TodoPage } from "./routes/TodoPage.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";
// import PrivateRoute from "./components/shared/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        {/* <PrivateRoute path="/todo" element={<TodoPage />} /> */}
      </RouterProvider> 
    </Provider>
  </React.StrictMode>
);
