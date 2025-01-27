import PropTypes from "prop-types";

import { container, h2 } from "../css-helpers";

import Input from "../Input";
import TextArea from "../TextArea";

const inputs = {
  firstName: "First Name",
  secondName: "Second Name",
  title: "Professional title",
};

function BasicInfo({ info, changeInfo }) {
  return (
    <div className={container}>
      <h2 className={h2}>Basic Info</h2>

      {Object.entries(inputs).map((x) => {
        return (
          <Input
            key={x[0]}
            label={x[1]}
            dataLabel={x[0]}
            changeInfo={changeInfo}
            value={info[x[0]]}
          />
        );
      })}
      <TextArea
        label="Summary about yourself"
        dataLabel="summary"
        changeInfo={changeInfo}
      />
    </div>
  );
}

export default BasicInfo;

BasicInfo.propTypes = { changeInfo: PropTypes.func, info: PropTypes.object };
