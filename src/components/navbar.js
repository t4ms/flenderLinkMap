/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";

import FleLogoWhite from "../image/svg/Fle-Logo_white.svg";
import FleLogoBlue from "../image/svg/Fle-Logo_blue.svg";
import langDe from "../image/svg/lang_de.svg";
import langEn from "../image/svg/lang_en.svg";


import { Popover, Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <>
        {/* Desktop ANSICHT --> */}

        <Popover className={classNames(this.props.background, "relative z-40")}>
          <div className="flex justify-between items-center px-5 py-4 justify-start">
            <div>
              <a href="/" className="flex">
                <span className="sr-only">Flender</span>
                <img
                  className="pb-2 h-8 w-auto"
                  src={
                    this.props.text === "black"
                      ? FleLogoBlue
                      : FleLogoWhite
                  }
                  alt="formgroups"
                />
              </a>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-36 inset-auto ml-6">
            <a href="/">
            <h1 className="block px-4 py-2 text-2xl text-blue-medium">
              Link Map
            </h1>
            </a>
            </div>

 
            
              {/* Language/Bell dropdown */}

              <div className="absolute inset-y-0 right-0 flex items-center pr-5 inset-auto ml-6">

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="rounded-full hover:border-blue-dark border-2 border-blue-medium flex text-sm rounded-full">
                    <span className="sr-only">Choose Language</span>

                    {this.props.lang === "de" ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={langDe}
                        alt="Deutsch"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={langEn}
                        alt="English"
                      />
                    )}
                  </Menu.Button>
                </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={(e) => this.props.handleLangHome("de")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <img
                            className="h-8 w-8 rounded-full inline"
                            src={langDe}
                            alt="Deutsch"
                          />
                          Deutsch
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={(e) => this.props.handleLangHome("en")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <img
                            className="h-8 w-8 rounded-full inline"
                            src={langEn}
                            alt="English"
                          />
                          English
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
              </Menu>
            </div>
            </div>
          
        </Popover>
      </>
    );
  }
}

export default Navbar;
