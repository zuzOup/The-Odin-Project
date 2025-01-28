import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { formatTel, yyyy_mmToMMMMM_yyyy } from "../../helpers";

import { cv } from "../css-helpers";

import {
  AtSymbolIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  StopIcon,
} from "@heroicons/react/24/outline";

function Resume({ info, eduInfo, workInfo, techInfo, softInfo }) {
  const ref = useRef(null);
  const [height, setHeight] = useState("");

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <aside className="w-1/2 min-h-full h-screen bg-gray-200 text-center flex justify-center items-start overflow-x-hidden overflow-y-scroll scrollbar-column">
      <div
        style={{
          height: `${height / 2 + 125}px`,
        }}
      >
        <div
          className={cv.resume}
          id="resume"
          ref={ref}
          style={{
            transform: `translateY(-${height / 2 + 37.5}px)`,
          }}
        >
          <div className={cv.left}>
            <header className={`${cv.basicInfo} ${cv.leftInner}`}>
              <h1 className={`${cv.h1} flex`}>
                <span>{info.firstName || "[First]"}</span>&nbsp;
                <span>{info.secondName || "[Second]"}</span>
              </h1>
              <h2 className={cv.h2}>{info.title || "[Title]"}</h2>
              <p className={cv.sum}>{info.summary || "[Summary]"}</p>
            </header>
            <section className={cv.leftInner}>
              <h3 className={cv.header}>WORK EXPERIENCE</h3>
              <div className={cv.hr}></div>
              {Object.values(workInfo).map((w, i) => {
                return (
                  <div key={i} className="mt-2 mb-5">
                    <div className={cv.headerDiv}>
                      <StopIcon className={cv.headerIcon} />
                      <div className={cv.headerDivInner}>
                        <h4 className={cv.title}>{w.title}</h4>
                        <h6 className={cv.date}>{`${yyyy_mmToMMMMM_yyyy(
                          w.start
                        )} - ${yyyy_mmToMMMMM_yyyy(w.end)}`}</h6>
                      </div>
                    </div>
                    <h5 className={cv.subHeader}>{w.company}</h5>
                    <ul className={cv.list}>
                      {w.list.map((x, i) => {
                        return (
                          <li className={cv.li} key={i}>
                            {x}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </section>
            <section className={cv.leftInner}>
              <h3 className={cv.header}>EDUCATION</h3>
              <div className={cv.hr}></div>
              {Object.values(eduInfo).map((w, i) => {
                return (
                  <div key={i} className="mt-2 mb-5">
                    <div className={cv.headerDiv}>
                      <StopIcon className={cv.headerIcon} />
                      <div className={cv.headerDivInner}>
                        <h4 className={cv.title}>{w.uni}</h4>
                        <h6 className={cv.date}>{yyyy_mmToMMMMM_yyyy(w.end)}</h6>
                      </div>
                    </div>
                    <h5 className={cv.subHeader}>{w.degree}</h5>
                    <ul className={cv.list}>
                      {w.list.map((x, i) => {
                        return (
                          <li className={cv.li} key={i}>
                            {x}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </section>
          </div>

          <div className={cv.right}>
            <div className={cv.rightInner}>
              <div className={cv.divIcon}>
                <PhoneIcon className={cv.icon} />
                <div>{formatTel(info.tel) || "[(123)-456-7890]"}</div>
              </div>
              <div className={cv.divIcon}>
                <AtSymbolIcon className={cv.icon} />
                <div>{info.email || "[email@email.com]"}</div>
              </div>
              {info.location && (
                <div className={cv.divIcon}>
                  <MapPinIcon className={cv.icon} />
                  <div>{info.location}</div>
                </div>
              )}
              {info.web && (
                <div className={cv.divIcon}>
                  <LinkIcon className={cv.icon} />
                  <div>{info.web}</div>
                </div>
              )}
            </div>
            <section className={cv.rightInner}>
              <h3 className={cv.header}>TECHNICAL SKILLS</h3>
              {Object.entries(techInfo).map((o) => {
                return (
                  <div key={o[0]} className={cv.category}>
                    <h4 className={cv.categoryHeader}>{o[0]}</h4>
                    <ul>
                      {o[1] &&
                        o[1].map((x) => {
                          return (
                            <li className={cv.li} key={x}>
                              {x}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
            </section>
            <section className={cv.rightInner}>
              <h3 className={cv.header}>OTHER SKILLS</h3>
              {Object.entries(softInfo).map((o) => {
                return (
                  <div key={o[0]} className={cv.category}>
                    <h4 className={cv.categoryHeader}>{o[0]}</h4>
                    <ul>
                      {o[1] &&
                        o[1].map((x) => {
                          return (
                            <li className={cv.li} key={x}>
                              {x}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Resume;

Resume.propTypes = {
  info: PropTypes.object,
  eduInfo: PropTypes.object,
  workInfo: PropTypes.object,
  techInfo: PropTypes.object,
  softInfo: PropTypes.object,
};
