import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";
import Image from "next/image";

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

      <div className="px-5 pt-6">
        <Image
          src="/promotion-Banner01.png"
          alt="Ate 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vh"
          quality={100}
        />
      </div>
    </>
  );
};

export default Home;
