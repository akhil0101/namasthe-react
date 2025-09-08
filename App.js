import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from './src/components/Contact';
import NotFound from "./src/components/NotFound";
import ErrorPage from "./src/components/ErrorPage";

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Body/> },
      { path: 'about', element: <About/> },
      { path: 'contact',element: <Contact/>},
      { path: '*', element: <NotFound/> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);