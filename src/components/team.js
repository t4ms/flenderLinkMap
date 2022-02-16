// components/Team.js

import React, { useState } from "react";

import Navbar from "./navbar";

import formgroupMap from "./../image/svg/formgroupMapBlack.svg";
import formgroupIcon from './../image/svg/formgroupLogoBlack.svg'
import colinsoniaLogo from './../image/png/logoColinsonia.png'

import FormgroupTeam from "./contentTeam/formgroupTeam";


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
                formgroup Network
              </h2>
              <p className="mt-1 text-4xl font-semibold text-fgDefault-darker sm:text-2xl sm:tracking-tight lg:text-4xl">
                Mit unserem Netzwerk zum nachhaltigen Wachstum.
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-fgDefault-black">
                Unsere Netwerk besteht aus branchen Spezialisten und fachlichen
                Experten. <br />
                Wir sind ein offenes Netzwerk - werde Teil davon.
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
                title="Argentina"
                onClick={() => setShowModal(true) & setModal("colinsoniaTeam")}
              ></button>
              <div className="point egypt tippy" title="Colombia"></div>
              <div className="point singapur tippy" title="Panamá"></div>
            </div>
          </div>
        </div>
      </div>
      {/* OVERLAY */}
      {showModal ? (
        <>
          <div className="justify-center sm:top-4 md:top-12 lg:top-12 flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="mt-24 lg:mt-0 md:mt-0 relative w-full my-6 mx-2 md:mx-32 lg:mx-64">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-fgDefault-black rounded-t">
                {modal==="formgroupTeam" ? <img className="w-64" alt="formgroup logo" src={formgroupIcon} />
                : modal==="colinsoniaTeam" ? <img className="w-48" alt="colinsonia Logo" src={colinsoniaLogo} />
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
                {modal==="formgroupTeam" ? <FormgroupTeam /> : ""}
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
    </>
  );
}
