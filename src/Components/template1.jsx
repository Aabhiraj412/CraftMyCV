import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
const Template1 = () => {
  const pdfRef = useRef();
  const location = useLocation();
  console.log(location);
  const generatePDF = () => {
    const element = pdfRef.current;

    const options = {
      margin: [2, 5, 5, 5],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, useCORS: true, allowTaint: true }, // Improves resolution
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="bg-gray-100 py-2 px-4 min-h-screen">
      <div
        className="container mx-auto bg-white rounded-lg shadow-lg p-4  max-w-3xl lg:max-w-5xl text-wrap  "
        ref={pdfRef}
      >
        {/*................ Header........................... */}

        <header className="text-center mb-9">
          <h1 className="text-4xl md:text-2xl font-bold uppercase tracking-wider">
            {location.state.name}
          </h1>
          <p className=" text-sm md:text-base text-gray-600">
            {location.state.email}
          </p>
        </header>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-3 gap-4 md:gap-4 text-wrap md:text-balance ">
          <div className="bg-gray-100 px-4 pt-2 md:py-2">
            {/* ...........Contact Section ........................*/}
            <section className="mb-8 md:mb-8 ">
              <h2 className="text-lg  md:text-lg font-bold uppercase text-gray-800 border-b pb-1">
                Contact
              </h2>
              <p className="mt-6 text-gray-600 text-sm md:text-base ">
                <span className="block mt-2">📞 {location.state.phoneno}</span>
                <span className="block mt-2">📧 {location.state.linkedin}</span>
                <span className="block mt-2">🌐 {location.state.github}</span>
                <span className="block mt-2">🏠 {location.state.address}</span>
              </p>
            </section>

            {/*................... Skills Section.......................... */}
            <section className="mb-8 mt-16 ">
              <h2 className="text-lg  font-bold uppercase text-gray-800 border-b pb-1 ">
                Skills
              </h2>
              <ul className=" mt-4 list-disc pl-0">
                {location.state?.skills?.map((skills, index) => (
                  <li
                    key={index}
                    className="relative pl-6 text-gray-700 text-sm md:text-base flex items-center"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-gray-800">
                      •
                    </span>
                    {skills}
                  </li>
                ))}
              </ul>
            </section>

            {/*....................... Education Section........................ */}
            <section className="mb-8 md:mt-16">
              <div>
                <h2 className="text-lg font-bold uppercase text-gray-800 border-b pb-1 mt-5">
                  Education
                </h2>
                <h3 className="font-bold mt-6 md:text-sm">
                  {location.state.highschoolName}{" "}
                </h3>
                <p className="text-gray-500 md:text-sm ">
                  {location.state.hYOC} | {location.state.hcity}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="font-bold md:text-sm">
                  {location.state.intermediateschoolName}
                </h3>
                <p className="text-gray-500 md:text-sm">
                  {location.state.iyoc} | {location.state.icity}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="font-bold md:text-sm">
                  {location.state.collegeName}
                </h3>
                <p className="text-gray-500 md:text-sm">
                  {location.state.collegeYOC} | {location.state.collegecity}
                </p>
              </div>
            </section>
          </div>

          {/*.................. Right Column...................................... */}
          <div className="col-span-2 md:mt-0">
            <section>
              <h2 className="text-lg  md:text-lg font-bold uppercase text-gray-800 border-b pb-1">
                PROJECTS
              </h2>

              <section className="mb-6 mt-6">
                <div className="mt-6 ">
                  {location.state?.Projects?.map((project, index) => (
                    <div key={index} className="mt-4 ">
                      <h3 className="font-semibold text-gray-800 mt-4 md:text-base">
                        {project.title}
                      </h3>
                      <p className="text-s md:text-sm text-gray-900 mt-2">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* {.....................................Certificate section.........................} */}
              <div className="mt-6">
                <h3 className="text-lg font-bold uppercase text-gray-800 border-b pb-1 mt-10">
                  CERTIFICATIONS
                </h3>

                <div className="mt-4">
                  <ul className="list-disc list-inside">
                    {location.state?.awards?.map((awards, index) => (
                      <li
                        key={index}
                        className="relative pl-6 text-gray-700 text-sm md:text-base flex items-center"
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-gray-800">
                          •
                        </span>
                        {awards}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-centre mt-6">
        <button
          className=" bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-150 mx-auto"
          onClick={generatePDF}
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Template1;
