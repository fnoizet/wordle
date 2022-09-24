import { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import ListAttempts from "./components/ListAttempts";
import Input from "./components/Input";
import Restart from "./components/Restart";
import Store from "./reducers/store";
import Header from "./components/Header";

export default function App() {
  const [win, setWin] = useState(false);
  const wordToFind = Store.getState().wordToFind;
  const guesses = useSelector((state) => {
    return state.guesses;
  });
  const lastGuess = useSelector(
    (state) => state.guesses[state.guesses.length - 1]
  );
  const lang = useSelector(state => state.lang)
  
  useEffect(() => {
    Store.dispatch({ type: "RESTART" });
  }, []);

  useEffect(() => {
    if (lastGuess === wordToFind) {
      setWin(true);
    } else {
      setWin(false);
    }
  }, [lastGuess, wordToFind]);

  return (
    <div className="App">
      <Header/>
      <ListAttempts wordToFind={wordToFind} guesses={guesses} />
      {!win && wordToFind && <Input length={wordToFind.length} />}
      {win && <div>{lang === "EN" ? "You win" : "Trouvé"} !</div>}
      <Restart />
    </div>
  );
}
