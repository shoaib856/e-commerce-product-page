import propTypes from "prop-types";
const ThumbBar = ({ thumbs, selectedThumb, setSelectedThumb }) => {
  return (
    <div className="flex gap-5 mt-5 justify-center max-md:hidden">
      {thumbs.map((thumb, index) => (
        <button
          type="button"
          className={`relative ${
            index === selectedThumb
              ? "before:rounded-lg before:bg-white/40 before:border-orange-500 before:border-2 before:absolute before:inset-0"
              : "hover:before:rounded-lg hover:before:bg-white/40 hover:before:absolute hover:before:inset-0"
          }`}
          key={index}
          onClick={() => setSelectedThumb(index)}
        >
          <img src={thumb} alt="thumb" className="w-20 rounded-lg" />
        </button>
      ))}
    </div>
  );
};

export default ThumbBar;

ThumbBar.propTypes = {
  thumbs: propTypes.array.isRequired,
  setSelectedThumb: propTypes.func.isRequired,
  selectedThumb: propTypes.number.isRequired,
};
