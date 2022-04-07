// components/Team.js

import React, { useState } from "react";

import Footer from './footer'

import Navbar from "./navbar";

import formgroupMap from "./../image/svg/formgroupMapBlack.svg";
import formgroupIcon from './../image/svg/formgroupLogoBlack.svg'
import colinsoniaLogo from './../image/png/logoColinsonia.png'

import FormgroupTeam from "./contentTeam/formgroupTeam";
import ColinsoniaTeam from "./contentTeam/colinsoniaTeam";
import RegionMEATeam from "./contentTeam/regionMEATeam";
import GlobalExpertTeam from "./contentTeam/globalExpertTeam";


import "./map.scss";

export default function Team(props) {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState("");

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
              <h2 className="mb-4 inline-flex items-center px-3 py-0.5 rounded-full text-md font-medium bg-gray-200 text-fgDefault-black uppercase">
              {props.lang === "de" ? "formgroup Netzwerk": "formgroup Network"}
              </h2>
              <p className="mt-1 text-4xl font-semibold text-fgDefault-darker sm:text-2xl sm:tracking-tight lg:text-4xl">
              {props.lang === "de" ? "Mit unserem Netzwerk zum nachhaltigen Wachstum.": "With our network to sustainable growth."}
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-fgDefault-black">
              {props.lang === "de" ? "Unsere Netwerk besteht aus branchen Spezialisten und fachlichen Experten.": "Our network consists of industry specialists and technical experts."}
              <br/>
              {props.lang === "de" ? "Wir sind ein offenes Netzwerk - werde Teil davon.": "We are an open network - become part of it."}
                 
      
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="container">
            <div className="map-container w-full">
              <img alt="formgroupmap" src={formgroupMap} />
              <button
                className="point europe"
                title="formgroup"
                type="button"
                onClick={() => setShowModal(true) & setModal("formgroupTeam")}
              ></button>
              <button
                className="point romania tippy"
                title="colinsonia"
                onClick={() => setShowModal(true) & setModal("colinsoniaTeam")}
              ></button>
              <button
                className="point egypt tippy"
                title="Region MEA"
                onClick={() => setShowModal(true) & setModal("regionMEATeam")}
              ></button>
              <button
                className="point singapur tippy"
                title="Gobal Experts Asian Pazific"
                onClick={() => setShowModal(true) & setModal("globalexpertTeam")}
              ></button>
            </div>
          </div>
        </div>
      </div>
      {/* OVERLAY */}
      {showModal ? (
        <>
          <div className="justify-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="mt-4 lg:mt-12 md:mt-12 relative w-full mx-2 md:mx-32 lg:mx-64">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-fgDefault-black rounded-t">
                {modal==="formgroupTeam" ? <img className="w-64" alt="formgroup logo" src={formgroupIcon} />
                : modal==="colinsoniaTeam" ? <img className="w-48" alt="colinsonia Logo" src={colinsoniaLogo} />
                : modal==="regionMEATeam" ? <h3 className="text-3xl font-semibold">Region MEA</h3>
                : modal==="globalexpertTeam" ? <h3 className="text-3xl font-semibold">Formgroup Global Expert</h3>
                : <h3 className="text-3xl font-semibold">{modal}</h3>}
                  
                  <button
                    className="p-1 text-fgDefault-black ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false) & setModal("")}
                  >
                    <span className="text-fgDefault-black block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {modal==="formgroupTeam" ? <FormgroupTeam lang={props.lang}/> 
                : modal==="colinsoniaTeam" ?  <ColinsoniaTeam lang={props.lang}/>
                : modal==="regionMEATeam" ?  <RegionMEATeam lang={props.lang}/>
                : modal==="globalexpertTeam" ?  <GlobalExpertTeam lang={props.lang}/>
                : ""}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-fgDefault-black rounded-b">
                <button
                    className="p-1 text-fgDefault-black ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false) & setModal("")}
                  >
                    <span className="text-fgDefault-black block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Footer />
    </>
  );
}
