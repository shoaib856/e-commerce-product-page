import { useState } from "react";
import ThumbBar from "./ThumbBar";
import propTypes from "prop-types";
import "./btns.css";
import Carousel from "./Carousel";
const ShowProductImg = ({ thumbs, images, setShowCarousel }) => {
  const [selectedThumb, setSelectedThumb] = useState(0);
  return (
    <div className="inset-0 bg-black/60 fixed z-10 ">
      <div className="flex items-center justify-center h-full">
        <div>
          <Carousel
            images={images}
            setShowCarousel={setShowCarousel}
            selectedThumb={selectedThumb}
            setSelectedThumb={setSelectedThumb}
          />
          <ThumbBar
            selectedThumb={selectedThumb}
            setSelectedThumb={setSelectedThumb}
            thumbs={thumbs}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowProductImg;

ShowProductImg.propTypes = {
  thumbs: propTypes.array.isRequired,
  images: propTypes.array.isRequired,
  setShowCarousel: propTypes.func.isRequired,
};
