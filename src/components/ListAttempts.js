import Attempt from "./Attempt.js";
import "./ListAttempts.css";

export default function ({ wordToFind, guesses }) {
  return (
    <>
    {guesses.length > 0 &&
    <div className="attemptList">
      {guesses.map((el, i) => (
        <Attempt wordToFind={wordToFind} word={el} key={i} />
      ))}
    </div>
    }
    </>
  );
}
