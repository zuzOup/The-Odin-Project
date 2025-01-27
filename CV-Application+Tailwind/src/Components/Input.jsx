import PropTypes from "prop-types";

import { input, labelcss, requiredcss, warningcss } from "./css-helpers";

function Input({
  label = "label",
  dataLabel,
  changeInfo,
  value,
  type = "text",
  required = false,
  warning = false,
}) {
  const css = required ? labelcss + requiredcss : labelcss;

  return (
    <>
      <div className="relative w-full">
        <input
          type={type}
          placeholder=" "
          className={input}
          onChange={(e) => {
            changeInfo(e, dataLabel);
          }}
          value={value || ""}
        />
        <label className={css}>{label}</label>
      </div>
      {warning && <div className={warningcss}>{warning}</div>}
    </>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  dataLabel: PropTypes.string,
  changeInfo: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
