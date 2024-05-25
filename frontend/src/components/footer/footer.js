import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>ZAN</span>DO</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Navigation</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Articles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Partenaires</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Panier</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Login</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contactez nous</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +33 7 27 38 16</p>
                            <p><i className="fa-solid fa-envelope"></i> zando@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Paris, France.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright ©️ 2023 ZANDO</p>
            </div>
        </>
    )
}

export default Footer