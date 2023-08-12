import propTypes from "prop-types";

const Carousel = ({
  images,
  setShowCarousel = null,
  selectedThumb,
  setSelectedThumb,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {setShowCarousel && (
        <div className="flex justify-end mb-3 pt-10">
          <button onClick={() => setShowCarousel(false)} className="w-5 h-5 close-btn">
            <svg
              width="14"
              height="15"
              className="mx-auto scale-125"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
      <img
        src={images[selectedThumb]}
        alt=""
        className="max-w-md w-full rounded-lg max-md:rounded-none"
      />

      <button
        onClick={() =>
          selectedThumb < 3
            ? setSelectedThumb(selectedThumb + 1)
            : setSelectedThumb(0)
        }
        className="navigation-btn md:-right-5 right-2"
      >
        <svg
          className="mx-auto"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          selectedThumb > 0
            ? setSelectedThumb(selectedThumb - 1)
            : setSelectedThumb(3)
        }
        className="navigation-btn md:-left-5 left-2"
      >
        <svg
          className="mx-auto"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  images: propTypes.array.isRequired,
  setShowCarousel: propTypes.func,
  selectedThumb: propTypes.number.isRequired,
  setSelectedThumb: propTypes.func.isRequired,
  className: propTypes.string,
};
