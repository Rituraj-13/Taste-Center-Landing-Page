import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import content from '../config/content.json';
import seo from '../config/seo.json';
import chefImage from '../assets/food_image_4.jpg';

const About = () => {
    return (
        <>
            <Helmet>
                <title>{seo.pages.about.title}</title>
                <meta name="description" content={seo.pages.about.description} />
            </Helmet>

            <div className="bg-white pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h1>
                        <div className="w-24 h-1 bg-secondary mx-auto"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg mx-auto text-gray-600"
                    >
                        <p className="mb-8 text-lg leading-relaxed">
                            {content.about.story}
                        </p>

                        <div className="my-12 bg-gray-50 p-8 rounded-2xl border-l-4 border-secondary">
                            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                            <p className="italic text-gray-700">"{content.about.philosophy}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
                            <div className="order-2 md:order-1">
                                <h3 className="font-heading text-3xl font-bold text-primary mb-4">Meet the Chef</h3>
                                <p className="text-gray-600">
                                    {content.about.chef}
                                </p>
                            </div>
                            <div className="order-1 md:order-2 bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-400 overflow-hidden">
                                <img src={chefImage} alt="Chef" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default About;
