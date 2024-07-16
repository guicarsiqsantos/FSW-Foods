import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </>
  );
};

export default Home;
