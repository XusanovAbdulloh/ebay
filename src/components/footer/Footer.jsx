import React from 'react';
import './Footer.css';
import {ImFacebook2} from "react-icons/im";
import {AiFillTwitterSquare} from "react-icons/ai";
import ft from "./ft.png";
import Container from "../../utils/Container";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return location.pathname.includes("/auth") ? <></> : (
        <div className='footer'>
            <div className="footer-wrapper">
                <ul className="ul-1 ull">
                    <li>
                        <h2>Buy</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Registration</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eBay Money Back Guarantee</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Bidding & buying help</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Stores</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eBay for Charity</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Charity Shop</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Seasonal Sales and events</a>
                    </li>
                </ul>
                <ul className="ul-2 ull">
                    <li>
                    <h2>Sell</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Start selling</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>How to sell</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Business seller</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Affiliates</a>
                    </li>
                    <li>
                        <h2>Tools & apps</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Developers</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Security center</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Site map</a>
                    </li>
                </ul>
                <ul className="ul-3 ull">
                    <li>
                        <h2>Stay connected</h2>
                    </li>
                    <li className='ft-img'>
                        <ImFacebook2/> <a href="h className='footer-link'ttps://Facebook.com">Facebook</a>
                    </li>
                    <li className='ft-img'>
                       <AiFillTwitterSquare/> <a href="h className='footer-link'ttps://Twitter.com">Twitter</a>
                    </li>
                </ul>
                <ul className="ul-4 ull">
                    <li>
                        <h2>About eBay</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Company info</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>News</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Investors</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Careers</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Diversity & Inclusion</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Global Impact</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Government relations</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Advertise with us</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Policies</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Verified Rights Owner (VeRO) Program</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eCI Licenses</a>
                    </li>
                </ul>
                <ul className="ul-5 ull">
                    <li>
                        <h2>Help & Contact</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Seller Center</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Contact Us</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eBay Returns</a>
                    </li>
                    <li>
                        <h2>Community</h2>
                    </li>
                    <li>
                        <a href="" className='footer-link'>Announcements</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eBay Community</a>
                    </li>
                    <li>
                        <a href="" className='footer-link'>eBay for Business Podcast</a>
                    </li>
                    <li>
                        <h2 className='h2'>eBay Sites</h2>
                    </li>
                    <select className='ft-option'>
                        <option className='ft-op'>United States</option>
                    </select>
                </ul>
            </div>
            <Container>
            <img className='imgggg' src={ft} alt="" />
            </Container>
        </div>
    );
}

export default Footer;
