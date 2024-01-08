import 'register.css';
function TeacherRegister() {
    return (
        <>
            <form className="login" action="/StudentRegistered" method="POST">
                <div className="head">JeeCode</div>
                <div className="mb-3">
                    <label for="fullname" className="form-label">Expertise</label>
                    <input type="text" className="form-control" id="fullname" name="fullname" />
                </div>
                <div className="mb-3">
                    <label for="gradYear" className="form-label">Graduation year:</label>
                    <input type="number" className="form-control" id="gradYear" name="gradYear" min="2000" max="2025" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">Discription</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name="email" />
                </div>
                <button type="submit" className="btn btn-success">submit</button>

            </form>
        </>
    );
}

export default TeacherRegister;