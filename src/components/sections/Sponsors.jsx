import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Sponsors = () => {
    const { lang } = useLanguage();

    return (
        <section id="sponsors" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Sponsorlar & Destekçiler' : 'Sponsors & Supporters'}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        {lang === 'tr'
                            ? 'Bu festival, değerli iş birliklerimiz sayesinde mümkün olmaktadır.'
                            : 'This festival is made possible by our valuable collaborations.'}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 scroll-animate">
                    <img
                        src="https://placehold.co/200x100/CCCCCC/FFFFFF?text=Teknoloji+%C5%9Eirketi"
                        alt="Teknoloji Şirketi"
                        loading="lazy"
                        decoding="async"
                        className="h-16 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <img
                        src="https://placehold.co/200x100/CCCCCC/FFFFFF?text=%C3%9Cniversite"
                        alt="Üniversite"
                        loading="lazy"
                        decoding="async"
                        className="h-20 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <img
                        src="https://placehold.co/200x100/CCCCCC/FFFFFF?text=Yay%C4%B1nc%C4%B1l%C4%B1k+Grubu"
                        alt="Yayıncılık Grubu"
                        loading="lazy"
                        decoding="async"
                        className="h-16 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <img
                        src="https://placehold.co/200x100/CCCCCC/FFFFFF?text=%C4%B0novasyon+Merkezi"
                        alt="İnovasyon Merkezi"
                        loading="lazy"
                        decoding="async"
                        className="h-16 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
