import Store from "../reducers/store";
import "./LangSelector.css";

export default function () {
  const handleChangeLang = (e) => {
    Store.dispatch({ type: "SETLANG", payload: e.target.value });
    Store.dispatch({ type: "RESTART" });
  };

  return (
    <div className="langSelector">
      <select name="lang" onChange={handleChangeLang}>
        <option value="FR">Français</option>
        <option value="EN">English</option>
      </select>
    </div>
  );
}
