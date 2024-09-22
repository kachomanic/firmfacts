import React from "react";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ text, line, icon, status }) {
  return (
    <div
      className={`${
        status === "disabled"
          ? "bg-gray-500 select-none"
          : "bg-slate-600 cursor-pointer"
      } w-full rounded-full leading-3 p-2 ${
        line ? "border-4 border-green-400" : ""
      }`}
    >
      <div className="text-center">
        {icon && (
          <FontAwesomeIcon icon={faSearch} className="text-white mr-2" />
        )}
        <span className="text-xs text-white">{text}</span>
      </div>
    </div>
  );
}

export default Button;
