// components/Contact.js

import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

import hugoSchweers from "../image/jpg/formgroup-hugoschweers.jpg";
import formgroupExpert from "../image/svg/formgroup_ExpertFrame.svg";

const people = [
  {
    id: 1,
    name: "Hugo Schweers",
    imageUrl: hugoSchweers,
    description: "hugo.schweers@formgroup.io",
    position: "Founder & CEO",
  },
  {
    id: 2,
    name: "Für allgemeine Anfragen",
    imageUrl: formgroupExpert,
    description: "info@formgroup.io",
    position: "Allgemein",
  },
];

const contact = (props) => {
  return (
    <>
      <Navbar
        lang={props.lang}
        text={"black"}
        handleLangHome={props.handleLang}
      />
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-fgDefault-black"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-fgDefault-black"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="relative z-10 mb-4">
                <div className="text-base max-w-prose lg:max-w-none">
                  <h2 className="inline-flex items-center px-3 py-0.5 my-4 rounded-full text-md font-medium bg-gray-200 text-fgDefault-black uppercase">
                    FORMGROUP
                  </h2>

                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fgDefault-black sm:text-3xl uppercase">
                    Kontakt
                  </p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Gerne kontaktieren Sie mich für alle Frage rund um unser
                    Netzwerk, unsere Plattformen und unsere Services und
                    Lösungen. Vielen Dank
                  </p>
                  <div>
                    <ul className="w-full divide-y divide-gray-200">
                      {people.map((item) => (
                        <li key={item.id} className="py-4">
                          <div className="flex space-x-3">
                            <img
                              className=" h-16 w-16 object-cover rounded-full"
                              src={item.imageUrl}
                              alt={item.name}
                            />
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-md font-semibold text-fgDefault-black">
                                  {item.name}
                                </h3>
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-fgDefault-black bg-opacity-50 text-white">
                                  {item.position}
                                </span>
                              </div>
                              <p className="text-sm text-fgDefault-dark">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-fgDefault-black lg:mt-0">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
