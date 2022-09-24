import { getRandomWord as getRandomWordFR } from "../words-FR";
import { getRandomWord as getRandomWordEN } from "../words-EN";

const initialState = {
  lang: "FR",
  guesses: [],
  wordToFind: null
};

function wordleReducer(state = initialState, action) {
  switch (action.type) {
    case "SETLANG":
      return { ...state, lang: action.payload };
    case "RESTART":
      return {
        ...state,
        wordToFind: state.lang === "FR" ? getRandomWordFR() : getRandomWordEN(),
        guesses: []
      };

    case "GUESS":
      return {
        ...state,
        guesses: [...state.guesses, action.payload]
      };
    default:
      return state;
  }
}

export default wordleReducer;
