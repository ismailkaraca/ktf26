import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Vision = () => {
    const { t, lang } = useLanguage();

    return (
        <section id="vision" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Ana Tema: İyileştiren Kütüphane' : 'Main Theme: The Healing Library'}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        {lang === 'tr'
                            ? '2-4 Nisan 2026 tarihlerinde düzenleyeceğimiz Uluslararası Kütüphane ve Teknoloji Festivali\'nin ana teması "The Healing Library / İyileştiren Kütüphane" olarak belirlenmiştir.'
                            : 'The main theme of the International Library and Technology Festival, which we will organize on April 2-4, 2026, is "The Healing Library / İyileştiren Kütüphane".'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
