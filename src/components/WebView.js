import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Laptop, Eye, Touchpad } from 'lucide-react';

const MobileInLaptopView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="mobile-in-laptop-view" className="pt-40 mb-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden lg:hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center justify-center gap-20 max-w-7xl mx-auto">
                        {/* Laptop Mockup */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, y: -50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            <div className="relative w-[340px] h-[200px] bg-gray-900 rounded-[0.75rem] pt-2 shadow-2xl border-4 border-gray-700">
                                <div className="w-full h-full bg-black rounded-md overflow-hidden relative">
                                    <div className="w-full h-full overflow-hidden">
                                        <iframe
                                            src={window.location.origin}
                                            className="w-full h-full border-none"
                                            style={{
                                                width: '1920px',
                                                height: '1080px',
                                                transform: 'scale(0.17)',
                                                transformOrigin: 'top left'
                                            }}
                                            title="Laptop View in Mobile"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gray-500 rounded-full"></div>
                            </div>
                        </motion.div>

                        {/* Heading & Features */}
                        <motion.div
                            className="space-y-10 max-w-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <motion.h2
                                    className="text-3xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Desktop View Inside Laptop Mockup
                                </motion.h2>
                                <motion.p
                                    className="text-base text-gray-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    Preview how your desktop website looks inside a laptop mockup, right from your mobile screen.
                                </motion.p>
                            </motion.div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Laptop,
                                        title: 'Desktop Simulation',
                                        description: 'See your desktop version from mobile.'
                                    },
                                    {
                                        icon: Touchpad,
                                        title: 'Touch Optimized',
                                        description: 'Even desktop views work touch-friendly in this preview.'
                                    },
                                    {
                                        icon: Eye,
                                        title: 'Real Preview',
                                        description: 'Accurate scale of desktop resolution inside mobile.'
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                                        whileHover={{ scale: 1.02 }}
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

export default MobileInLaptopView;
