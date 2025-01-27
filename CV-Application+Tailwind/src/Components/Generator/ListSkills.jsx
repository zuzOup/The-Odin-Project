import PropTypes from "prop-types";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { buttonActive, icon, options } from "../css-helpers";
import { deleteKeyFromObject } from "../../helpers";

function ListSkills({ category, title, list, setList, setCategory, setTechInfo }) {
  const edit = (e) => {
    setCategory(title);
    setList(list);
    e.currentTarget.blur();
  };

  const deleteItem = (e) => {
    if (category === title) {
      setCategory("");
      setList([]);
    }

    setTechInfo((o) => deleteKeyFromObject(o, title));

    e.currentTarget.blur();
  };

  return (
    <div className={options}>
      <div className="flex w-3/4 gap-3">
        <div className="font-medium">{title}</div>
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

export default ListSkills;

ListSkills.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.array,
  setList: PropTypes.func,
  setCategory: PropTypes.func,
  setTechInfo: PropTypes.func,
};
