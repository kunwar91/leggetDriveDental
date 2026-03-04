import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa6';
import { businessInfo } from '../data';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--open' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">🦷</span>
                    <div className="navbar__logo-text">
                        <span className="navbar__logo-name">Legget Drive</span>
                        <span className="navbar__logo-tagline">DENTAL</span>
                    </div>
                </Link>

                <ul className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="navbar__links-cta">
                        <Link to="/contact" className="btn btn--primary btn--sm">
                            Book Appointment
                        </Link>
                    </li>
                </ul>

                <div className="navbar__actions">
                    <a href={businessInfo.phoneHref} className="navbar__phone">
                        <FaPhone />
                        <span>{businessInfo.phone}</span>
                    </a>
                    <Link to="/contact" className="btn btn--primary btn--sm navbar__cta-desktop">
                        Book Appointment
                    </Link>
                    <button
                        className="navbar__toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
