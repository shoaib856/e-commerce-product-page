import propTypes from "prop-types";
import BigButton from "./BigButton";
import deleteIcon from "../assets/images/icon-delete.svg";
import { useEffect, useState } from "react";

const Cart = ({ itemsInCart, setItemsInCart }) => {
  const [overflow, setOverFlow] = useState(false);
  useEffect(() => {
    itemsInCart.length > 1 ? setOverFlow(true) : setOverFlow(false);
  }, [itemsInCart.length]);
  return (
    <div
      className={`z-[1] absolute rounded-lg shadow-2xl top-20 max-md:top-[4.3rem] right-16 max-md:right-1/2 max-md:translate-x-1/2 max-w-sm max-md:max-w-[310px] w-full h-[13rem] bg-white ${
        overflow && "overflow-y-scroll"
      }`}
    >
      <h2 className="p-3 border-b-2 text-xl font-medium text-gray-800">Cart</h2>
      <div className="flex justify-center items-center">
        {itemsInCart.length === 0 ? (
          <p className="font-bold text-gray-500 capitalize py-20">
            no items in cart
          </p>
        ) : (
          <div className="py-3 flex flex-col">
            <div className="divide-y-2">
              {itemsInCart.map((item) => (
                <div key={item.id} className="flex flex-col gap-5 px-2 py-3">
                  <div className="flex gap-5">
                    <img
                      src={item.images[0]}
                      alt="item"
                      className="w-12 rounded-lg"
                    />
                    <div>
                      <h3 className="text-gray-500">{item.name}</h3>
                      <div className="flex items-center gap-3">
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)} x {item.amount}
                        </p>
                        <p className="font-bold text-lg">
                          ${item.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        console.log("done");
                        setItemsInCart((prevItems) =>
                          prevItems.filter(
                            (prevItem) => prevItem.id !== item.id
                          )
                        );
                      }}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-2 mt-2">
              <BigButton>
                <span>Checkout</span>
              </BigButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  itemsInCart: propTypes.array.isRequired,
  setItemsInCart: propTypes.func.isRequired,
};
