import React from "react";
import FirmCard from "../FirmCard/FirmCard";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FirmFact() {
  const buttons = [
    {
      text: "This is a two lines button that terminates with",
      line: false,
      icon: true,
      status: "enabled",
    },
    {
      text: "This is a two lines button that terminates with",
      line: false,
      icon: true,
      status: "enabled",
    },
    {
      text: "This is a one line button",
      line: false,
      icon: false,
      status: "enabled",
    },
    {
      text: "This is a two lines button that terminates with",
      line: false,
      icon: true,
      status: "enabled",
    },
    {
      text: "This is a two lines button that terminates with",
      line: false,
      icon: true,
      status: "enabled",
    },
    {
      text: "This is a two lines button that terminates with",
      line: true,
      icon: true,
      status: "disabled",
    },
    {
      text: "This is a two lines button that terminates with",
      line: false,
      icon: true,
      status: "enabled",
    },
  ];
  return (
    <div className="bg-primary h-screen">
      <div className="p-10 lg:w-10/12 2xl:w-8/12 mx-auto">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-4xl z-0 font-extralight"
          />
        </div>
        <h1 className="text-left text-white text-6xl z-10">Firm Facts</h1>
        <hr className="mt-10 bg-slate-100 opacity-20 mb-10" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 grid-rows-2">
          <div className="bg-white p-4 row-span-2">
            <FirmCard
              appearance="default"
              extraheight="1"
              buttons={buttons[0]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="border"
              extraheight="0"
              buttons={buttons[1]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="default"
              extraheight="0"
              buttons={buttons[2]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="border"
              extraheight="0"
              buttons={buttons[3]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="default"
              extraheight="0"
              buttons={buttons[4]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="border"
              extraheight="0"
              buttons={buttons[5]}
            />
          </div>
          <div className="bg-white">
            <FirmCard
              appearance="default"
              extraheight="0"
              buttons={buttons[6]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirmFact;
