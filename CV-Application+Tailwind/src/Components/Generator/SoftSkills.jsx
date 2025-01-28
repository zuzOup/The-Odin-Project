import PropTypes from "prop-types";

import { useState } from "react";

import { addArrayToObject, addItemToArray, removeItemFromArray } from "../../helpers";

import { buttonContainer, buttonSmall, container } from "../css-helpers";

import H2 from "../H2";
import ListSkills from "../ListSkills";
import Input from "../Input";
import Aditional from "../Aditional";

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
    <section className={container}>
      <H2 label="Additional Skills" />
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
      <button className={`${buttonSmall} ${buttonContainer}`} onClick={addSkill}>
        Submit Skill / Add Different Skill
      </button>
    </section>
  );
}

export default SoftSkills;

SoftSkills.propTypes = { softInfo: PropTypes.object, setSoftInfo: PropTypes.func };
