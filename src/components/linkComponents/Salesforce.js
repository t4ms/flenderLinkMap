import React from "react";

import elviraGriot from "./../../image/png/flender-favicon.png";
import dalinaAst from "./../../image/png/flender-favicon.png";
import irinaMitu from "./../../image/png/flender-favicon.png";
import zamfiraIosif from "./../../image/png/flender-favicon.png";

const people = [
  {
    id: 1,
    name: "Elvira Griot",
    imageUrl: elviraGriot,
    descriptionDe: "[25 Jahre in agribusiness; Summit Agro; Nufarm]",
    descriptionEn: "[25 years in agribusiness; Summit Agro; Nufarm]",
    position: "Commercial & Admin",
  },
  {
    id: 2,
    name: "Zamfira Iosif",
    imageUrl: zamfiraIosif,
    descriptionDe: "[28 Jahre in agribusiness; Regi Committee at MOA; Summit Agro ; Nufarm]",
    descriptionEn: "[28 years in agribusiness; Regi Committee at MOA; Summit Agro ; Nufarm]",
    position: "Development & Marketing",
  },
  {
    id: 3,
    name: "Daliana Ast",
    imageUrl: dalinaAst,
    descriptionDe: "[26 Jahre in agribusiness; Oltchim; Nufarm]",
    descriptionEn: "[26 years in agribusiness; Oltchim; Nufarm]",
    position: "National Sales Manager",
  },
  {
    id: 4,
    name: "Irina Mitu",
    imageUrl: irinaMitu,
    descriptionDe: "[26 Jahre in agribusiness business; Oltchim; Agrimatco; Nufarm]",
    descriptionEn: "[26 years in agribusiness business; Oltchim; Agrimatco; Nufarm]",
    position: "Sales Manager",
  },

];

export default function Salesforce(props) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        {props.lang === "de" ? "COLINSONIA Advice ist das neue gemeinsame Start-up-Projekt, das von einem soliden Expertenteam aufgebaut wurde." :
         "COLINSONIA Advice is a new joint start-up project built by a solid team of experts."}
        
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
                      <h3 className="text-md font-semibold text-fgDefault-black">{item.name}</h3>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-fgDefault-black bg-opacity-50 text-white">
                    {item.position}
                        </span>
                    </div>
                    <p className="text-sm text-fgDefault-dark">
                    {props.lang === "de" ? item.descriptionDe : item.descriptionEn}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
