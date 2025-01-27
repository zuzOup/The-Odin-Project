import PropTypes from "prop-types";

import { useReducer, useState } from "react";

import {
  addArrayItemToObjectArray,
  addObjectToObject,
  addValueToObject,
  removeArrayItemToObjectArray,
} from "../../helpers";

import { buttonContainer, buttonSmall, container } from "../css-helpers";

import H2 from "../H2";
import List from "../List";
import Input from "../Input";
import Toggle from "../Toggle";
import Aditional from "../Aditional";

const initialState = {
  warUni: false,
  warStart: false,
  warEnd: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WAR_UNI":
      return { ...state, warUni: action.payload };
    case "SET_WAR_START":
      return { ...state, warStart: action.payload };
    case "SET_WAR_END":
      return { ...state, warEnd: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Education({ eduInfo, setEduInfo }) {
  const [edu, setEdu] = useState({ list: [] });
  const [now, setNow] = useState(Date.now());
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeEdu = (e, key) => {
    setEdu((o) => addValueToObject(o, e, key));
  };

  const changeUni = (e, key) => {
    if (
      state.warUni !== false &&
      (e.currentTarget.value.length > 0 ||
        e.currentTarget.value.split("").every((x) => x !== " "))
    ) {
      dispatch({ type: "SET_WAR_UNI", payload: false });
    }
    setEdu((o) => addValueToObject(o, e, key));
  };

  const changeStart = (e, key) => {
    if (state.warStart !== false && e.currentTarget.value.length > 0) {
      dispatch({ type: "SET_WAR_START", payload: false });
    }
    setEdu((o) => addValueToObject(o, e, key));
  };

  const changeEnd = (e, key) => {
    if (state.warEnd !== false && e.currentTarget.value.length > 0) {
      dispatch({ type: "SET_WAR_END", payload: false });
    }
    setEdu((o) => addValueToObject(o, e, key));
  };

  const toggleHandle = () => {
    setToggle((x) => !x);
  };

  const setList = (value) => {
    setEdu((o) => addArrayItemToObjectArray(o, value, "list"));
  };

  const removeFromList = (e) => {
    const index = e.currentTarget.dataset.i;
    setEdu((o) => removeArrayItemToObjectArray(o, index, "list"));
  };

  const addEdu = () => {
    const obj = JSON.parse(JSON.stringify(edu));

    if (toggle === true) {
      obj.end = "Present";
    }

    if (!obj.uni || !obj.start || !obj.end) {
      if (!obj.uni) {
        dispatch({
          type: "SET_WAR_UNI",
          payload: "Please provide the name of the institution.",
        });
      }

      if (!obj.start) {
        dispatch({ type: "SET_WAR_START", payload: "Please provide the starting date." });
      }

      if (!obj.end) {
        dispatch({
          type: "SET_WAR_END",
          payload:
            "Please provide the ending date or toggle the button for ongoing education.",
        });
      }

      return;
    }

    setEduInfo((o) => addObjectToObject(o, obj, now));
    setEdu({ list: [] });
    setToggle(false);
    setNow(Date.now);
    setInputValue("");
  };

  return (
    <div className={container}>
      <H2 label="Education" />
      <div>
        {Object.entries(eduInfo).map((x) => {
          return (
            <List
              key={x[0]}
              id={x[0]}
              title={x[1].uni}
              data={x[1]}
              setList={setEdu}
              setListInfo={setEduInfo}
              now={now}
              setNow={setNow}
              setToggle={setToggle}
            />
          );
        })}
      </div>

      <Input
        label="University/Institution/Organization:"
        dataLabel="uni"
        changeInfo={changeUni}
        value={edu.uni}
        required={true}
        warning={state.warUni}
      />
      <Input
        label="Program/Degree/Course:"
        dataLabel="degree"
        changeInfo={changeEdu}
        value={edu.degree}
      />
      <Input
        label="Starting Year:"
        dataLabel="start"
        changeInfo={changeStart}
        value={edu.start}
        type="month"
        required={true}
        warning={state.warStart}
      />
      {!toggle && (
        <Input
          label="Ending Year:"
          dataLabel="end"
          changeInfo={changeEnd}
          value={edu.end}
          type="month"
          required={true}
          warning={state.warEnd}
        />
      )}
      <Toggle label="Ongoing?" toggleHandle={toggleHandle} toggle={toggle} />
      <Aditional
        label="Additional info (ex. awards, courses, thesis project...)"
        list={edu.list}
        setList={setList}
        removeFromList={removeFromList}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <button className={`${buttonSmall} ${buttonContainer}`} onClick={addEdu}>
        Submit Education / Add Different Education
      </button>
    </div>
  );
}

export default Education;

Education.propTypes = {
  eduInfo: PropTypes.object,
  setEduInfo: PropTypes.func,
};
