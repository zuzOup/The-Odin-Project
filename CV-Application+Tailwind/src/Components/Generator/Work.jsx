import PropTypes from "prop-types";
import { buttonSmall, container, h2 } from "../css-helpers";
import List from "./List";
import Input from "../Input";
import { useReducer, useState } from "react";
import {
  addArrayItemToObjectArray,
  addObjectToObject,
  addValueToObject,
  removeArrayItemToObjectArray,
} from "../../helpers";
import Toggle from "../Toggle";
import Aditional from "../Aditional";

const initialState = {
  warTitle: false,
  warCompany: false,
  warStart: false,
  warEnd: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WAR_TITLE":
      return { ...state, warTitle: action.payload };
    case "SET_WAR_COMPANY":
      return { ...state, warCompany: action.payload };
    case "SET_WAR_START":
      return { ...state, warStart: action.payload };
    case "SET_WAR_END":
      return { ...state, warEnd: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Work({ workInfo, setWorkInfo }) {
  const [now, setNow] = useState(Date.now());
  const [work, setWork] = useState({ list: [] });
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTitle = (e, key) => {
    if (
      state.warTitle !== false &&
      (e.currentTarget.value.length > 0 ||
        e.currentTarget.value.split("").every((x) => x !== " "))
    ) {
      dispatch({ type: "SET_WAR_TITLE", payload: false });
    }

    setWork((o) => addValueToObject(o, e, key));
  };

  const changeCompany = (e, key) => {
    if (
      state.warCompany !== false &&
      (e.currentTarget.value.length > 0 ||
        e.currentTarget.value.split("").every((x) => x !== " "))
    ) {
      dispatch({ type: "SET_WAR_COMPANY", payload: false });
    }

    setWork((o) => addValueToObject(o, e, key));
  };

  const changeStart = (e, key) => {
    if (state.warStart !== false && e.currentTarget.value.length > 0) {
      dispatch({ type: "SET_WAR_START", payload: false });
    }
    setWork((o) => addValueToObject(o, e, key));
  };

  const changeEnd = (e, key) => {
    if (state.warEnd !== false && e.currentTarget.value.length > 0) {
      dispatch({ type: "SET_WAR_END", payload: false });
    }
    setWork((o) => addValueToObject(o, e, key));
  };

  const toggleHandle = () => {
    setToggle((x) => !x);
  };

  const setList = (value) => {
    setWork((o) => addArrayItemToObjectArray(o, value, "list"));
  };

  const removeFromList = (e) => {
    const index = e.currentTarget.dataset.i;
    setWork((o) => removeArrayItemToObjectArray(o, index, "list"));
  };

  const addWork = () => {
    const obj = JSON.parse(JSON.stringify(work));

    if (toggle === true) {
      obj.end = "Present";
    }

    if (!obj.title || !obj.company || !obj.start || !obj.end) {
      if (!obj.title) {
        dispatch({
          type: "SET_WAR_TITLE",
          payload: "Please provide the title of your position.",
        });
      }

      if (!obj.company) {
        dispatch({
          type: "SET_WAR_COMPANY",
          payload: "Please provide the name of the employer.",
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

    setWorkInfo((o) => addObjectToObject(o, obj, now));
    setWork({ list: [] });
    setToggle(false);
    setNow(Date.now);
    setInputValue("");
  };

  return (
    <div className={container}>
      <h2 className={h2}>Work Experience</h2>
      <div>
        {Object.entries(workInfo).map((x) => {
          return (
            <List
              key={x[0]}
              id={x[0]}
              title={x[1].title}
              data={x[1]}
              setList={setWork}
              setListInfo={setWorkInfo}
              setNow={setNow}
              setToggle={setToggle}
            />
          );
        })}
      </div>

      <Input
        label="Title/Position:"
        dataLabel="title"
        changeInfo={changeTitle}
        value={work.title}
        required={true}
        warning={state.warTitle}
      />
      <Input
        label="Workplace/Company/Organization:"
        dataLabel="company"
        changeInfo={changeCompany}
        value={work.company}
        required={true}
        warning={state.warCompany}
      />
      <Input
        label="Starting Year:"
        dataLabel="start"
        changeInfo={changeStart}
        value={work.start}
        type="month"
        required={true}
        warning={state.warStart}
      />
      {!toggle && (
        <Input
          label="Ending Year:"
          dataLabel="end"
          changeInfo={changeEnd}
          value={work.end}
          type="month"
          required={true}
          warning={state.warEnd}
        />
      )}
      <Toggle label="Ongoing?" toggleHandle={toggleHandle} toggle={toggle} />
      <Aditional
        label="Additional info (ex. awards, courses, thesis project...)"
        list={work.list}
        setList={setList}
        removeFromList={removeFromList}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <button className={`${buttonSmall} w-full`} onClick={addWork}>
        Submit Experience / Add Different Experience
      </button>
    </div>
  );
}

export default Work;

Work.propTypes = { workInfo: PropTypes.object, setWorkInfo: PropTypes.func };
