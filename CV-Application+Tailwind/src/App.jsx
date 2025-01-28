import { useEffect, useState } from "react";

import { addValueToObject } from "./helpers";

import { data } from "./data";

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

  useEffect(() => {
    // dataLoad();
  }, []);

  const changeInfo = (e, key) => {
    setInfo((o) => addValueToObject(o, e, key));
  };

  const dataLoad = () => {
    setInfo(data.info);
    setEduInfo(data.education);
    setWorkInfo(data.work);
    setTechInfo(data.tech);
    setSoftInfo(data.soft);
  };

  const dataDelete = () => {
    setInfo({});
    setEduInfo({});
    setWorkInfo({});
    setTechInfo({});
    setSoftInfo({});
  };

  return (
    <main className="flex min-h-screen font-sans ">
      <div className="w-1/2 min-h-full h-screen bg-sky-50 flex flex-col items-center text-center py-4 overflow-x-hidden overflow-y-auto scrollbar-column">
        <Header dataLoad={dataLoad} dataDelete={dataDelete} info={info} />
        <BasicInfo changeInfo={changeInfo} info={info} />
        <Contacts changeInfo={changeInfo} info={info} />
        <Education eduInfo={eduInfo} setEduInfo={setEduInfo} />
        <Work workInfo={workInfo} setWorkInfo={setWorkInfo} />
        <TechnicalSkills setTechInfo={setTechInfo} techInfo={techInfo} />
        <SoftSkills setSoftInfo={setSoftInfo} softInfo={softInfo} />
      </div>

      <Resume
        info={info}
        eduInfo={eduInfo}
        workInfo={workInfo}
        techInfo={techInfo}
        softInfo={softInfo}
      />
    </main>
  );
}

export default App;
