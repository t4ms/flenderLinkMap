import React from "react";

import hugoSchweers from "./../../image/png/flender-favicon.png";
import berndBund from "./../../image/png/flender-favicon.png";
import berndBelitz from "./../../image/png/flender-favicon.png";
import bernahrdOverberg from "./../../image/png/flender-favicon.png";

const people = [
  {
    id: 1,
    name: "Hugo Schweers",
    imageUrl: hugoSchweers,
    descriptionDe: "[35+ Jahre Erfahrung in AG Business ex Aventis, Nufarm, Agravis (Vorstand-Agrar) ]",
    descriptionEn: "[35+ years Experience in AG Business ex Aventis, Nufarm, Agravis (Boardmember-Agrar) ]",
    position: "Founder & CEO",
  },
  {
    id: 2,
    name: "Bernd Bund",
    imageUrl: berndBund,
    descriptionDe: "[25+ Jahre Erfahrung ex Dow; GM AgroSolutions; Farmer]",
    descriptionEn: "[25+ years Experience ex Dow; GM AgroSolutions; Farmer]",
    position: "Development & Regulatory Manager",
  },
  {
    id: 3,
    name: "Bernd Belitz",
    imageUrl: berndBelitz,
    descriptionDe: "[30+ Jahre Erfahrung in AG business ex Aventis; GM Lotus Agrar]",
    descriptionEn: "[30+ years Experience in AG business ex Aventis; GM Lotus Agrar]",
    position: "Key Account Manager",
  },
  {
    id: 4,
    name: "Bernhard Overberg",
    imageUrl: bernahrdOverberg,
    descriptionDe: "[+20 Jahre Erfahrung in AG business ex Nufarm; GM Beiselen Group]",
    descriptionEn: "[+20 years experience in AG business ex Nufarm; GM Beiselen Group]",
    position: "Key Account Manager",
  },

];

export default function formgroupTeam(props) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        {props.lang === "de" ? "Die vier Experten der formgroup Europa." : "The four experts from formgroup Europe."}
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
