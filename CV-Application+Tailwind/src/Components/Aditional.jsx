import PropTypes from "prop-types";

import {
  addInput,
  additional,
  buttonActive,
  iconAdd,
  addLabel,
  addButtonInner,
  addButtonInnerIcon,
} from "./css-helpers";

import { PlusIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

function Aditional({ label, list, setList, removeFromList, inputValue, setInputValue }) {
  const addToList = () => {
    if (inputValue === "") return;
    if (inputValue.split("").every((x) => x === " ")) {
      setInputValue("");
      return;
    }

    setList(inputValue);
    setInputValue("");
  };

  const keyHandle = (e) => e.key === "Enter" && addToList();

  return (
    <div className="relative w-full">
      <div className="peer  w-full  ">
        <div className={additional}>
          <div className="min-h-25 flex flex-wrap  content-start">
            {list.map((x, i) => {
              return (
                <div key={i} className={addButtonInner}>
                  <div className="break-words w-9/10 text-start my-1 mx-2">{x}</div>
                  <button data-i={i} onClick={removeFromList} className="group">
                    <TrashIcon className={addButtonInnerIcon + buttonActive} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full flex">
            <input
              placeholder="Press enter or + button to add additional info"
              className={addInput}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={keyHandle}
              value={inputValue}
            ></input>
            <button className={buttonActive} onClick={addToList}>
              <PlusIcon className={iconAdd} />
            </button>
          </div>
        </div>
      </div>
      <label className={addLabel}>{label}</label>
    </div>
  );
}

export default Aditional;

Aditional.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
  setList: PropTypes.func,
  removeFromList: PropTypes.func,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
};
