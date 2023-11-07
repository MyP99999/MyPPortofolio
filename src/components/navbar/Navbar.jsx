import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion';

// ... Other imports
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
        name: '/icons/github.png',
        link: 'https://github.com/MyP99999',
    },
]

const Navbar = () => {
    // variants for the container
    const containerVariants = {
        hidden: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        visible: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    // variants for individual items
    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <div className='navbar'>
            <Sidebar />
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
        </div>
    )
}

export default Navbar