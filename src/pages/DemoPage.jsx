import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../items/items';
import styles from './css/DemoPage.module.scss'; // Make sure the path is correct
import DemoNavbar from '../components/demoNavbar/DemoNavbar';
import { motion } from 'framer-motion';

const DemoPage = () => {
    const { id } = useParams();
    const itemId = parseInt(id, 10);

    const item = items.find((item) => item.id === itemId);

    if (!item) {
        return <div>Item not found</div>;
    }

    // Variants for animations
    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.3,
                stiffness: 120,
            }
        }
    };

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.4,
            }
        }
    };

    const buttonVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1, // Adjust the delay to control when the button appears
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            transition: {
                duration: 0.3,
                yoyo: Infinity // Apply a smooth effect that repeats indefinitely
            }
        }
    };
    return (
        <div>
            <DemoNavbar />
            <motion.div
                className={styles.container}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.imageContainer} variants={imageVariants}>
                    <img src={item.img} alt={item.title} />
                </motion.div>
                <motion.div className={styles.details}>
                    <motion.h2 variants={textVariants}>{item.title}</motion.h2>
                    <motion.p variants={textVariants}>{item.desc}</motion.p>
                    <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                        See Demo
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DemoPage;
