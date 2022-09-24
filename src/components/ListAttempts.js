import Attempt from "./Attempt.js";
import "./ListAttempts.css";

export default function ({ wordToFind, guesses }) {
  return (
    <div className="attemptList">
      {guesses.map((el, i) => (
        <Attempt wordToFind={wordToFind} word={el} key={i} />
      ))}
    </div>
  );
}
