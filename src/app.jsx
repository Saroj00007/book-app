import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import Error from "./components/Error";
import { Suspense } from "react";
import Body from "./components/Body";
import Liststore from "./Redux/Listsotre";
import { Provider } from "react-redux";

const Authors = lazy(() => {
  return import("./components/Authors");
});
const AboutUs = lazy(() => {
  return import("./components/AboutUs");
});
const Books = lazy(() => {
  return import("./components/Books");
});
const Readlist = lazy(() => {
  return import("./components/Readlist");
});
const Contact = lazy(() => {
  return import("./components/Contact");
});
const BookDetails = lazy(() => {
  return import("./components/BookDetails");
});
const GenreBooks = lazy(() => {
  return import("./components/GenreBooks");
});

const Applayout = () => {
  return (
    <div>
      <Provider store={Liststore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/Aboutus",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/Authors",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <Authors />
          </Suspense>
        ),
      },
      {
        path: "/Readlist",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <Readlist />
          </Suspense>
        ),
      },
      {
        path: "/Books",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <Books />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <Contact />
          </Suspense>
        ),
      },

      {
        path: "/Book-details/:bookname",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <BookDetails />
          </Suspense>
        ),
      },
      {
        path: "/Genre/:genre",
        element: (
          <Suspense fallback={<h1 className="text-3xl"> loading ..</h1>}>
            {" "}
            <GenreBooks />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
