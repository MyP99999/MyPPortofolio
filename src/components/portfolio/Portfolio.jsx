import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Food Ordering App",
        img: "/main.JPG",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur ducimus. Molestias voluptatem qui aliquam omnis quae repellat consectetur, eveniet cum dolores cupiditate, maiores est nesciunt explicabo aperiam illo magnam quasi minus ipsam voluptate eius quo itaque! Suscipit dolores voluptate eligendi. Enim omnis ipsum, inventore facilis tempore odit hic id.",
    },
    {
        id: 2,
        title: "Fitness Booking App",
        img: "/main.JPG",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur ducimus. Molestias voluptatem qui aliquam omnis quae repellat consectetur, eveniet cum dolores cupiditate, maiores est nesciunt explicabo aperiam illo magnam quasi minus ipsam voluptate eius quo itaque! Suscipit dolores voluptate eligendi. Enim omnis ipsum, inventore facilis tempore odit hic id.",
    },
    {
        id: 3,
        title: "Portfolio",
        img: "/main.JPG",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur ducimus. Molestias voluptatem qui aliquam omnis quae repellat consectetur, eveniet cum dolores cupiditate, maiores est nesciunt explicabo aperiam illo magnam quasi minus ipsam voluptate eius quo itaque! Suscipit dolores voluptate eligendi. Enim omnis ipsum, inventore facilis tempore odit hic id.",
    },
    {
        id: 4,
        title: "To DO App",
        img: "/main.JPG",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur ducimus. Molestias voluptatem qui aliquam omnis quae repellat consectetur, eveniet cum dolores cupiditate, maiores est nesciunt explicabo aperiam illo magnam quasi minus ipsam voluptate eius quo itaque! Suscipit dolores voluptate eligendi. Enim omnis ipsum, inventore facilis tempore odit hic id.",
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
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