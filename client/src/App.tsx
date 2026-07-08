import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import CartPage from "./pages/CartPage.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import AdminLayout from "./layout/AdminLayout.tsx";
import Categories from "./pages/admin/Categories.tsx";
import Orders from "./pages/admin/Orders.tsx";
import MyProfile from "./pages/MyProfile.tsx";
import MyOrders from "./pages/Orders.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const FeaturedProducts = lazy(() => import("./pages/FeaturedProducts.tsx"));
const Products = lazy(() => import("./pages/Products.tsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Checkout = lazy(() => import("./pages/Checkout.tsx"));
const AdminProducts = lazy(() => import("./pages/admin/Products.tsx"));
const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/featured-products" element={<FeaturedProducts />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/orders" element={<MyOrders />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<Categories />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
