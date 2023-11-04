import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion';

// ... Other imports

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
                    Profirescu Matheos
                </motion.span>
                <motion.div className="social" variants={containerVariants} initial="hidden" animate="visible">
                    {['/facebook.png', '/instagram.png', '/youtube.png', '/dribbble.png'].map((icon, index) => (
                        <motion.a key={index} variants={itemVariants}>
                            <img src={icon} alt="" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar