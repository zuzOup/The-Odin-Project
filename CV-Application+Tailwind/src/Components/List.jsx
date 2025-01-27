import PropTypes from "prop-types";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { buttonActive, icon, options } from "./css-helpers";
import { deleteKeyFromObject, yyyy_mmToMMMyyyy, yyyy_mmToyy } from "../helpers";

function List({
  id,
  title,
  data,
  start,
  end,
  now,
  setNow,
  setList,
  setListInfo,
  setToggle,
}) {
  const edit = (e) => {
    setNow(id);
    setList(data);

    if (end === "Present") setToggle(true);
    e.currentTarget.blur();
  };

  const deleteItem = (e) => {
    setListInfo((o) => deleteKeyFromObject(o, id));
    if (id === now) {
      setList({ list: [] });
      setNow(`${Date.now()}`);
    }

    e.currentTarget.blur();
  };

  return (
    <div id={id} className={options}>
      <div className="flex w-3/4 gap-3">
        <div className="font-medium">{title}</div>
        {start && (
          <div className="italic font-thin">{`${yyyy_mmToyy(start)} - ${yyyy_mmToyy(
            end
          )}`}</div>
        )}
        {!start && <div className="italic font-thin">{`${yyyy_mmToMMMyyyy(end)}`}</div>}
      </div>
      <div className="flex">
        <button className={buttonActive} onClick={edit}>
          <PencilSquareIcon className={icon} />
        </button>
        <button className={buttonActive}>
          <TrashIcon className={icon} onClick={deleteItem} />
        </button>
      </div>
    </div>
  );
}

export default List;

List.propTypes = {
  id: PropTypes.string,
  now: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  data: PropTypes.object,
  setNow: PropTypes.func,
  setList: PropTypes.func,
  setListInfo: PropTypes.func,
  setToggle: PropTypes.func,
};
