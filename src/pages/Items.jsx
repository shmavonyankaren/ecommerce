import Item from "../components/Item.jsx";
import Poster2 from "../assets/Poster2.png";
import Loading from "../components/Loading";
import Preview from "../components/Preview.jsx";
import Categories from "../components/Categories.jsx";

export default function Items({
  data,
  addToTheCart,
  changeQuantities,
  categories,
  filterByCategory,
  setCategories,
}) {
  return (
    <div className="">
      {data ? (
        <div>
          <Preview srcForImage={Poster2} />
          <Categories
            filterByCategory={filterByCategory}
            categories={categories}
            setCategories={setCategories}
          />
          <div className="p-5">
            <div className="flex flex-wrap justify-center min-w-[100] mt-3 border-spacing-1 bg-white/80 rounded-xl py-3">
              {data.map((el) => {
                const changedTitle =
                  el.title.split(" ").length >= 6
                    ? el.title.split(" ").slice(0, 6).join(" ") + ".."
                    : el.title;

                return (
                  <div key={el.id} className="mx-2 my-2">
                    <Item
                      className="m-2 mx-1 max-w-[380px] min-w-[380px] max-h-[250px] min-h-[250px] py-8 px-4  bg-white/90 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                      key={el.id}
                      title={changedTitle}
                      price={el.price}
                      category={el.category}
                      description={el.description}
                      image={el.image}
                      addToTheCart={addToTheCart}
                      changeQuantities={changeQuantities}
                      btn1ClassName="mr-2 px-3 py-2 text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      btn2ClassName="px-3 py-2 text-sm bg-purple-800 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-[22%]">
          <Loading />
        </div>
      )}
    </div>
  );
}
