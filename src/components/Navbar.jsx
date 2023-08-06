import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

import "./btns.css";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import propTypes from "prop-types";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";

const Navbar = ({ itemsInCart, setItemsInCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const links = [
    {
      id: 1,
      name: "Collection",
    },
    {
      id: 2,
      name: "Men",
    },
    {
      id: 3,
      name: "Women",
    },
    {
      id: 4,
      name: "About",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(
      itemsInCart.reduce((acc, item) => {
        return acc + item.amount;
      }, 0)
    );
  }, [itemsInCart]);

  useEffect(() => {
    setNumberOfItems(totalAmount);
  }, [totalAmount, setNumberOfItems]);

  useEffect(() => {
    showOverlay
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showOverlay]);
  const closeOverlay = (e) => {
    if (e.target.classList.contains("overlay")) {
      setShowOverlay(false);
    }
  };

  return (
    <header className="px-8 max-md:px-3 shadow-xl relative min-h-[64px] max-md:flex">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-10 max-md:gap-5 items-center">
          <button
            onClick={() => setShowOverlay(true)}
            className="hidden max-md:block"
          >
            <img src={iconMenu} alt="menu" />
          </button>
          <a href="#" className="block w-32">
            <img src={logo} alt="logo" />
          </a>

          <nav
            className={`${
              showOverlay ? "max-md:left-0" : "max-md:-left-full"
            } max-md:transition-all max-md:duration-300 max-md:z-20 max-md:fixed max-md:top-0 max-md:pt-16 max-md:overflow-y-scroll h-full bg-white max-w-xs w-full`}
          >
            <button
              className="hidden max-md:block max-md:absolute max-md:top-3 max-md:left-3"
              onClick={() => setShowOverlay(false)}
            >
              <img src={iconClose} alt="close" />
            </button>
            <ul className="flex gap-5 max-md:flex-col">
              {links.map((link) => (
                <NavLink key={link.id}>{link.name}</NavLink>
              ))}
            </ul>
          </nav>
          {showOverlay && (
            <div
              onClick={closeOverlay}
              className={`overlay inset-0 bg-black/60 fixed z-10`}
            ></div>
          )}
        </div>
        <div className="flex gap-5 max-sm:gap-3">
          <button
            onClick={() => setShowCart(!showCart)}
            className={`relative max-sm:p-1 nav-btn ${
              showCart ? "border-orange-500" : ""
            }`}
          >
            {numberOfItems > 0 && (
              <span className="bg-orange-500 text-xs font-bold text-white absolute -top-2 -right-2 rounded-xl !w-6 max-md:!w-4">
                {numberOfItems}
              </span>
            )}
            <img src={cart} alt="cart" />
          </button>
          <button className="nav-btn">
            <img src={avatar} alt="avatar" />
          </button>
        </div>
      </div>

      {showCart && (
        <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
      )}
    </header>
  );
};

Navbar.propTypes = {
  itemsInCart: propTypes.array.isRequired,
  setItemsInCart: propTypes.func.isRequired,
};

export default Navbar;
