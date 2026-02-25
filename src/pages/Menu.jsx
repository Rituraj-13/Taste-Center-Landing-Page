import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import menu from '../config/menu.json';
import seo from '../config/seo.json';
import food1 from '../assets/food_image_1.jpg';
import food2 from '../assets/food_image_2.jpg';
import food3 from '../assets/food_image_3.jpg';
import food4 from '../assets/food_image_4.jpg';
import food5 from '../assets/food_image_5.jpg';

const foodImages = [food1, food2, food3, food4, food5];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Flatten items for the grid
    const allItems = menu.categories.flatMap(c => c.items);
    const filteredItems = activeCategory === 'All'
        ? allItems
        : allItems.filter(item => {
            const cat = menu.categories.find(c => c.items.includes(item));
            return cat && cat.name === activeCategory;
        });

    const categories = ['All', ...menu.categories.map(c => c.name)];

    return (
        <>
            <Helmet>
                <title>{seo.pages.menu.title}</title>
                <meta name="description" content={seo.pages.menu.description} />
            </Helmet>

            <div className="bg-gray-50 min-h-screen pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Our Menu</h1>
                        <p className="text-gray-600">Authentic flavors prepared with love.</p>
                    </motion.div>

                    {/* Category Filter Strip */}
                    <div className="md:sticky md:top-20 z-30 bg-gray-50 py-4 mb-8">
                        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide px-4 md:justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-sm ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Food Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                key={item.id}
                                className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-2xl h-48 flex-shrink-0">
                                    <img
                                        src={foodImages[index % foodImages.length]}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                <div className="px-2 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-heading text-lg font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-primary font-bold text-xl">₹{item.price}</span>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-xs px-2 py-1 rounded-full ${item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {item.isVeg ? 'Veg' : 'Non-Veg'}
                                            </span>
                                            <div className="flex items-center text-yellow-400 text-sm font-bold">
                                                <Star size={14} fill="currentColor" className="mr-1" />
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
