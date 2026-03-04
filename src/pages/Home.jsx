import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { services, featureBadges, teamMembers, testimonials, businessInfo } from '../data';
import './Home.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Legget Drive Dental | Family Dentist in Kanata, ON</title>
                <meta name="description" content="Welcome to Legget Drive Dental — your trusted family dentist in Kanata, Ontario. General dentistry, orthodontics, TMJ & sleep apnea treatment." />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Dentist",
                      "name": "Legget Drive Dental",
                      "image": "https://www.leggetdental.ca/logo.png",
                      "@id": "",
                      "url": "https://www.leggetdental.ca",
                      "telephone": "+16132719726",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "555 Legget Drive, Suite 201",
                        "addressLocality": "Kanata",
                        "addressRegion": "ON",
                        "postalCode": "K2K 2X3",
                        "addressCountry": "CA"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 45.3490576,
                        "longitude": -75.9194815
                      },
                      "openingHoursSpecification": [
                        {
                          "@type": "OpeningHoursSpecification",
                          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                          "opens": "08:00",
                          "closes": "17:00"
                        }
                      ],
                      "sameAs": [
                        "https://www.facebook.com/leggetdrivedental",
                        "https://www.instagram.com/leggetdrivedental/"
                      ]
                    }
                  `}
                </script>
            </Helmet>

            {/* ─── Hero ─────────────────────────────────────── */}
            <section className="hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <motion.span
                        className="hero__label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to Legget Drive Dental
                    </motion.span>
                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        Your Smile,<br />
                        <span className="hero__title-accent">Our Passion</span>
                    </motion.h1>
                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Comprehensive dental care for the whole family in a warm,
                        welcoming environment. Where modern dentistry meets genuine compassion.
                    </motion.p>
                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                    >
                        <Link to="/contact" className="btn btn--accent btn--lg">
                            Book Appointment
                        </Link>
                        <Link to="/services" className="btn btn--white btn--lg">
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
                <div className="hero__scroll-indicator">
                    <span />
                </div>
            </section>

            {/* ─── Feature Badges ───────────────────────────── */}
            <section className="badges">
                <div className="container">
                    <motion.div
                        className="badges__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        {featureBadges.map((badge, i) => (
                            <motion.div className="badges__item" key={i} variants={fadeUp} custom={i}>
                                <badge.icon className="badges__icon" />
                                <span className="badges__label">{badge.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Welcome ──────────────────────────────────── */}
            <section className="section welcome">
                <div className="container">
                    <motion.div
                        className="welcome__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div className="welcome__image" variants={fadeUp}>
                            <div className="welcome__image-inner">
                                <div className="welcome__image-placeholder">
                                    <span>🏥</span>
                                </div>
                                <div className="welcome__image-badge">
                                    <strong>15+</strong>
                                    <span>Years of<br />Excellence</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="welcome__content" variants={fadeUp} custom={1}>
                            <span className="section-header__label">Who We Are</span>
                            <h2>Welcome to Legget Drive Dental</h2>
                            <p className="welcome__lead">
                                Nestled in the heart of Kanata, we've been delivering exceptional
                                dental care to families across Ottawa for over 15 years.
                            </p>
                            <p>
                                At Legget Drive Dental, we believe that every patient deserves
                                personalized attention and the highest standard of care. Our
                                experienced team combines the latest dental technologies with
                                a compassionate, patient-first approach to ensure your visit
                                is comfortable, efficient, and — dare we say — enjoyable.
                            </p>
                            <p>
                                Whether you're here for a routine cleaning, a smile makeover,
                                or need help with a dental emergency, you're in good hands.
                            </p>
                            <Link to="/about" className="btn btn--primary">
                                Learn More About Us <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Services Preview ─────────────────────────── */}
            <section className="section section--alt services-preview">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <span className="section-header__label">What We Offer</span>
                        <h2 className="section-header__title">Our Services</h2>
                        <p className="section-header__subtitle">
                            From preventive care to advanced treatments, we provide
                            comprehensive dental services tailored to your unique needs.
                        </p>
                    </motion.div>

                    <motion.div
                        className="services-preview__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {services.map((service, i) => (
                            <motion.div className="services-preview__card" key={service.id} variants={fadeUp} custom={i}>
                                <div className="services-preview__card-icon">
                                    <service.icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.tagline}</p>
                                <ul className="services-preview__card-list">
                                    {service.items.slice(0, 4).map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                    {service.items.length > 4 && (
                                        <li className="services-preview__more">+ {service.items.length - 4} more</li>
                                    )}
                                </ul>
                                <Link to="/services" className="services-preview__card-link">
                                    Learn More <FaArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Team Preview ─────────────────────────────── */}
            <section className="section team-preview">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <span className="section-header__label">Our Dentists</span>
                        <h2 className="section-header__title">Meet the Team</h2>
                        <p className="section-header__subtitle">
                            Our dedicated professionals are committed to making every
                            visit a positive experience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="team-preview__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {teamMembers.map((member, i) => (
                            <motion.div className="team-preview__card" key={member.id} variants={fadeUp} custom={i}>
                                <div className="team-preview__card-image">
                                    <div className="team-preview__card-placeholder">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className="team-preview__card-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-preview__card-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="team-preview__cta"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Link to="/about" className="btn btn--outline">
                            Meet the Full Team <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── Testimonials ─────────────────────────────── */}
            <section className="section section--alt testimonials">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <span className="section-header__label">Patient Stories</span>
                        <h2 className="section-header__title">What Our Patients Say</h2>
                        <p className="section-header__subtitle">
                            Don't just take our word for it — hear from the families
                            who trust us with their smiles.
                        </p>
                    </motion.div>

                    <motion.div
                        className="testimonials__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {testimonials.slice(0, 3).map((t, i) => (
                            <motion.div className="testimonials__card" key={t.id} variants={fadeUp} custom={i}>
                                <FaQuoteLeft className="testimonials__quote-icon" />
                                <p className="testimonials__text">{t.text}</p>
                                <div className="testimonials__footer">
                                    <div className="testimonials__stars">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <FaStar key={j} />
                                        ))}
                                    </div>
                                    <span className="testimonials__name">{t.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA Banner ───────────────────────────────── */}
            <section className="cta-banner">
                <div className="cta-banner__overlay" />
                <motion.div
                    className="container cta-banner__content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2>Ready for a Healthier, Brighter Smile?</h2>
                    <p>
                        Schedule your appointment today and discover why Kanata families
                        choose Legget Drive Dental.
                    </p>
                    <div className="cta-banner__actions">
                        <Link to="/contact" className="btn btn--accent btn--lg">
                            Book Your Visit
                        </Link>
                        <a href={businessInfo.phoneHref} className="btn btn--white btn--lg">
                            Call {businessInfo.phone}
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
