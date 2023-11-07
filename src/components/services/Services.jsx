import { useRef } from 'react';
import './services.scss'
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -200,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className='services' ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Websites
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <a href='#Portfolio'>WHAT I DID?</a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Custom Web Design</h2>
                    <p>Elevate your online presence with bespoke web design solutions tailored to your brand&apos;s needs. I blend aesthetics with functionality, ensuring your website is responsive, user-friendly, and aligned with the latest web standards. Whether you need a single-page site or a complex web application, I deliver a product that resonates with your audience and drives results.</p>
                    <a href="#Contact">Go</a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>E-commerce Excellence</h2>
                    <p>Launch and grow your online store with expert e-commerce solutions. I provide end-to-end services, from store setup on platforms like Shopify or WooCommerce to advanced features like secure checkout processes, inventory management, and integration with payment gateways. Let&apos;s create a seamless shopping experience that turns visitors into repeat buyers.
                        Box 5: Mobile App Development</p>
                    <a href="#Contact">Go</a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Mobile App Innovation</h2>
                    <p>Stay at the forefront of the digital landscape with cutting-edge mobile applications. Whether you&apos;re looking for an iOS app, Android app, or cross-platform solutions, I deliver high-performance and intuitive mobile applications that provide value to your users and keep them engaged with your brand on the go.</p>
                    <a href="#Contact">Go</a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services