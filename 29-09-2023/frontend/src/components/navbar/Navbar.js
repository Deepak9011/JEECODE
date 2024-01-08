import Logo from "./Logo";
import StudentNavbar from "./StudentNavbar";
import TeacherNavbar from "./TeacherNavbar";
import Login from "./Login";
import Register from "./Register";
import Footer from "../footer/Footer";
function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Logo />
            if({props.role}==="student"){
                <StudentNavbar/>
            }else{
                <TeacherNavbar/>
            }
            if({props.login}){
                <Login/>
            }else{
                <Register/>
            }
            
        </div>
        <Footer/>
      </nav>
    </>
  );
}

export default Navbar;
