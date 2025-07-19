import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Eye, Touchpad } from 'lucide-react';

const MobileView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
<section 
    id="mobile-view"
    className="pt-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden 
               lg:min-h-dvh lg:flex lg:items-center lg:justify-center"
>
            <div className="container mx-auto px-6 ">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50, rotateY: -15 }}
                            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                            transition={{ delay: 0.6, duration: 1 }}
                            style={{ perspective: '1000px' }}
                        >
                            <div className="relative w-[360px] h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                                    <div className="w-full h-full pt-6 overflow-hidden">
                                        <iframe
                                            src={window.location.origin}
                                            className="w-full h-full border-none"
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            title="Portfolio Mobile View"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                            </div>

                            {/* Floating Indicators */}
                            <motion.div
                                className="absolute -right-8 top-32 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <Touchpad size={16} className="text-black" />
                            </motion.div>

                            <motion.div
                                className="absolute -left-8 bottom-32 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            >
                                <Eye size={16} className="text-black" />
                            </motion.div>
                        </motion.div>

                        {/* Right Side Header & Features */}
                        <motion.div
                            className="space-y-10 max-w-md"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.div
                                className="text-left"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <motion.h2
                                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Mobile Experience
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-gray-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    See how your site performs on mobile — with full hamburger menu, smooth scroll, and mobile-first design.
                                </motion.p>
                            </motion.div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Smartphone,
                                        title: 'Responsive Design',
                                        description: 'Your website runs fluidly in all mobile sizes.'
                                    },
                                    {
                                        icon: Touchpad,
                                        title: 'Touch Optimized',
                                        description: 'All interactions support touch gestures natively.'
                                    },
                                    {
                                        icon: Eye,
                                        title: 'Mobile First',
                                        description: 'Optimized visually and technically for mobile first.'
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileView;
