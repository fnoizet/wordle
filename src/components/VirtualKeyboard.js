import "./VirtualKeyboard.css";

export default function ({ lang = "FR", callback }) {
  const keyboardLines =
    lang === "FR"
      ? ["azertyuiop", "qsdfghjklm", "wxcvbn"]
      : ["qwertyuiop", "asdfghjkl", "wxcvbnm"];

  const handleKey = (key) => {
    callback(key);
  };

  return (
    <div className="VirtualKeyboard">
      <div className="KBLines">
        {keyboardLines.map((line, i) => {
          return (
            <div className="KBLine" key={i}>
              {line.split("").map((letter, index) => (
                <div
                  className="KBLetter"
                  key={index}
                  onClick={() => handleKey(letter)}
                >
                  {letter}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="KBActions">
        <div className="KBAction" onClick={() => handleKey("Backspace")}>
          &lt;=
        </div>
        <div className="KBAction" onClick={() => handleKey("Enter")}>
          Enter
        </div>
      </div>
    </div>
  );
}
