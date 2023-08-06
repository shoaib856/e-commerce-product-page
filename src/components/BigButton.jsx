import propTypes from "prop-types";

const BigButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" flex items-center justify-center gap-3 w-full xl:px-20 py-3 rounded-lg font-bold bg-orange-500 hover:bg-orange-500/70 text-white"
    >
      {children}
    </button>
  );
};

export default BigButton;

BigButton.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
};
