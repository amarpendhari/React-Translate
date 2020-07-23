import React from "react";

function About() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About this App
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-3">
              This App is a replica of Google Translate.<br></br> In this App we can
              Translate a Language from one to another<br></br> Also Detect a
              Language, just by typing or copying & pasting that Language.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
            >
              Know More About Languages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
