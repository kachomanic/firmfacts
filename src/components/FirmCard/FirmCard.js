import React from "react";
import Button from "../Button/Button";

function FirmCard({ appearance, extraheight, buttons }) {
  return (
    <div className={`${appearance === "default" ? "hover:bg-bgcard" : ""}`}>
      <div
        className={`${
          appearance === "default"
            ? "content-start"
            : "hover:border-green-400 border-8 content-center border-white"
        } h-40 content-center p-2`}
      >
        <Button
          text={buttons.text}
          line={buttons.line}
          icon={buttons.icon}
          status={buttons.status}
        />
      </div>
    </div>
  );
}

export default FirmCard;
