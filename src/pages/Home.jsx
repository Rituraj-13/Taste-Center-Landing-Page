import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import content from '../config/content.json';
import seo from '../config/seo.json';
import menu from '../config/menu.json';
import food1 from '../assets/food_image_1.jpg';
import food2 from '../assets/food_image_2.jpg';
import food3 from '../assets/food_image_3.jpg';
import food4 from '../assets/food_image_4.jpg';
import food5 from '../assets/food_image_5.jpg';

const foodImages = [food1, food2, food3, food4, food5];

const Home = () => {
    // Get 3 random popular items
    const popularItems = menu.categories.flatMap(c => c.items).slice(0, 3);

    // Testimonials Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    // Duplicate testimonials for smoother infinite-like scroll feel
    const testimonials = [...content.testimonials, ...content.testimonials];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsToShow(3);
            else if (window.innerWidth >= 768) setItemsToShow(2);
            else setItemsToShow(1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsToShow + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [itemsToShow, testimonials.length]);

    return (
        <>
            <Helmet>
                <title>{seo.pages.home.title}</title>
                <meta name="description" content={seo.pages.home.description} />
            </Helmet>

            {/* Hero Section - Split Layout */}
            <section className="relative bg-white overflow-hidden pt-24 pb-20 lg:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-left z-10"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="h-1 w-10 bg-primary"></div>
                                <span className="text-primary font-medium tracking-wider uppercase text-sm">Authentic Indian Cuisine</span>
                            </div>
                            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                                {content.hero.headline}
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                                {content.hero.subheadline}
                            </p>
                            <Link to="/menu" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {content.hero.ctaPrimary}
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative z-10 flex justify-center"
                        >
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute top-0 right-0 bg-secondary text-white font-bold py-2 px-4 rounded-full transform translate-x-2 -translate-y-2 shadow-md z-20">
                                    Best Seller
                                </div>
                                <div className="rounded-full border-2 border-dashed border-gray-200 p-4 w-full h-full">
                                    <img
                                        src={food1}
                                        alt="Hero Dish"
                                        className="w-full h-full rounded-full shadow-2xl object-cover"
                                    />
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute top-10 -right-10 w-32 h-32 bg-primary rounded-full opacity-10 blur-xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About / Features Section (Circular Layout) */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Circular Composition */}
                        <div className="relative flex justify-center items-center h-[500px]">
                            {/* Main Circle */}
                            <div className="relative w-80 h-80 rounded-full border-[40px] border-gray-50 shadow-inner flex items-center justify-center z-10">
                                <img src={food2} alt="Main Dish" className="w-64 h-64 rounded-full object-cover shadow-lg" />
                            </div>

                            {/* Orbiting Circles */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
                                <img src={food3} alt="Side Dish 1" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" />
                            </div>
                            <div className="absolute bottom-10 right-10">
                                <img src={food4} alt="Side Dish 2" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <img src={food5} alt="Side Dish 3" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                            </div>

                            {/* Decorative Ring */}
                            <div className="absolute inset-0 border border-dashed border-gray-300 rounded-full scale-125 opacity-50"></div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Many Recipes <br />
                                <span className="text-primary">Salty</span> To <span className="text-secondary">Sweet</span> <br />
                                And So Delicious
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Explore a world of flavors with our diverse menu. From spicy curries to sweet desserts, we have something for everyone. Our chefs use traditional recipes and the freshest ingredients to bring you the authentic taste of India.
                            </p>
                            <Link to="/menu" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors shadow-lg">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Popular Recipes Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gray-50"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-2">Most Popular Recipe</h2>
                            <p className="text-gray-600">Food In This Week</p>
                        </div>
                        <Link to="/menu" className="hidden md:inline-flex items-center text-primary font-medium hover:text-red-800">
                            See All <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {popularItems.map((item, index) => (
                            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-56 mb-4 overflow-hidden rounded-xl">
                                    <img
                                        src={foodImages[(index + 2) % foodImages.length]}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                                        ₹{item.price}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-heading text-xl font-bold text-gray-900 flex-1">{item.name}</h3>
                                    <div className={`mt-1 ml-2 flex-shrink-0 w-5 h-5 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center p-[3px] rounded-[4px]`} title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}>
                                        <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-gray-50 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden px-4 -mx-4 py-8 -my-8">
                            <motion.div
                                className="flex"
                                animate={{
                                    x: `-${currentIndex * (100 / itemsToShow)}%`
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`flex-shrink-0 px-4`}
                                        style={{ width: `${100 / itemsToShow}%` }}
                                    >
                                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between border border-gray-100 hover:border-primary/20 group transform hover:-translate-y-1">
                                            <div>
                                                <div className="flex text-secondary mb-6">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={18}
                                                            fill={i < testimonial.rating ? "currentColor" : "none"}
                                                            className={i < testimonial.rating ? "text-secondary" : "text-gray-300"}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                                                    "{testimonial.text}"
                                                </p>
                                            </div>

                                            <div className="flex items-center pt-6 border-t border-gray-50">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4 ring-2 ring-white shadow-md group-hover:ring-primary/20 transition-all">
                                                    <img
                                                        src={`https://i.pravatar.cc/150?u=${index + 10}`}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-sm text-gray-500">Verified Customer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-12 space-x-2">
                            {Array.from({ length: testimonials.length - itemsToShow + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Home;
