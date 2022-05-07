import React from 'react';
import '../../App.css';
import appLogo from '../../images/footer-logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import insta from '../../images/icon-instagram.svg';
import yt from '../../images/icon-youtube.svg';
import pintrst from '../../images/icon-pinterest.svg';
import Button from '../Button/Button';

const Footer = () => {
    return (
        <div className="footer-section">
            <footer className='footer'>
                <div className="right-foot">
                    <div className="sec1">
                        <img src={ appLogo } alt="Logo" />
                        <div className="social-icons">
                            <ul className="social-apps-logo">
                                <li><img src={ facebook} alt="fb logo" /></li>
                                <li><img src={ yt } alt="yt logo" /></li>
                                <li><img src={ twitter } alt="tw logo" /></li>
                                <li><img src={ pintrst } alt="pin logo" /></li>
                                <li><img src={ insta } alt="insta logo" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sec2">
                        <ul className="links">
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="sec3">
                        <ul className="links">
                            <li>Careers</li>
                            <li>Support</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="left-foot">
                    <div className="but-copy-rights">
                        <Button text="Request Invite" /><br />
                        <p>&#169; Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;