import PropTypes from "prop-types";
import { h2, hr } from "./css-helpers";

function H2({ label }) {
  return (
    <div>
      <h2 className={h2}>{label}</h2>
      <div className={hr}></div>
    </div>
  );
}

export default H2;

H2.propTypes = { label: PropTypes.string };
