import { Link } from 'react-router-dom';
import './demoNavbar.scss'
import { motion } from 'framer-motion';

const socials = [
    {
        id: 0,
        name: '/facebook.png',
        link: 'https://www.facebook.com/profirescu.matheos/',
    },
    {
        id: 1,
        name: '/linkedin.png',
        link: 'https://www.linkedin.com/in/matheos-profirescu-2a8778172/',
    },
    {
        id: 2,
        name: '/instagram.png',
        link: 'https://www.instagram.com/matheosprofirescu/',
    },
]

const DemoNavbar = () => {

    const containerVariants = {
        hidden: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
        visible: { transition: { staggerChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <div className='navbar'>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                </motion.span>
                <motion.div className="social" variants={containerVariants} initial="hidden" animate="visible">
                    {socials.map((s, index) => (
                        <motion.a href={s.link} key={index} variants={itemVariants}>
                            <img src={s.name} alt="" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <motion.button
                    className="back-button"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    ← Back
                </motion.button>
            </Link>
        </div>
    )
}

export default DemoNavbar