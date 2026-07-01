import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Product = lazy(() => import("./pages/Product.tsx"));
const FeaturedProducts = lazy(() => import("./pages/FeaturedProducts.tsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/featured-products" element={<FeaturedProducts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
