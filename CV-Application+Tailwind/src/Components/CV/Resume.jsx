import PropTypes from "prop-types";

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
  return (
    <div className={cv.resume} id="resume">
      <div className={cv.left}>
        <div className={`${cv.basicInfo} ${cv.leftInner}`}>
          <div className={`${cv.h1} flex`}>
            <div>{info.firstName || "[First]"}</div>&nbsp;
            <div>{info.secondName || "[Second]"}</div>
          </div>
          <div className={cv.h2}>{info.title || "[Title]"}</div>
          <div className={cv.sum}>{info.summary || "[Summary]"}</div>
        </div>
        <div className={cv.leftInner}>
          <div className={cv.header}>WORK EXPERIENCE</div>
          <div className={cv.hr}></div>
          {Object.values(workInfo).map((w, i) => {
            return (
              <div key={i} className="mt-2 mb-5">
                <div className={cv.headerDiv}>
                  <StopIcon className={cv.headerIcon} />
                  <div className={cv.headerDivInner}>
                    <div className={cv.title}>{w.title}</div>
                    <div className={cv.date}>{`${yyyy_mmToMMMMM_yyyy(
                      w.start
                    )} - ${yyyy_mmToMMMMM_yyyy(w.end)}`}</div>
                  </div>
                </div>
                <div className={cv.subHeader}>{w.company}</div>
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
        </div>
        <div className={cv.leftInner}>
          <div className={cv.header}>EDUCATION</div>
          <div className={cv.hr}></div>
          {Object.values(eduInfo).map((w, i) => {
            return (
              <div key={i} className="mt-2 mb-5">
                <div className={cv.headerDiv}>
                  <StopIcon className={cv.headerIcon} />
                  <div className={cv.headerDivInner}>
                    <div className={cv.title}>{w.uni}</div>
                    <div className={cv.date}>{yyyy_mmToMMMMM_yyyy(w.end)}</div>
                  </div>
                </div>
                <div className={cv.subHeader}>{w.degree}</div>
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
        </div>
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
        <div className={cv.rightInner}>
          <div className={cv.header}>TECHNICAL SKILLS</div>
          {Object.entries(techInfo).map((o) => {
            return (
              <div key={o[0]} className={cv.category}>
                <div className={cv.categoryHeader}>{o[0]}</div>
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
        </div>
        <div className={cv.rightInner}>
          <div className={cv.header}>OTHER SKILLS</div>
          {Object.entries(softInfo).map((o) => {
            return (
              <div key={o[0]} className={cv.category}>
                <div className={cv.categoryHeader}>{o[0]}</div>
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
        </div>
      </div>
    </div>
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
