import {
    FaTooth,
    FaFaceSmile,
    FaCrown,
} from 'react-icons/fa6';
import {
    GiToothbrush,
    GiNightSleep,
    GiBrain,
} from 'react-icons/gi';
import {
    MdOutlineEmergency,
    MdMedicalServices,
} from 'react-icons/md';

// ─── Services ────────────────────────────────────────────
export const services = [
    {
        id: 'general',
        title: 'General & Preventive Dentistry',
        tagline: 'Restoring the shape, function, and beauty of your smile.',
        description:
            'From routine checkups to advanced restorative treatments, our comprehensive general dentistry services are designed to keep your teeth healthy, strong, and looking their best. We use the latest techniques and materials to deliver results that are both functional and aesthetically pleasing.',
        icon: FaTooth,
        items: [
            'Restorations',
            'Endodontics (Root Canal Therapy)',
            'Porcelain Inlays & Onlays',
            'Veneers',
            'Crowns',
            'Implants',
            'Bridges',
            'Dentures',
        ],
    },
    {
        id: 'orthodontics',
        title: 'Orthodontics',
        tagline: 'Straighter smiles for every age.',
        description:
            'Whether you\'re an adult looking for a discreet way to straighten your teeth or a parent exploring braces-free options for your child, we offer modern orthodontic solutions tailored to your lifestyle and goals.',
        icon: FaFaceSmile,
        items: [
            'Fast Braces — accelerated treatment for adults',
            'Invisalign — clear aligners for a virtually invisible transformation',
            'Myobrace — straight teeth without traditional braces for juniors',
        ],
    },
    {
        id: 'tmj-sleep',
        title: 'TMJ & Sleep Apnea',
        tagline: 'Breathe easier. Sleep better. Live healthier.',
        description:
            'Snoring isn\'t just a nuisance — it\'s your body signaling that something isn\'t right with your breathing. Our dentists specialize in oral appliance therapy that can help alleviate TMJ discomfort and sleep apnea symptoms without invasive procedures.',
        icon: GiNightSleep,
        items: [
            'Custom oral appliance therapy',
            'TMJ disorder assessment & management',
            'Snoring & sleep apnea screening',
            'Non-invasive treatment options',
        ],
    },
];

// ─── Business Info ───────────────────────────────────────
export const businessInfo = {
    name: 'Legget Drive Dental',
    address: {
        street: '555 Legget Drive, Suite 201',
        city: 'Kanata',
        province: 'ON',
        postalCode: 'K2K 2X3',
        full: '555 Legget Drive, Suite 201, Kanata, ON K2K 2X3',
    },
    phone: '(613) 271-9726',
    phoneHref: 'tel:+16132719726',
    fax: '(613) 271-9961',
    email: 'dentalleggetdrive@gmail.com',
    emailHref: 'mailto:dentalleggetdrive@gmail.com',
    social: {
        instagram: 'https://www.instagram.com/leggetdrivedental/',
        facebook: 'https://www.facebook.com/leggetdrivedental',
    },
    mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.6!2d-75.9194815!3d45.3490576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1ff915e7ac00b%3A0xdb77864625a3209d!2sLegget%20Drive%20Dental!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca',
    coordinates: {
        lat: 45.3490576,
        lng: -75.9194815,
    },
};

// ─── Business Hours ──────────────────────────────────────
export const businessHours = [
    { day: 'Monday', hours: '8:00 AM — 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM — 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM — 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM — 5:00 PM' },
    { day: 'Friday', hours: 'By Appointment' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: 'Closed' },
];

// ─── Team Members ────────────────────────────────────────
export const teamMembers = [
    {
        id: 1,
        name: 'Dr. Sarah Mitchell',
        role: 'General Dentist & Clinic Director',
        bio: 'With over 15 years of experience in family and cosmetic dentistry, Dr. Mitchell leads our team with a passion for patient-centered care. She is dedicated to creating comfortable, anxiety-free dental experiences for patients of all ages.',
        specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Implants'],
    },
    {
        id: 2,
        name: 'Dr. James Park',
        role: 'Orthodontist',
        bio: 'Dr. Park specializes in modern orthodontic solutions, including Invisalign and Fast Braces. His gentle approach and eye for detail have helped hundreds of patients achieve the straight, confident smiles they\'ve always wanted.',
        specialties: ['Invisalign', 'Fast Braces', 'Myobrace'],
    },
    {
        id: 3,
        name: 'Dr. Priya Nair',
        role: 'Associate Dentist',
        bio: 'Dr. Nair brings expertise in restorative and preventive dentistry. Known for her warm bedside manner and meticulous technique, she ensures every patient leaves with a smile they\'re proud of.',
        specialties: ['Restorative Dentistry', 'Root Canal Therapy', 'Veneers'],
    },
];

// ─── Testimonials ────────────────────────────────────────
export const testimonials = [
    {
        id: 1,
        name: 'Amanda R.',
        text: 'The entire team at Legget Drive Dental is amazing! They made my root canal completely painless, and the follow-up care was exceptional. I actually look forward to my dental visits now.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael T.',
        text: 'I\'ve been coming here for years and have always been impressed by how up-to-date they are with the latest technology. The office is spotless and the staff is incredibly friendly.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Sophia L.',
        text: 'Dr. Park did an incredible job with my Invisalign treatment. My teeth look perfect now and the whole process was so much easier than I expected. Highly recommend!',
        rating: 5,
    },
    {
        id: 4,
        name: 'David K.',
        text: 'As someone who has always been nervous about the dentist, this clinic changed everything for me. The team is patient, understanding, and always takes the time to explain every procedure.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Jennifer H.',
        text: 'My kids love coming here! The staff is wonderful with children and really makes the experience fun and comfortable. Best family dental clinic in Kanata, hands down.',
        rating: 5,
    },
];

// ─── Feature Badges ──────────────────────────────────────
export const featureBadges = [
    { icon: MdOutlineEmergency, label: 'Emergency Care Available' },
    { icon: FaTooth, label: 'Accepting New Patients' },
    { icon: MdMedicalServices, label: 'Direct Insurance Billing' },
    { icon: FaFaceSmile, label: 'Invisalign Provider' },
    { icon: GiToothbrush, label: 'Family Friendly' },
    { icon: FaCrown, label: 'Same-Day Crowns' },
];

// ─── FAQ ─────────────────────────────────────────────────
export const faqs = [
    {
        question: 'Are you accepting new patients?',
        answer:
            'Yes! We are always happy to welcome new patients to our practice. Simply give us a call or use our online contact form to schedule your first visit.',
    },
    {
        question: 'Do you offer emergency dental services?',
        answer:
            'Absolutely. We understand that dental emergencies don\'t wait, so we do our best to accommodate urgent cases as quickly as possible. Call us right away if you\'re experiencing a dental emergency.',
    },
    {
        question: 'Do you bill insurance directly?',
        answer:
            'Yes, we offer direct billing to most major insurance providers for your convenience. Our team will handle the paperwork so you can focus on your care.',
    },
    {
        question: 'What orthodontic options do you offer?',
        answer:
            'We provide Fast Braces and Invisalign for adults, as well as Myobrace for younger patients who want straighter teeth without traditional braces.',
    },
    {
        question: 'How often should I visit the dentist?',
        answer:
            'We recommend a routine checkup and cleaning every six months. However, depending on your individual oral health needs, we may suggest a different schedule.',
    },
    {
        question: 'Is parking available at the clinic?',
        answer:
            'Yes, there is ample free parking available right at the building. Our clinic is conveniently located on the second floor, Suite 201.',
    },
];
