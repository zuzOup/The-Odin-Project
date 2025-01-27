import PropTypes from "prop-types";

import { buttonSmall, container } from "../css-helpers";

function log() {
  console.log(1);
}

function Header() {
  return (
    <div className={`${container} flex-row justify-evenly `}>
      <div>
        <h1 className="text-6xl text-sky-800 font-bold">CV Generator</h1>
        <div className="text-sm pt-1 italic text-sky-800">
          by&nbsp;
          <a
            href="https://github.com/zuzOup/"
            target="_blank"
            className="font-medium hover:text-lime-400"
          >
            Zuzana O.
          </a>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <button className={buttonSmall} onClick={log}>
          Load data
        </button>
        <button className={buttonSmall} onClick={log}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default Header;

Header.propTypes = { setData: PropTypes.func };
