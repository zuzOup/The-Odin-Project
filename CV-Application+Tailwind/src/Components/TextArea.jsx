import PropTypes from "prop-types";
import { labelcss, textarea } from "./css-helpers";

function TextArea({ label = "label", dataLabel, changeInfo }) {
  return (
    <div className="relative w-full">
      <textarea
        type="text"
        placeholder=" "
        className={textarea}
        onChange={(e) => {
          changeInfo(e, dataLabel);
        }}
      />
      <label className={labelcss}>{label}</label>
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  dataLabel: PropTypes.string,
  changeInfo: PropTypes.func,
};
