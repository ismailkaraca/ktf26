import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Başa Dön"
                    className="fixed bottom-6 right-6 p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl transition-all duration-300 transform hover:-translate-y-2 z-[99]"
                >
                    <ArrowUp className="w-6 h-6 animate-bounce" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
