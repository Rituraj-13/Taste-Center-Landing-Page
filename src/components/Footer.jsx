import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import content from '../config/content.json';
import seo from '../config/seo.json';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="font-heading text-3xl font-bold text-secondary mb-4">
                            {content.restaurantName}
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            {content.tagline}. {content.about.philosophy}
                        </p>
                        <div className="flex space-x-4">
                            <a href={seo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href={seo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href={seo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col md:items-end">
                        <div className="text-left">
                            <h4 className="font-heading text-xl font-semibold mb-6 text-white">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <MapPin className="text-secondary mr-3 mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-400">{content.address}</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="text-secondary mr-3 flex-shrink-0" size={20} />
                                    <span className="text-gray-400">{content.phone}</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="text-secondary mr-3 flex-shrink-0" size={20} />
                                    <span className="text-gray-400">{content.email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {content.restaurantName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
