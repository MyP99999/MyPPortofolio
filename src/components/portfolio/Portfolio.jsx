import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { items } from '../../items/items';


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const navigate = useNavigate();

    const goToDemo = () => {
        navigate(`/demo/${item.id}`);
    };

    const trimDescription = (desc, wordLimit) => {
        const words = desc.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return desc;
    };

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{trimDescription(item.desc, 50)}</p>
                        <button onClick={goToDemo}>See More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map(item => (
                    <Single item={item} key={item.id} />
                ))
            }
        </div >
    )
}
export default Portfolio