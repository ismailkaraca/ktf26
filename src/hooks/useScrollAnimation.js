import { useEffect } from 'react';

export const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        // We shouldn't query the whole DOM inside a hook ideally, but it's a quick way 
        // to map to the legacy `.scroll-animate` class behavior.
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));

        // Also observe dynamically added elements roughly by returning a ref or using a MutationObserver
        // For simplicity, we just observe what's in the DOM when this runs.

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
};
