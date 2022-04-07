import React from "react";



export default function formgroupTeam(props) {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        {props.lang === "de" ? "Wir stehen im Kontakt mit verschiedenen Experten in der Region Asien-Pazifik. Wir unterstützen uns gegenseitig Marktbedingungen zu erkennen, Lieferketten zu optimieren und dem Handel gezielte Lösungen anzubieten."
         : "We are in contact with various experts in the Asia-Pacific region. We support each other in identifying market conditions, optimising supply chains and offering targeted solutions to the trade."}       
        </p>
        <div>
          
        </div>
      </div>
    </>
  );
}
