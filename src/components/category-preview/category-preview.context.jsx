import { Link } from "react-router-dom";

import "./category-preview.styles.scss";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="goto-link">
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
        <Link to={title}>see all &#10230;</Link>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
