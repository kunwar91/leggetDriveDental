import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaFax,
    FaFacebookF,
    FaInstagram,
    FaCheck,
    FaChevronDown,
} from 'react-icons/fa6';
import { businessInfo, businessHours, faqs, services } from '../data';
import './Contact.css';

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

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Legget Drive Dental — Kanata, ON</title>
                <meta name="description" content="Book an appointment at Legget Drive Dental in Kanata. Call (613) 271-9726 or use our online form. Located at 555 Legget Drive, Suite 201." />
            </Helmet>

            {/* ─── Page Hero ────────────────────────────────── */}
            <section className="page-hero page-hero--contact">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <motion.span
                        className="page-hero__label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We'd love to hear from you. Book your appointment or reach
                        out with any questions — we're here to help.
                    </motion.p>
                </div>
            </section>

            {/* ─── Contact Grid ─────────────────────────────── */}
            <section className="section contact-section">
                <div className="container">
                    <motion.div
                        className="contact-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                    >
                        {/* ─── Form ───────────────────────────────── */}
                        <motion.div className="contact-form-wrap" variants={fadeUp}>
                            <h2>Book an Appointment</h2>
                            <p className="contact-form-intro">
                                Fill out the form below and our team will get back to you
                                within 24 hours to confirm your appointment.
                            </p>

                            {isSubmitted && (
                                <div className="contact-success">
                                    <FaCheck />
                                    <span>Thank you! We've received your request and will be in touch soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            placeholder="John"
                                            {...register('firstName', { required: 'First name is required' })}
                                            className={errors.firstName ? 'input--error' : ''}
                                        />
                                        {errors.firstName && <span className="field-error">{errors.firstName.message}</span>}
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                            {...register('lastName', { required: 'Last name is required' })}
                                            className={errors.lastName ? 'input--error' : ''}
                                        />
                                        {errors.lastName && <span className="field-error">{errors.lastName.message}</span>}
                                    </div>
                                </div>

                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                                            })}
                                            className={errors.email ? 'input--error' : ''}
                                        />
                                        {errors.email && <span className="field-error">{errors.email.message}</span>}
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="(613) 555-0123"
                                            {...register('phone', { required: 'Phone number is required' })}
                                            className={errors.phone ? 'input--error' : ''}
                                        />
                                        {errors.phone && <span className="field-error">{errors.phone.message}</span>}
                                    </div>
                                </div>

                                <div className="contact-form__row">
                                    <div className="contact-form__field">
                                        <label htmlFor="service">Service Interested In</label>
                                        <select id="service" {...register('service')}>
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s.id} value={s.id}>
                                                    {s.title}
                                                </option>
                                            ))}
                                            <option value="other">Other / Not Sure</option>
                                        </select>
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="preferredDate">Preferred Date</label>
                                        <input id="preferredDate" type="date" {...register('preferredDate')} />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your dental needs or any questions you have..."
                                        {...register('message')}
                                    />
                                </div>

                                <button type="submit" className="btn btn--primary btn--lg contact-form__submit">
                                    Request Appointment
                                </button>
                            </form>
                        </motion.div>

                        {/* ─── Info Sidebar ────────────────────────── */}
                        <motion.div className="contact-info" variants={fadeUp} custom={1}>
                            {/* Contact Cards */}
                            <div className="contact-info__card">
                                <h3>Contact Information</h3>
                                <ul className="contact-info__list">
                                    <li>
                                        <FaLocationDot className="contact-info__icon" />
                                        <div>
                                            <strong>Address</strong>
                                            <span>{businessInfo.address.full}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <FaPhone className="contact-info__icon" />
                                        <div>
                                            <strong>Phone</strong>
                                            <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
                                        </div>
                                    </li>
                                    <li>
                                        <FaFax className="contact-info__icon" />
                                        <div>
                                            <strong>Fax</strong>
                                            <span>{businessInfo.fax}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <FaEnvelope className="contact-info__icon" />
                                        <div>
                                            <strong>Email</strong>
                                            <a href={businessInfo.emailHref}>{businessInfo.email}</a>
                                        </div>
                                    </li>
                                </ul>

                                <div className="contact-info__social">
                                    <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <FaFacebookF />
                                    </a>
                                    <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="contact-info__card">
                                <h3>Office Hours</h3>
                                <ul className="contact-info__hours">
                                    {businessHours.map((item) => (
                                        <li key={item.day}>
                                            <span className="contact-info__hours-day">{item.day}</span>
                                            <span className="contact-info__hours-time">{item.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Map ──────────────────────────────────────── */}
            <section className="contact-map">
                <iframe
                    title="Legget Drive Dental Location"
                    src={businessInfo.mapEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            {/* ─── FAQ ──────────────────────────────────────── */}
            <section className="section section--alt contact-faq">
                <div className="container container--narrow">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <span className="section-header__label">Common Questions</span>
                        <h2 className="section-header__title">Frequently Asked Questions</h2>
                    </motion.div>

                    <motion.div
                        className="faq-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {faqs.map((faq, i) => (
                            <motion.div
                                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                                key={i}
                                variants={fadeUp}
                                custom={i}
                            >
                                <button
                                    className="faq-item__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    <span>{faq.question}</span>
                                    <FaChevronDown className="faq-item__chevron" />
                                </button>
                                <div className="faq-item__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
