import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Store from "../reducers/store";
import VirtualKeyboard from "./VirtualKeyboard";

const isMobile = "ontouchstart" in document.documentElement ? true : false;

export default function ({ length }) {
  const [textInput, setTextInput] = useState("");
  const lang = useSelector((state) => state.lang);

  const handleKeyDown = useCallback(
    (key) => {
      if (key === "Backspace") {
        setTextInput(textInput.slice(0, textInput.length - 1));
      }

      if (/^[a-zA-Z]$/.test(key) && textInput.length < length) {
        setTextInput(textInput + key.toUpperCase());
      }

      if (key === "Enter" && textInput.length === length) {
        Store.dispatch({ type: "GUESS", payload: textInput });
        setTextInput("");
      }
    },
    [textInput, length]
  );

  useEffect(() => {
    const handle = (e) => handleKeyDown(e.key);
    window.addEventListener("keydown", handle);

    window.scrollTo(0, document.body.offsetHeight);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handleKeyDown]);

  return (
    <div className="inputZone">
      <div className="propLine">
        {[...Array(length)].map((e, i) => (
          <div className="letter" key={i}>
            {textInput.split("")[i]}
          </div>
        ))}
      </div>
      {isMobile && <VirtualKeyboard lang={lang} callback={(key) => handleKeyDown(key)} />}
    </div>
  );
}
