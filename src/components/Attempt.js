import "./Attempt.css";

export default function ({ wordToFind, word }) {
  const aProposal = word.split("");
  const aWordToFind = wordToFind.split("");

  const getClassName = (i) => {
    const classList = ["letter"];
    if (aProposal[i] === aWordToFind[i]) {
      classList.push("valid");
    } else if (aWordToFind.includes(aProposal[i])) {
      classList.push("other");
    }
    return classList.join(" ");
  };

  return (
    <div className="propLine">
      {aWordToFind.map((e, i) => (
        <div className={getClassName(i)} key={i}>
          {aProposal[i]}
        </div>
      ))}
    </div>
  );
}
