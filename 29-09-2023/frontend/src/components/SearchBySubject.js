import React from "react";
import axios from "axios";

export default function SearchBySubject(props) {
  var options = {
    difficulty: "ALL",
    questionSearch: "",
  };

  const handleSearchBySubject = async (difficulty, questionSearch) => {
    const res = await axios.post(
      "http://localhost:4000/search/searchbysubject",
      {
        options,
      }
    );
  };

  const handleChangeByDifficulty = (event) => {
    options.difficulty = event.target.value;
  };

  const handleChangeByQuestion = (event) => {
    options.questionSearch = event.target.value;
  };

  return (
    <>
      <form
        method="GET"
        action="/SearchBySubject"
        onSubmit={() => handleSearchBySubject(event.target.value)}
        className="d-flex search"
      >
        <select
          onChange={handleChangeByDifficulty}
          name="difficulty"
          className="form-control me-2"
        >
          <option selected value="All">
            All Difficulties
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          onChange={handleChangeByQuestion}
          type="text"
          name="search"
          placeholder="Search for a question..."
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </form>
      <div>
        <div className="container">
          {/* make a row to mention all the colums first */}
          <div className="row row-head">
            <div className="col-1">Id</div>
            <div className="col-8">Question Name</div>
            <div className="col-3">Difficulty</div>
          </div>

          <hr />
          {/* <!-- now all the questions will be fetched by this loop -->
        <!-- and all the information will be displayed in the grid of the page --> */}
          {/* <% result.rows.forEach(question=> { %> */}

          <div className="row">
            {/* <!-- first column --> */}
            <div className="col-1">{/* <%= question.id %>. */}</div>

            {/* <!-- second column  --> */}
            <div className="col-8">
              <a href="practicePage/?question_id=${props.questionId">
                {/* <%= question.name %> */}
              </a>
            </div>
            {/* <!-- third column --> */}
            <div className="col-3">
              <span
                className="difficulty"
                //  id="<%" ="question.difficulty"
              >
                {/* <%= question.difficulty.charAt(0).toUpperCase() +
               question.difficulty.slice(1) %> */}
              </span>
            </div>
          </div>
          {/* <% }); %> */}
        </div>
      </div>
    </>
  );
}
