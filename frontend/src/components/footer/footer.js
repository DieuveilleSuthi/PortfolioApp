import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <p>Find me on my socials:</p>
                            <div className="footer-icons">
                                <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <br/><br/>
                            <p>Or contact me directly at the address:</p>
                            <a href="mailto:mdieuveillesuthi@gmail.com">mdieuveillesuthi@gmail.com</a>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Navigation</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <div className="cv-button-container">
                                <a href="/CV_V1_Alternance.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
                                    See my resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Last-footer">
                <p>Copyright ©️ 2024 Dieuveille Suthi</p>
            </div>
        </>
    )
}

export default Footer;
