import { useMemo, useRef } from "react";
import CategoryCard from "../components/CategoryCard.tsx";
import HeroSlider from "../components/HeroSlider.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { heroSlides } from "../data/category.ts";
import Pagination from "../components/Pagination.tsx";
import { shuffleArray } from "../utils/shuffle.ts";
import { usePagination } from "../hooks/usePagination.ts";
import FeaturedProduct from "../components/FeaturedProduct.tsx";
import SliderArrow from "../utils/SliderArrow.tsx";
import { useProducts } from "../hooks/useProducts.ts";
import { useCategories } from "../hooks/useCategories.ts";

const Home = () => {
  const { data: products = [], isLoading } = useProducts();
  const { data: categories = [] } = useCategories();
  // const [shuffledProducts] = useState(() => shuffleArray(products));
  const shuffledProducts = useMemo(() => {
    return shuffleArray(products);
  }, [products]);

  const featuredProducts = shuffledProducts
    .filter((product) => product.isFeatured)
    .slice(0, 8);

  const {
    currentItems: displayedProducts,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination({ data: shuffledProducts, itemsPerPage: 15 });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemPerPage = 15;
  // const [mixedProducts] = useState(() => shuffleArray(productList));

  // const indexOfLastProduct = currentPage * itemPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - itemPerPage;
  // // 4. Extract only the products for the current page
  // const currentProducts = mixedProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct,
  // );
  // // 5. Calculate total pages dynamically based on the dataset size
  // const totalPages = Math.ceil(mixedProducts.length / itemPerPage);

  // // 6. Handle page switching and scroll back up smoothly
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  //   window.scrollTo({ top: 500, behavior: "smooth" });
  // };
  return (
    <div>
      {/*Hero Banner section*/}
      <HeroSlider slides={heroSlides} />

      {/*category section*/}
      <section className="max-w-7xl mx-auto md:px-8 px-0 py-10">
        <div className="relative text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-80" />
        </div>{" "}
        <div className="flex overflow-x-auto no-scrollbar gap-4 items-center justify-center">
          {categories.map((item) => (
            <CategoryCard {...item} key={item.slug} />
          ))}
        </div>
      </section>

      {/*Featured Collection */}
      <section className="max-w-7xl mx-auto md:px-8 px-4 py-10">
        <FeaturedProduct />

        {featuredProducts.length > 0 ? (
          /* Relative wrapper container so absolute arrows position correctly */
          <div className="relative w-full">
            {/* Left Arrow */}
            <SliderArrow direction="left" containerRef={scrollContainerRef} />

            {/* The scrollable container track (Ref belongs HERE) */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory w-full pb-4"
            >
              {featuredProducts.map((list) => (
                <div
                  key={list._id}
                  className="flex-shrink-0 snap-start w-[calc(85%-12px)] sm:w-[calc(45%-12px)] md:w-[calc(33.333%-12px)] lg:w-[calc(20%-12px)]"
                >
                  {isLoading ? (
                    <>Loading the Products....</>
                  ) : (
                    <ProductCard
                      _id={list._id}
                      id={list.id}
                      slug={list.slug}
                      name={list.name}
                      images={list.images}
                      brand={list.brand}
                      category={list.category}
                      description={list.description || ""}
                      ratings={list.ratings}
                      stock={list.stock}
                      price={list.price}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <SliderArrow direction="right" containerRef={scrollContainerRef} />
          </div>
        ) : (
          /* Empty fallback state rendered exactly once */
          <div className="flex justify-center items-center py-10">
            <p className="text-slate-400 italic">
              No Featured Products Available
            </p>
          </div>
        )}
      </section>

      {/*Product List section*/}
      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="relative text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 bg-clip-text text-transparent">
            Shop by Products
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-80" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedProducts.map((list) => (
            <div key={list._id}>
              <ProductCard
                _id={list._id}
                slug={list.slug}
                id={list.id}
                name={list.name}
                images={list.images}
                brand={list.brand}
                category={list.category}
                ratings={list.ratings}
                stock={list.stock}
                price={list.price}
                description={list.description || ""}
                isFeatured={list.isFeatured}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
