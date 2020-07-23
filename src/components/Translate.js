import React, { Component } from "react";
import $ from "jquery";

export class Translate extends Component {
  state = {
    lang1: "en",
    lang1txt: "",
    lang2: "en",
    lang2txt: ""
  };
  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  translate = e => {
    var that = this;
    console.log(this.state);
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      method: "POST",
      headers: {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_SECRET}`,
        "accept-encoding": "application/gzip",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        source: this.state.lang1,
        q: this.state.lang1txt,
        target: this.state.lang2
      }
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      //console.log(response.data.translations[0].translatedText);
      let res = response.data.translations[0].translatedText;
      that.setState({ lang2txt: res });
    });
  };

  render() {
    return (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-12 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Translate Language
            </h1>
            <div className="flex flex-wrap -mx-4 text-center">
              <div className="sm:w-1/2 mb-2 px-4">
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Select Initial Language
                </h2>
                <div className="p-2 w-full">
                  <select
                    value={this.state.lang1}
                    name="lang1"
                    onChange={this.handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  >
                    <option value="en">English</option>
                    <option value="mr">Marathi</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
                <div className="p-2 w-full">
                  <textarea
                    name="lang1txt"
                    onChange={this.handleChange}
                    value={this.state.lang1txt}
                    className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                    placeholder="Enter text here"
                  ></textarea>
                </div>
              </div>
              <div className="sm:w-1/2 mb-2 px-4">
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Select Translated Language
                </h2>
                <div className="p-2 w-full">
                  <select
                    value={this.state.lang2}
                    name="lang2"
                    onChange={this.handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  >
                    <option value="en">English</option>
                    <option value="mr">Marathi</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
                <div className="p-2 w-full">
                  <textarea
                    name="lang2txt"
                    onChange={this.handleChange}
                    value={this.state.lang2txt}
                    className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                    placeholder="Translation"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={this.translate}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Translate
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Translate;
