import Navbar from "./components/Navbar";
import imageProduct1 from "./assets/images/image-product-1.jpg";
import imageProduct1thumb from "./assets/images/image-product-1-thumbnail.jpg";
import imageProduct2 from "./assets/images/image-product-2.jpg";
import imageProduct2thumb from "./assets/images/image-product-2-thumbnail.jpg";
import imageProduct3 from "./assets/images/image-product-3.jpg";
import imageProduct3thumb from "./assets/images/image-product-3-thumbnail.jpg";
import imageProduct4 from "./assets/images/image-product-4.jpg";
import imageProduct4thumb from "./assets/images/image-product-4-thumbnail.jpg";

import DisplayItemImgs from "./components/DisplayItemImgs";
import DisplayItemDescription from "./components/DisplayItemDescription";
import { useState } from "react";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    discount: 50,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    thumbs: [
      imageProduct1thumb,
      imageProduct2thumb,
      imageProduct3thumb,
      imageProduct4thumb,
    ],
    images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
  };

  return (
    <div className="container mx-auto">
      <Navbar itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />

      <div className="px-32 max-xl:px-16 max-lg:px-0 py-10 max-md:pt-0 gap-5 flex max-md:flex-col items-center justify-between">
        <DisplayItemImgs images={product.images} thumbs={product.thumbs} />
        <div className="max-lg:px-3">
          <DisplayItemDescription
            product={product}
            setItemsInCart={setItemsInCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
