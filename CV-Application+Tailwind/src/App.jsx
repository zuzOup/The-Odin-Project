import { useState } from "react";

import { addValueToObject } from "./helpers";

import Header from "./Components/Generator/Header";
import BasicInfo from "./Components/Generator/BasicInfo";
import Contacts from "./Components/Generator/Contacts";

import Resume from "./Components/CV/Resume";
import Education from "./Components/Generator/Education";
import Work from "./Components/Generator/Work";
import TechnicalSkills from "./Components/Generator/TechnicalSkills";
import SoftSkills from "./Components/Generator/SoftSkills";

function App() {
  const [info, setInfo] = useState({});
  const [eduInfo, setEduInfo] = useState({});
  const [workInfo, setWorkInfo] = useState({});
  const [techInfo, setTechInfo] = useState({});
  const [softInfo, setSoftInfo] = useState({});

  const changeInfo = (e, key) => {
    setInfo((o) => addValueToObject(o, e, key));
  };

  return (
    <>
      <div className="flex min-h-screen font-sans ">
        <div className="w-6/12 min-h-full h-screen bg-sky-50 flex flex-col items-center text-center py-4 overflow-x-hidden overflow-y-auto scrollbar-column">
          <Header />
          <BasicInfo changeInfo={changeInfo} info={info} />
          <Contacts changeInfo={changeInfo} info={info} />
          <Education eduInfo={eduInfo} setEduInfo={setEduInfo} />
          <Work workInfo={workInfo} setWorkInfo={setWorkInfo} />
          <TechnicalSkills setTechInfo={setTechInfo} techInfo={techInfo} />
          <SoftSkills setSoftInfo={setSoftInfo} softInfo={softInfo} />
        </div>
        <div className="w-6/12 min-h-full min-w-[510px]  h-screen bg-gray-200 text-center flex justify-center items-center overflow-x-hidden overflow-y-auto scrollbar-column">
          <Resume info={info} eduInfo={eduInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
