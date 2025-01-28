import PropTypes from "prop-types";

import { container } from "../css-helpers";

import H2 from "../H2";
import Input from "../Input";
import TextArea from "../TextArea";

const inputs = {
  firstName: "First Name",
  secondName: "Second Name",
  title: "Professional title",
};

function BasicInfo({ info, changeInfo }) {
  return (
    <section className={container}>
      <H2 label="Basic Info" />

      {Object.entries(inputs).map((x) => {
        return (
          <Input
            key={x[0]}
            label={x[1]}
            dataLabel={x[0]}
            changeInfo={changeInfo}
            value={info[x[0]]}
            required={true}
          />
        );
      })}

      <TextArea
        label="Summary about yourself"
        dataLabel="summary"
        changeInfo={changeInfo}
        value={info.summary}
        required={true}
      />
    </section>
  );
}

export default BasicInfo;

BasicInfo.propTypes = { info: PropTypes.object, changeInfo: PropTypes.func };
