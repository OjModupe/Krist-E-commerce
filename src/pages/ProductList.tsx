import FilterComponent from "../components/ProductListComponents/FilterComponent";
import ProductComponent from "../components/ProductListComponents/ProductComponent";

const ProductList = () => {
  return (
    <div className="flex flex-col px-15">
      <div className="flex">
    <div className=" w-[17%]">
          <FilterComponent />
    </div>
    <div className=" flex-1">

        <ProductComponent />
    </div>


      </div>
    </div>
  );
};

export default ProductList;
