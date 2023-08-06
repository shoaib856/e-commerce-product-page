import { useState } from "react";
import propTypes from "prop-types";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import BigButton from "./BigButton";

const DisplayItemDescription = ({ product, setItemsInCart }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex-1 max-w-md">
      <h2 className="text-orange-500 text-lg mb-5 uppercase font-bold tracking-widest">
        Sneaker Company
      </h2>
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-gray-500 font-medium my-10">{product.description}</p>
      <div className="flex flex-col gap-3 max-md:flex-row max-md:items-center max-md:justify-between">
        <div className="flex items-center gap-3">
          <p className="font-bold text-2xl">${product.price.toFixed(2)}</p>
          <span className="text-orange-500 bg-orange-500/20 block px-2 rounded-md font-bold text-sm">
            {product.discount}%
          </span>
        </div>
        <sub className="line-through font-bold text-gray-400">
          ${(product.price * (100 / product.discount)).toFixed(2)}
        </sub>
      </div>
      <div className="flex max-md:flex-col gap-5 mt-10">
        <div className="flex items-center rounded-md bg-orange-500/10 py-3 justify-between">
          <button
            onClick={() => setAmount(amount - 1)}
            disabled={amount === 1}
            className="disabled:cursor-not-allowed flex justify-center items-center w-10"
          >
            <img src={minus} alt="minus" />
          </button>
          <span className="px-5 font-bold">{amount}</span>
          <button
            onClick={() => setAmount(amount + 1)}
            className="flex justify-center items-center w-10"
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
        <BigButton
          onClick={() =>
            setItemsInCart((prev) => [
              ...prev,
              {
                ...product,
                amount,
                total: product.price * amount,
                id: prev.length + 1,
              },
            ])
          }
        >
          <>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
                fillRule="nonzero"
              />
            </svg>
            <p>Add to cart</p>
          </>
        </BigButton>
      </div>
    </div>
  );
};

DisplayItemDescription.propTypes = {
  product: propTypes.object.isRequired,
  setItemsInCart: propTypes.func.isRequired,
};

export default DisplayItemDescription;
