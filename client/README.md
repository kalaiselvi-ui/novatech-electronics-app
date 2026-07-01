# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

//Home
Navbar

Hero Banner

Featured Products

Trending

Categories

Today's Deals

New Arrivals

Top Brands

Newsletter

Footer

//React Skills you'll demonstrate

✅ React Router

✅ TypeScript

✅ Zustand

✅ React Query

✅ Tailwind

✅ Axios

✅ React Hook Form

✅ Zod

✅ Lazy Loading

✅ Code Splitting

✅ Infinite Scroll

✅ Server-side Pagination

✅ Memoization

✅ Virtualization

✅ Protected Routes

✅ Skeleton Loading

✅ Error Boundary

✅ Dark Mode

✅ Responsive Design

//Folder Structure:
src

//components

features

pages

layouts

routes

hooks

api

services

store

types

utils

//Bonus Features
Product comparison
Recently viewed
Wishlist
Coupon system
Order tracking
Notifications
User profile
Address management

//Admin
Products

Categories

Orders

Coupons

Users

Dashboard

//Dashboard

This is what impresses interviewers.

Orders

Revenue

Products

Users

Sales Chart

Top Selling Products

Categories
💻 Laptops
MacBook
Dell
HP
Lenovo
ASUS
📱 Smartphones
iPhone
Samsung
Google Pixel
OnePlus
🎧 Audio
AirPods
Sony Headphones
JBL Speakers
⌚ Smart Watches
Apple Watch
Galaxy Watch
Garmin
🎮 Gaming
PlayStation
Xbox
Controllers
Gaming Mouse
Gaming Keyboard
📷 Cameras
Canon
Sony
Nikon
🖥️ Accessories
Mouse
Keyboard
SSD
Webcam
Monitor

Phase 1 ✅
Navbar
Hero
Categories
Product listing

Status: Almost complete.

Phase 2
Product Details page
Image gallery
Description
Related products
Phase 3
Cart data model
Add to Cart
Quantity
Remove item
Navbar badge

This is where we'll learn Context or Redux.

Phase 4
Cart page
Order summary
Empty cart
Phase 5
Backend integration
Fetch products
API pagination
Loading
Error handling
Phase 6
Authentication
Login
Protected routes
Phase 7
Wishlist
Search
Filters
Sorting
Phase 8
Performance
Lazy loading
Memoization
Code splitting

For your ecommerce project, you'll likely end up using all three:

utils/ → shuffleArray, formatPrice, etc.
hooks/ → usePagination, useDebounce, maybe useLocalStorage.
store/ → cartStore, authStore, wishlistStore.
