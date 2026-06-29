import CategoryCard from "../components/CategoryCard.tsx";
import HeroSlider from "../components/HeroSlider.tsx";
import { categories, heroSlides } from "../data/category.ts";

const Home = () => {
  return (
    <div>
      <HeroSlider slides={heroSlides} />
      <section className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-center mb-6">Shop by Category</h2>
        <div className="flex overflow-x-auto gap-4 items-center justify-center">
          {categories.map((item) => (
            <CategoryCard {...item} key={item.slug} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
