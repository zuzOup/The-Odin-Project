import PropTypes from "prop-types";
import { useState } from "react";
import { buttonSmall, container, h2 } from "../css-helpers";
import Input from "../Input";
import Aditional from "../Aditional";
import { addArrayToObject, addItemToArray, removeItemFromArray } from "../../helpers";
import ListSkills from "./ListSkills";

function TechnicalSkills({ techInfo, setTechInfo }) {
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

    setTechInfo((o) => addArrayToObject(o, arr, category));
    setCategory("");
    setList([]);
    setInputValue("");
  };

  return (
    <div className={container}>
      <h2 className={h2}>Technical Skills</h2>
      <div>
        {Object.entries(techInfo).map((x, i) => {
          return (
            <ListSkills
              key={i}
              category={category}
              title={x[0]}
              list={x[1]}
              setCategory={setCategory}
              setList={setList}
              setTechInfo={setTechInfo}
            />
          );
        })}
      </div>
      <Input
        label="Skill category (ex. design, front-end...):"
        dataLabel="category"
        changeInfo={changeCategory}
        value={category}
        required={true}
        warning={warning}
      />
      <Aditional
        label={`Add skill in ${category || "category"} (ex. software, prog. language...)`}
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

export default TechnicalSkills;

TechnicalSkills.propTypes = { techInfo: PropTypes.object, setTechInfo: PropTypes.func };
