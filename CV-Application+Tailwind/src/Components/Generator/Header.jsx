import PropTypes from "prop-types";

import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

import { buttonSmall, container } from "../css-helpers";

function Header({ dataLoad, dataDelete, info }) {
  const printPDF = () => {
    const resume = document.getElementById("resume");

    if (!resume) {
      return;
    }

    const clone = resume.cloneNode(true);
    document.body.appendChild(clone);
    clone.style.scale = "none";
    clone.style.transform = "translateY(5000px)";

    html2canvas(clone)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "px", "letter");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        if (pdfHeight > pdf.internal.pageSize.getHeight()) {
          const pages = Math.ceil(pdfHeight / pdf.internal.pageSize.getHeight());

          let position = pdf.internal.pageSize.getHeight();

          for (let i = 1; i < pages; i++) {
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, -position, pdfWidth, pdfHeight);

            position = position + pdf.internal.pageSize.getHeight();
          }
        }

        pdf.save(
          `CV - ${info.firstName || "[Name]"} ${info.secondName || "[Surname]"}.pdf`
        );
      })
      .then(() => {
        document.body.removeChild(clone);
      });
  };

  return (
    <header className={`${container} flex-row justify-evenly items-center`}>
      <div>
        <h1 className="text-6xl text-sky-800 font-bold">CV Generator</h1>
        <h2 className="text-sm pt-1 italic text-sky-800">
          by&nbsp;
          <a
            href="https://github.com/zuzOup/"
            target="_blank"
            className="font-medium hover:text-lime-400"
          >
            Zuzana O.
          </a>
        </h2>
      </div>
      <div className="flex flex-col h-full justify-between">
        <button className={buttonSmall} onClick={dataLoad}>
          Load mock data
        </button>
        <button className={buttonSmall} onClick={dataDelete}>
          Delete all
        </button>
        <button className={buttonSmall} onClick={printPDF}>
          Download PDF
        </button>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  dataLoad: PropTypes.func,
  dataDelete: PropTypes.func,
  printPDF: PropTypes.func,
  info: PropTypes.object,
};
