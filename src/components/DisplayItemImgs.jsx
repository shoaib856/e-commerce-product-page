import propTypes from "prop-types";
import { useEffect, useState } from "react";
import ThumbBar from "./ThumbBar";
import ShowProductImg from "./ShowProductImg";
import Carousel from "./Carousel";
const DisplayItemImgs = ({ images, thumbs }) => {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  useEffect(() => {
    if (showCarousel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showCarousel]);

  return (
    <div>
      {showCarousel && (
        <ShowProductImg
          images={images}
          thumbs={thumbs}
          setShowCarousel={setShowCarousel}
        />
      )}
      <button className="max-md:hidden" onClick={() => setShowCarousel(true)}>
        <img src={images[selectedThumb]} alt="" className="w-96 rounded-lg" />
      </button>
      <Carousel
        images={images}
        selectedThumb={selectedThumb}
        setSelectedThumb={setSelectedThumb}
        className={"hidden max-md:block"}
      />
      <ThumbBar
        thumbs={thumbs}
        setSelectedThumb={setSelectedThumb}
        selectedThumb={selectedThumb}
      />
    </div>
  );
};

DisplayItemImgs.propTypes = {
  images: propTypes.array.isRequired,
  thumbs: propTypes.array.isRequired,
};

export default DisplayItemImgs;
