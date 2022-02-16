import React from "react";

import hugoSchweers from "../../image/jpg/formgroup-hugoschweers.jpg";
import berndBund from "../../image/jpg/formgroup-berndBund.jpg";
import berndBelitz from "../../image/jpg/formgroup-berndbelitz.JPG";
import bernahrdOverberg from "../../image/jpg/formgroup-bernhardoverberg.jpg";

const people = [
  {
    id: 1,
    name: "Hugo Schweers",
    imageUrl: hugoSchweers,
    description: "[35+ years Experience in AG Business]",
    position: "Founder & CEO",
  },
  {
    id: 2,
    name: "Bernd Bund",
    imageUrl: berndBund,
    description: "[25+ years Experience ex Dow; GM AgroSolutions; Farmer]",
    position: "Development & Regulatory Manager",
  },
  {
    id: 3,
    name: "Bernd Belitz",
    imageUrl: berndBelitz,
    description: "[30+ years Experience in AG business ex Aventis; GM Lotus Agrar]",
    position: "Key Account Manager",
  },
  {
    id: 4,
    name: "Bernhard Overberg",
    imageUrl: bernahrdOverberg,
    description: "[+20 years experience in AG business ex Nufarm; GM Beiselen Group]",
    position: "Key Account Manager",
  },

];

export default function formgroupTeam() {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
          Die vier Experten der formgroup Europe.
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
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-fgDefault-black bg-opacity-50 text-white">
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
    </>
  );
}
