// components/Team.js

import React, {useState} from "react";

import Navbar from "./navbar";

import formgroupMap from "./../image/svg/formgroupMapBlack.svg";

import "./map.scss";

export default function Team(props) {
  const [showModal, setShowModal] = useState(false);

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
              <button className="point europe" title="formgroup" type="button" onClick={() => setShowModal(true)}></button>
              <div className="point romania tippy" title="Argentina"></div>
              <div className="point egypt tippy" title="Colombia"></div>
              <div className="point singapur tippy" title="Panamá"></div>
            </div>
          </div>
        </div>
      </div>
      {/* OVERLAY */}
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 text-fgDefault-black ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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
