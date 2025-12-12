import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import UseContext from "./src/utils/userContext";
import { lazy, Suspense, useState, useEffect } from "react";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import NotFound from "./src/components/NotFound";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

/*
chunking
code splitting
dynamic bundling

making the app file in smaller chunks 
*/
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername("akhil__");
  }, []);
  return (
    <Provider store={appStore}>
      <UseContext.Provider value={{ loggedInUser: "" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UseContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1> Loading........</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
      { path: "cart", element: <Cart /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
