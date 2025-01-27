import PropTypes from "prop-types";

import { container, h2 } from "../css-helpers";

import Input from "../Input";

function Contacts({ info, changeInfo }) {
  return (
    <div className={container}>
      <h2 className={h2}>Contacts</h2>

      <Input
        label="Phone Number"
        dataLabel="tel"
        changeInfo={changeInfo}
        value={info.tel}
        type="tel"
      />
      <Input
        label="E-mail"
        dataLabel="email"
        changeInfo={changeInfo}
        value={info.email}
        type="email"
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

Contacts.propTypes = { changeInfo: PropTypes.func, info: PropTypes.object };
