import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const Home = lazy(() => import("./pages/Home.js"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
