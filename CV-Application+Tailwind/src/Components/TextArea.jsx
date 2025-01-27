import PropTypes from "prop-types";
import { labelcss, requiredcss, textarea } from "./css-helpers";

function TextArea({ label = "label", dataLabel, changeInfo, required = false }) {
  const css = required ? labelcss + requiredcss : labelcss;

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
      <label className={css}>{label}</label>
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  dataLabel: PropTypes.string,
  changeInfo: PropTypes.func,
  required: PropTypes.bool,
};
