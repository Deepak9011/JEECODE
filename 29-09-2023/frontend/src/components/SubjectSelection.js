import "./subjectselection.css";

function UploadQuestion() {
  return (
    <>
      <div className="card" onclick="location.href='/questions/physics'">
        <h2>Physics</h2>
      </div>
      <div className="card" onclick="location.href='/questions/chemistry'">
        <h2>Chemistry</h2>
      </div>
      <div className="card" onclick="location.href='/questions/maths'">
        <h2>Maths</h2>
      </div>
    </>
  );
}

export default UploadQuestion;
