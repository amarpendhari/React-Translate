import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="text-gray-700 body-font bg-light">
          <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={logo} className="App-logo" alt="logo" />
              <span className="ml-3 text-xl">React Translator</span>
            </p>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link to="/" className="mr-5 hover:text-gray-900">
                Translate Lang
              </Link>
              <Link to="/detect" className="mr-5 hover:text-gray-900">
                Detect Lang
              </Link>
            </nav>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
