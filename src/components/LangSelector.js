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
        <option value="FR">FR</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
}
