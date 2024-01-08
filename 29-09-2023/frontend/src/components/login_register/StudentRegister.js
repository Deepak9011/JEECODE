import 'register.css';
function StudentRegister() {
    return (
      <>
        <form className="login" action="/StudentRegistered" method="POST">
                <div className="head">JeeCode</div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">high secondary year</label>
                    <input type="text" className="form-control" id="fullname" name="fullname" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">10th percentage</label>
                    <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="email" />
                </div>
                <button type="submit" className="btn btn-success">submit</button>
                
            </form>
      </>
    );
  }
  
  export default StudentRegister;