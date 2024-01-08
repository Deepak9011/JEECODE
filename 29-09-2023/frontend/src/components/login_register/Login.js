import './register.css';
function Login() {
    return (
        <>
            <form action="/StudentLogin" method="post" className="login">
                <p style="color:red; display:none;">Please enter correct username or password</p>
                <div className="head">Login</div>
                <div className="mb-3">
                    <label for="role" className="form-label">Role</label>
                    <input type="text" className="form-control" id="role" name="role" />
                    <select name="role" id="role" className="form-control">
                        <option value="none">Select</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="exampleInputPassword" name="password" />
                </div>
                <button type="submit" className="btn btn-success">login</button>

            </form>
        </>
    );
}

export default Login;