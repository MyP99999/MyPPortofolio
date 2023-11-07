import styles from './Technologies.module.scss';
import { motion } from 'framer-motion';

const Technologies = () => {

    const tech = [
        {
            id: 1,
            src: '/icons/html.png',
            title: 'HTML',
            style: 'shadow-orange', // Updated
        },
        {
            id: 2,
            src: '/icons/css.png',
            title: 'CSS',
            style: 'shadow-blue', // Updated
        },
        {
            id: 3,
            src: '/icons/javascript.png',
            title: 'JavaScript',
            style: 'shadow-yellow', // Updated
        },
        {
            id: 4,
            src: '/icons/react.png',
            title: 'React',
            style: 'shadow-darkblue', // Updated
        },
        {
            id: 5,
            src: '/icons/nextjs.png',
            title: 'Next.js',
            style: 'shadow-deeporange', // Updated
        },
        {
            id: 6,
            src: '/icons/tailwind.png',
            title: 'Tailwind CSS',
            style: 'shadow-sky', // Updated
        },
        {
            id: 7,
            src: '/icons/github.png',
            title: 'GitHub',
            style: 'shadow-gray', // Updated
        },
        {
            id: 8,
            src: '/icons/firebase.png',
            title: 'Firebase',
            style: 'shadow-orange', // Updated
        },
        {
            id: 9,
            src: '/icons/mongo.png',
            title: 'MongoDB',
            style: 'shadow-green', // Updated
        },
        {
            id: 10,
            src: '/icons/mysql.png',
            title: 'MySQL',
            style: 'shadow-lightblue', // Updated
        },
        {
            id: 11,
            src: '/icons/java.png',
            title: 'Java',
            style: 'shadow-orange', // Updated
        },
        {
            id: 12,
            src: '/icons/spring.png',
            title: 'Spring',
            style: 'shadow-green', // Updated
        },
    ];
    const cardVariants = {
        offscreen: {
            opacity: 0,
            y: 50
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        },
        hover: {
            scale: 1.1, // Adjust scale value as needed
            transition: {
                type: "spring",
                stiffness: 300,
            }
        }
    };

    return (
        <div name="experience" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p className={styles.title}>Technologies</p>
                    <p className={styles.description}>These are the technologies I&apos;ve worked with:</p>
                </div>
                <div className={styles.techGrid}>
                    {tech.map(({ id, src, title, style }) => (
                        <motion.div
                            key={id}
                            className={`${styles.techCard} ${styles[style]}`}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            whileHover="hover" // Activate the hover state on hover
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <img className={styles.techImage} src={src} alt={title} />
                            <p className={styles.techTitle}>{title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technologies