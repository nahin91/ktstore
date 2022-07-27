import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => ( //categoriesMap is an object that's why wee need to extract the keys names as a set of an array.
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => ( // to go through each category we use the CategoriedMap (which is an object) and assign the title within [] to get the corresponding products.
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>)
      )}
    </Fragment>
  );
};

export default Shop;
