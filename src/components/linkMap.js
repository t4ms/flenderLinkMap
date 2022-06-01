// components/Team.js

import React, { useState } from "react";

import Footer from './footer'

import Navbar from "./navbar";

import FlenderLinkMap from "./../image/svg/FlenderLinkMap.svg";

import LinkIcon from './../image/svg/link.svg';
import LinkSalesforce from './../image/svg/linkSalesforce.svg';
import LinkSap from './../image/svg/linkSAP.svg';

import SapComp from "./linkComponents/Sap";
import SalesforceComp from "./linkComponents/Salesforce";
import RegionMEATeam from "./linkComponents/regionMEATeam";
import GlobalExpertTeam from "./linkComponents/globalExpertTeam";


import "./map.scss";

export default function Team(props) {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState("");

  return (
    <>
      <div className="h-full w-full bg-blue-dark">
        <Navbar
          lang={props.lang}
          background="bg-blue-black"
          text="black"
          handleLangHome={props.handleLang}
        />

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="container">
            <div className="map-container w-full">
              <img alt="FlenderLinkMap" src={FlenderLinkMap} />
              <button
                className="point sapStyle tippy"
                title="formgroup"
                type="button"
                onClick={() => setShowModal(true) & setModal("sapState")}
              ></button>
              <button
                className="point salesforceStyle tippy"
                title="salesforce"
                onClick={() => setShowModal(true) & setModal("salesforceState")}
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
                {modal==="sapState" ? <img className="w-64" alt="sap logo" src={LinkSap} />
                : modal==="salesforceState" ? <img className="w-48" alt="salesforce Logo" src={LinkSalesforce} />
                : modal==="regionMEATeam" ? <h3 className="text-3xl font-semibold"  src={LinkIcon}>Region MEA</h3>
                : modal==="globalexpertTeam" ? <h3 className="text-3xl font-semibold"  src={LinkIcon}>Formgroup Global Expert</h3>
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
                {modal==="sapState" ? <SapComp lang={props.lang}/> 
                : modal==="salesforceState" ?  <SalesforceComp lang={props.lang}/>
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

      <Footer 
            lang={props.lang}
      />
    </>
  );
}
