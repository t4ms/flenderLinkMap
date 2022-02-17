import React from "react";

import formgroupExpert from "../../image/svg/formgroup_expert.svg";

const people = [
  {
    id: 1,
    name: "Ali Nenai",
    imageUrl: formgroupExpert,
    description: "[25+ years Experience in AG Business in MNCs]",
    position: "Managing Director",
  },
  {
    id: 2,
    name: "Mohamed Adel",
    imageUrl: formgroupExpert,
    description: "[15+ years Experience in Regulatory in MNCs]",
    position: "Regulatory Manager",
  },
  {
    id: 3,
    name: "Maiar Iraqi",
    imageUrl: formgroupExpert,
    description: "[3+ years Experience in AG business MNCs]",
    position: "Admin & Marketing Support",
  },
  {
    id: 4,
    name: "Ahmed Emam",
    imageUrl: formgroupExpert,
    description: "[10+ years experience in AG industry in MNCs]",
    position: "Sales Manager",
  },

];

export default function formgroupTeam() {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        Durch unser Expertenteam in der Middle-East-Africa Region können wir regionale Marktbedingungen einschätzen und wissen diese zu nutzen.
        </p>
        <div>
          <ul className="w-full divide-y divide-gray-200">
            {people.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex space-x-3">
                  <img
                    className="h-full w-16 object-cover"
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
