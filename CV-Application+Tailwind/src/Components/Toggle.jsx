import PropTypes from "prop-types";

function Toggle({ label = "label", toggleHandle, toggle }) {
  return (
    <div className="flex items-center space-x-3  px-2 pb-1 -translate-y-2 self-end">
      <button
        onClick={toggleHandle}
        className={`relative w-12 h-5.5 rounded-full transition-colors duration-300 ${
          toggle ? "bg-lime-200" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-3.5 h-3.5 bg-white rounded-full transition-transform duration-300 ${
            toggle ? "transform translate-x-6" : ""
          }`}
        ></span>
      </button>{" "}
      <label className="text-gray-700 font-medium text-sm">{label}</label>
    </div>
  );
}

export default Toggle;

Toggle.propTypes = {
  label: PropTypes.string,
  toggleHandle: PropTypes.func,
  toggle: PropTypes.bool,
};
