import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const FeaturedProducts = lazy(() => import("./pages/FeaturedProducts.tsx"));
const Products = lazy(() => import("./pages/Products.tsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.tsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/featured-products" element={<FeaturedProducts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
