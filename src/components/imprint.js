import React, { Component } from "react";

import Navbar from "./navbar";

export default class imprint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <>
        <Navbar
          lang={this.props.lang}
          text={"black"}
          handleLangHome={this.props.handleLang}
        />
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-max lg:max-w-7xl mx-auto">
            <div className="relative z-10 mb-8 md:mb-2 md:px-6">
              <div className="text-base max-w-prose lg:max-w-none">
                <h2 className="leading-6 text-gray-500 font-semibold tracking-wide uppercase bg-white">
                  FORMGROUP
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-fgDefault-black sm:text-3xl bg-white">
                  Impressum
                </p>
              </div>
            </div>
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
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                  <div className="prose prose-indigo prose-lg text-fgDefault-black lg:max-w-none">
                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <br />
                    <h2 className="font-bold">formgroup</h2>
                    <p>
                      <br />
                      Hugo Schweers
                      <br />
                      Markt, 5<br />
                      46459 Rees
                    </p>
                    <br />
                    <h2>Kontakt</h2>
                    <p>E-Mail: info@formgroup.io</p>
                  </div>
                  <div className="mt-6 prose prose-indigo prose-lg text-fgDefault-black lg:mt-0">
                    <h2 className="font-bold">EU-Streitschlichtung</h2>
                    <p>
                      Die Europ&auml;ische Kommission stellt eine Plattform zur
                      Online-Streitbeilegung (OS) bereit:{" "}
                      <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://ec.europa.eu/consumers/odr/
                      </a>
                      .<br /> Unsere E-Mail-Adresse finden Sie oben im
                      Impressum.
                    </p>
                    <br />
                    <h2 className="font-bold">
                      Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                    </h2>
                    <p>
                      Wir sind nicht bereit oder verpflichtet, an
                      Streitbeilegungsverfahren vor einer
                      Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <p>
                      Quelle:{" "}
                      <a href="https://www.e-recht24.de/impressum-generator.html">
                        https://www.e-recht24.de/impressum-generator.html
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}