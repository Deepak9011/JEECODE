import './practicePage.css';
function PractisePage() {
  return (
    <>
      <div className="container">
        <div className="question">
          <div className="header">
            <span className="difficulty"></span>
            <span className="timer" id="timer">
              03:00
            </span>
          </div>
          {/* <div><h2><%= question.name  %></h2></div> */}
          {/* <div><h3><%= question.difficulty %></h3></div> */}
          {/* <p className="text"><%= question.description  %></p> */}
          <form className="options">
            <label>
              <input type="radio" id="answer0id" name="answers" value="A" />
              <span>{/* <%= question.optiona %> */}</span>
            </label>
            <br />
            <label>
              <input type="radio" id="answer1id" name="answers" value="B" />
              <span>{/* <%= question.optionb %> */}</span>
            </label>
            <br />
            <label>
              <input type="radio" id="answer2id" name="answers" value="C" />
              <span>{/* <%= question.optionc %> */}</span>
            </label>
            <br />
            <label>
              <input type="radio" id="answer3id" name="answers" value="D" />
              <span>{/* <%= question.optiond %> */}</span>
            </label>
            <br />

            <button type="button" id="checkBtn">
              Submit
            </button>
          </form>
          `{" "}
          <a href="http://localhost:3000/post/<%= question.id %>">
            Discussion Forum
          </a>
          <div className="result hidden" id="result">
            <p className="result-message"></p>
            <button type="button" id="retryBtn">
              Retry
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PractisePage;
