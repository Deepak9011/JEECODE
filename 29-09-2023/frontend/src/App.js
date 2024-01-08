import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js"
import PaymentSuccess from "./components/student/PaymentSucces.js";
import Payment from "./components/student/Payment.js";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/paymentSuccess" element={<PaymentSuccess/> }/>
        
      </Routes>
    </Router>
  );
}
