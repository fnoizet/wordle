import "./Restart.css";
import Store from "../reducers/store";

import { useRef } from "react";
import { useSelector } from "react-redux";

export default function () {
  const button = useRef();

  const lang = useSelector((state) => state.lang);

  const handleClickRestart = () => {
    button.current.blur();
    Store.dispatch({ type: "RESTART" });
  };

  return (
    <div className="buttonZone">
      <button ref={button} onClick={handleClickRestart}>
        {lang === "EN" ? "Restart" : "Recommencer"}
      </button>
    </div>
  );
}
