import './hero.scss'
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-300%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Profirescu Matheos</motion.h2>
                    <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a href='#Portfolio' variants={textVariants}>
                            See the Latest Works
                        </motion.a>
                        <motion.a href='#Contact' variants={textVariants}>
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                    Full-Stack Developer
                </motion.div>
                <div className="imageContainer">
                    <img src="/myp.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero