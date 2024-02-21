import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/root";
import HomePage from "./pages/homepage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [{ path: "/", index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
