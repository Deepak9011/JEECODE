function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About JeeCode</h2>
                        <p>JeeCode offers a comprehensive set of problems and solutions to help students excel in their exams. Join us
          to unlock success!</p>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>Email: support@jeecode.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 JeeCode, All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;