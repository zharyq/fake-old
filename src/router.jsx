import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Cheque = lazy(() => import("./pages/cheque"));
const Index = lazy(() => import("./pages/index"));
const History = lazy(() => import("./pages/history"));

function Router() {
  const routes = [
    {
      path: "/",
      element: (
        <Suspense fallback={"loading..."}>
          <Index />
        </Suspense>
      ),
    },
    {
      path: "/cheque",
      element: (
        <Suspense fallback={"loading..."}>
          <Cheque />
        </Suspense>
      ),
    },
    {
      path: "/history",
      element: (
        <Suspense fallback={"loading..."}>
          <History />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return <Route {...route} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
