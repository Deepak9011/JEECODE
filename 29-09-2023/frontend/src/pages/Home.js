import Navbar from '../components/navbar/Navbar';
import './home.css'
import Footer from '../components/footer/Footer';
import Body from '../components/student/Body';
function Home() {
  return (
      <>
        <Navbar></Navbar>
        <div class="catchyTag">
          <h1>"Unlock Success, One Question at a Time!"</h1>
        </div>
        <div>
          <Body></Body>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </>
  );
}

export default Home;