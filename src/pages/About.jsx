import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaShieldHalved, FaUserGroup, FaHandHoldingMedical } from 'react-icons/fa6';
import { teamMembers } from '../data';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
    {
        icon: FaHeart,
        title: 'Patient-First Care',
        desc: 'Every treatment plan begins with listening. We take the time to understand your needs, concerns, and goals before recommending a path forward.',
    },
    {
        icon: FaShieldHalved,
        title: 'Modern Technology',
        desc: 'We invest in the latest dental technology and techniques to provide you with the safest, most effective, and comfortable treatments available.',
    },
    {
        icon: FaUserGroup,
        title: 'Family Friendly',
        desc: 'From toddlers to grandparents, our clinic is designed to make every family member feel welcome and at ease — no matter their age or dental needs.',
    },
    {
        icon: FaHandHoldingMedical,
        title: 'Gentle Approach',
        desc: 'We understand dental anxiety is real. Our team is trained in gentle techniques and patient communication to make every visit stress-free.',
    },
];

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us | Legget Drive Dental — Kanata, ON</title>
                <meta name="description" content="Learn about Legget Drive Dental — our story, values, and the experienced dental team serving Kanata families." />
            </Helmet>

            {/* ─── Page Hero ────────────────────────────────── */}
            <section className="page-hero page-hero--about">
                <div className="page-hero__overlay" />
                <div className="container page-hero__content">
                    <motion.span
                        className="page-hero__label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A dedicated team, a welcoming space, and a commitment to
                        exceptional dental care — that's who we are.
                    </motion.p>
                </div>
            </section>

            {/* ─── Our Story ────────────────────────────────── */}
            <section className="section about-story">
                <div className="container">
                    <motion.div
                        className="about-story__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div className="about-story__content" variants={fadeUp}>
                            <span className="section-header__label">Our Philosophy</span>
                            <h2>More Than Just a Dental Clinic</h2>
                            <p className="about-story__lead">
                                Since opening our doors in Kanata, Legget Drive Dental has been
                                built on a simple belief: everyone deserves a dental experience
                                that's comfortable, transparent, and tailored to their unique needs.
                            </p>
                            <p>
                                Our clinic was founded with the vision of creating a space where
                                patients feel genuinely cared for — not just treated. We've
                                assembled a team of skilled professionals who share this vision,
                                combining clinical excellence with the kind of genuine warmth
                                that makes you feel like family.
                            </p>
                            <p>
                                Located conveniently on Legget Drive in the heart of Kanata, we
                                serve patients from across Ottawa and the surrounding areas. Whether
                                you're coming in for a routine cleaning or a complex procedure,
                                you can expect the same level of attention, care, and respect.
                            </p>
                        </motion.div>
                        <motion.div className="about-story__image" variants={fadeUp} custom={1}>
                            <div className="about-story__image-placeholder">
                                <span>🦷</span>
                                <p>Your Comfort Is Our Priority</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Values ───────────────────────────────────── */}
            <section className="section section--alt about-values">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <span className="section-header__label">Why Choose Us</span>
                        <h2 className="section-header__title">Our Values</h2>
                        <p className="section-header__subtitle">
                            The principles that guide everything we do, from the treatments we
                            recommend to the way we greet you at the door.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-values__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {values.map((value, i) => (
                            <motion.div className="about-values__card" key={i} variants={fadeUp} custom={i}>
                                <div className="about-values__card-icon">
                                    <value.icon />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Team ─────────────────────────────────────── */}
            <section className="section about-team">
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
                            Experienced, caring professionals dedicated to your oral health
                            and overall well-being.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-team__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        {teamMembers.map((member, i) => (
                            <motion.div className="about-team__card" key={member.id} variants={fadeUp} custom={i}>
                                <div className="about-team__card-avatar">
                                    <div className="about-team__card-initials">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className="about-team__card-body">
                                    <h3>{member.name}</h3>
                                    <span className="about-team__card-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                    <div className="about-team__card-specialties">
                                        {member.specialties.map((s, j) => (
                                            <span key={j} className="about-team__card-tag">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────── */}
            <section className="about-cta section--dark section">
                <motion.div
                    className="container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center' }}
                >
                    <h2>Join Our Dental Family</h2>
                    <p style={{ maxWidth: 550, margin: '0 auto var(--space-2xl)' }}>
                        We're always welcoming new patients. Schedule your first
                        appointment and experience the Legget Drive difference.
                    </p>
                    <Link to="/contact" className="btn btn--accent btn--lg">
                        Book Your Visit <FaArrowRight />
                    </Link>
                </motion.div>
            </section>
        </>
    );
}
