import React, { Component } from "react";
import ISO6391 from "iso-639-1";
import $ from "jquery";

export class Detect extends Component {
  state = {
    txt: "",
    langdetected: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  detect = e => {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      method: "POST",
      headers: {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_SECRET}`,
        "accept-encoding": "application/gzip",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        q: this.txt
      }
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
      console.log(ISO6391.getName("en"));
      console.log(response.data.detections[0].language);
    });
  };
  render() {
    return (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-12 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Detect Language
            </h1>
            <div className="-mx-4 text-center">
              <div className="mb-2 px-4">
                <h2 className="title-font text-2xl leading-relaxed text-base text-gray-900 mt-6 mb-3">
                  Enter Text to find out the Language
                </h2>
                <div className="p-2 w-full">
                  <textarea
                    name="txt"
                    onChange={this.handleChange}
                    value={this.state.txt}
                    className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-24 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                    placeholder="Enter text here"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={this.detect}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Detect
                </button>
              </div>
            </div>
           {this.langdetected ? ( <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              The Detected Language is {this.langdetected}
            </h2>) : (<p></p>)}
          </div>
        </section>
      </div>
    );
  }
}

export default Detect;
