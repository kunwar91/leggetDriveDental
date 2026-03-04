import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa6';
import { services } from '../data';
import './Services.css';

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

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Our Services | Legget Drive Dental — Kanata, ON</title>
                <meta name="description" content="Comprehensive dental services including general dentistry, orthodontics, TMJ & sleep apnea treatment at Legget Drive Dental in Kanata." />
            </Helmet>

            {/* ─── Page Hero ────────────────────────────────── */}
            <section className="page-hero page-hero--services">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <motion.span
                        className="page-hero__label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        What We Offer
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        From routine checkups to advanced treatments, we provide
                        personalized dental care designed around your needs.
                    </motion.p>
                </div>
            </section>

            {/* ─── Services Detail ──────────────────────────── */}
            <section className="section services-detail">
                <div className="container">
                    {services.map((service, index) => (
                        <motion.div
                            className={`services-detail__block ${index % 2 !== 0 ? 'services-detail__block--reverse' : ''}`}
                            key={service.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                        >
                            <motion.div className="services-detail__visual" variants={fadeUp}>
                                <div className="services-detail__icon-wrap">
                                    <service.icon />
                                </div>
                                <div className="services-detail__number">0{index + 1}</div>
                            </motion.div>

                            <motion.div className="services-detail__content" variants={fadeUp} custom={1}>
                                <span className="section-header__label">{service.tagline}</span>
                                <h2>{service.title}</h2>
                                <p className="services-detail__desc">{service.description}</p>

                                <div className="services-detail__items">
                                    {service.items.map((item, i) => (
                                        <div className="services-detail__item" key={i}>
                                            <FaCheck className="services-detail__item-icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn btn--primary">
                                    Book a Consultation <FaArrowRight />
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────── */}
            <section className="services-cta section--dark section">
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center' }}
                >
                    <h2>Not Sure Which Service You Need?</h2>
                    <p style={{ maxWidth: 550, margin: '0 auto var(--space-2xl)' }}>
                        Our team will help you find the right treatment plan. Schedule
                        a consultation and we'll take it from there.
                    </p>
                    <Link to="/contact" className="btn btn--accent btn--lg">
                        Get in Touch <FaArrowRight />
                    </Link>
                </motion.div>
            </section>
        </>
    );
}
