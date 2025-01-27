import PropTypes from "prop-types";

import { container } from "../css-helpers";

import H2 from "../H2";
import Input from "../Input";

function Contacts({ info, changeInfo }) {
  return (
    <div className={container}>
      <H2 label="Contacts" />

      <Input
        label="Phone Number"
        dataLabel="tel"
        changeInfo={changeInfo}
        value={info.tel}
        type="tel"
        required={true}
      />
      <Input
        label="E-mail"
        dataLabel="email"
        changeInfo={changeInfo}
        value={info.email}
        type="email"
        required={true}
      />
      <Input
        label="Location"
        dataLabel="location"
        changeInfo={changeInfo}
        value={info.location}
      />
      <Input label="Webpage" dataLabel="web" changeInfo={changeInfo} value={info.web} />
    </div>
  );
}

export default Contacts;

Contacts.propTypes = { info: PropTypes.object, changeInfo: PropTypes.func };
