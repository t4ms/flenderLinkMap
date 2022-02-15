// components/Team.js

import React from "react";

import Navbar from "./navbar";

import formgroupMap from "./../image/svg/formgroupMapBlack.svg";

import "./map.scss";

export default function team(props) {
  return (
    <>
      <div className="h-full w-full">
        <Navbar
          lang={props.lang}
          text="black"
          handleLangHome={props.handleLang}
        />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="inline-flex items-center px-3 py-0.5 rounded-full text-md font-medium bg-gray-200 text-fgDefault-black uppercase">
              formgroup Network
            </h2>
            <p className="mt-1 text-4xl font-semibold text-fgDefault-darker sm:text-5xl sm:tracking-tight lg:text-4xl">
              Mit unserem Netzwerk zum nachhaltigen Wachstum.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-fgDefault-black">
            Unsere Netwerk besteht aus branchen Spezialisten und fachlichen Experten. <br/>Wir sind ein offenes Netzwerk - werde Teil davon.
            </p>
          </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="container">
            <div className="map-container w-full">
              <img alt="formgroupmap" src={formgroupMap} />
              <div class="point europe tippy" title="Brasil"></div>
              <div class="point romania tippy" title="Argentina"></div>
              <div class="point egypt tippy" title="Colombia"></div>
              <div class="point singapur tippy" title="Panamá"></div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}
