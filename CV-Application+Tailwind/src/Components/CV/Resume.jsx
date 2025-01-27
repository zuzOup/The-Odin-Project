import PropTypes from "prop-types";

function Resume({ info, eduInfo }) {
  return (
    <div className=" h-19/20 aspect-17/22 min-h-9/10 bg-white shrink-0">
      <div>{info.firstName}</div>
      <div>{info.web}</div>
      <div>{info.location}</div>
      <div>{info.secondName}</div>
      <div>{info.title}</div>
      <div>{info.summary}</div>
      <div>{info.email}</div>
      <div>{info.tel}</div>

      {Object.values(eduInfo).map((o, i) => {
        return (
          <div key={i} className="bg-lime-200 w-1/2">
            {Object.entries(o).map((x) => {
              return (
                <div key={x[0]}>
                  {x[0]}:{x[1]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Resume;

Resume.propTypes = { info: PropTypes.object, eduInfo: PropTypes.object };
