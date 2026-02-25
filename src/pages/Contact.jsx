import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import content from '../config/content.json';
import seo from '../config/seo.json';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>{seo.pages.contact.title}</title>
                <meta name="description" content={seo.pages.contact.description} />
            </Helmet>

            <div className="bg-gray-50 min-h-screen pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
                        <p className="text-gray-600">We'd love to hear from you.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm"
                        >
                            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-red-50 p-3 rounded-full mr-4">
                                        <MapPin className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Visit Us</h3>
                                        <p className="text-gray-600">{content.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-50 p-3 rounded-full mr-4">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Call Us</h3>
                                        <p className="text-gray-600">{content.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-50 p-3 rounded-full mr-4">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email Us</h3>
                                        <p className="text-gray-600">{content.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-50 p-3 rounded-full mr-4">
                                        <Clock className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Opening Hours</h3>
                                        <p className="text-gray-600">Mon - Sun: 11:00 AM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.23587250273!2d-115.17499999999998!3d36.125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1772037452000!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-sm"
                        >
                            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
