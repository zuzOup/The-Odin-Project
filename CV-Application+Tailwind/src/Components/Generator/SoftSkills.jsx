import PropTypes from "prop-types";
import { useState } from "react";
import { buttonSmall, container, h2 } from "../css-helpers";
import Input from "../Input";
import Aditional from "../Aditional";
import { addArrayToObject, addItemToArray, removeItemFromArray } from "../../helpers";
import ListSkills from "./ListSkills";

function SoftSkills({ softInfo, setSoftInfo }) {
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState(false);

  const changeCategory = (e) => {
    setCategory(e.target.value);
    if (
      warning &&
      e.target.value.length > e.target.value.split("").every((x) => x !== " ")
    ) {
      setWarning(false);
    }
  };

  const setListHandle = (value) => {
    setList((a) => addItemToArray(a, value));
  };

  const removeFromList = (e) => {
    const index = e.currentTarget.dataset.i;
    setList((a) => removeItemFromArray(a, index));
  };

  const addSkill = () => {
    const arr = [...list];

    if (category === "" || category.split("").every((x) => x === " ")) {
      setWarning("Please add skill category");
      return;
    }

    setSoftInfo((o) => addArrayToObject(o, arr, category));
    setCategory("");
    setList([]);
    setInputValue("");
  };

  return (
    <div className={container}>
      <h2 className={h2}>Additional Skills</h2>
      <div>
        {Object.entries(softInfo).map((x, i) => {
          return (
            <ListSkills
              key={i}
              category={category}
              title={x[0]}
              list={x[1]}
              setCategory={setCategory}
              setList={setList}
              setInfo={setSoftInfo}
            />
          );
        })}
      </div>
      <Input
        label="Skill category (ex. languages, awards, soft skills...):"
        dataLabel="category"
        changeInfo={changeCategory}
        value={category}
        required={true}
        warning={warning}
      />
      <Aditional
        label={`Add skill in ${
          category || "category"
        } (ex. languages, awards name/year...)`}
        list={list}
        setList={setListHandle}
        removeFromList={removeFromList}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <button className={`${buttonSmall} w-full`} onClick={addSkill}>
        Submit Skill / Add Different Skill
      </button>
    </div>
  );
}

export default SoftSkills;

SoftSkills.propTypes = { softInfo: PropTypes.object, setSoftInfo: PropTypes.func };
