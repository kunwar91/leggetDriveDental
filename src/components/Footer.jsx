import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLocationDot } from 'react-icons/fa6';
import { businessInfo, businessHours } from '../data';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__grid">
                    {/* Column 1 — Clinic Info */}
                    <div className="footer__col">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">🦷</span>
                            <div className="footer__logo-text">
                                <span className="footer__logo-name">Legget Drive</span>
                                <span className="footer__logo-tagline">DENTAL</span>
                            </div>
                        </div>
                        <p className="footer__desc">
                            Your trusted family dental clinic in Kanata, providing comprehensive
                            dental care with a gentle touch and a warm smile.
                        </p>
                        <div className="footer__social">
                            <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 — Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact Us</h4>
                        <ul className="footer__contact">
                            <li>
                                <FaLocationDot className="footer__contact-icon" />
                                <span>{businessInfo.address.full}</span>
                            </li>
                            <li>
                                <FaPhone className="footer__contact-icon" />
                                <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
                            </li>
                            <li>
                                <FaEnvelope className="footer__contact-icon" />
                                <a href={businessInfo.emailHref}>{businessInfo.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 — Hours */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Office Hours</h4>
                        <ul className="footer__hours">
                            {businessHours.map((item) => (
                                <li key={item.day}>
                                    <span className="footer__hours-day">{item.day}</span>
                                    <span className="footer__hours-time">{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
                    <p>Designed with ❤️ in Kanata, Ontario</p>
                </div>
            </div>
        </footer>
    );
}
