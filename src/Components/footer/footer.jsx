import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo1.svg';
import './footer.scss';

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='LogoContainer' to="/">
                    <Logo className="logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; { new Date().getFullYear() } Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
