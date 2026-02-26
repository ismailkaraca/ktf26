import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Program = () => {
    const { lang } = useLanguage();
    const [activeTab, setActiveTab] = useState('day1');

    const schedule = {
        day1: [
            { time: '09.30 – 10.00', tr: 'Kayıt', en: 'Registration & Welcome Coffee', color: 'purple' },
            { time: '10.00 – 11.00', tr: 'Açılış Konuşmaları', en: 'Opening Ceremony', color: 'purple' },
            { time: '11.00 – 11.30', tr: 'Fuar Alanı Açılışı', en: 'Official Opening of the Exhibition Area', color: 'purple' },
            { time: '11.30 – 12.30', tr: 'Panel Oturumu', en: 'Panel Session', color: 'purple' },
            { time: '12.30 – 13.30', tr: 'Öğle Yemeği', en: 'Lunch Break', color: 'gray' },
            { time: '13.30 – 15.30', tr: 'Panel Oturumu', en: 'Panel Session', color: 'purple' },
            { time: '15.30 – 16.00', tr: 'Çay/Kahve Arası', en: 'Coffee Break', color: 'gray' },
            { time: '16.00 – 16.30', tr: 'Uluslararası Çocuk Kitapları Günü / Flashmob', en: 'International Children’s Book Day / Flashmob', color: 'purple' },
            { time: '16.30 – 17.30', tr: 'Kütüphaneciler için Yetkinlik Programı', en: 'Masterclass Program for Librarians', color: 'purple' },
            { time: '17.30', tr: 'Açılış Resepsiyonu / Kültürel Etkinlik', en: 'Opening Reception & Cultural Event', color: 'purple' },
        ],
        day2: [
            { time: '09.30 – 10.00', tr: 'İyileştiren Etkinlikler', en: 'Healing Activities', color: 'blue' },
            { time: '10.00 – 11.30', tr: 'IFLA Halk Kütüphaneleri Bölümü', en: 'IFLA Public Library Section', desc: { tr: 'IFLA Halk Kütüphaneleri Hizmet Rehberi Çalıştayı', en: 'Workshop* on IFLA Public Library Service Guidelines' }, color: 'blue' },
            { time: '11.30 – 12.45', tr: 'Poster Oturumu', en: 'Poster Session', color: 'blue' },
            { time: '12.45 – 14.00', tr: 'Öğle Yemeği', en: 'Lunch Break', color: 'gray' },
            { time: '14.00 – 16.00', tr: 'Panel Oturumu', en: 'Panel Session', color: 'blue' },
            { time: '16.00 – 16.30', tr: 'Çay/Kahve Arası', en: 'Coffee Break', color: 'gray' },
            { time: '16.30 – 18.00', tr: 'Kütüphaneciler için Yetkinlik Programı', en: 'Masterclass Program for Librarians', color: 'blue' },
        ],
        day3: [
            { time: '09.30 – 10.00', tr: 'İyileştiren Etkinlikler', en: 'Healing Activities', color: 'green' },
            { time: '10.00 – 11.30', tr: 'IFLA Çevre, Sürdürülebilirlik ve Kütüphaneler Bölümü', en: 'IFLA Environmental, Sustainability and Libraries Section', desc: { tr: 'Yeşil Kütüphaneler için IFLA Rehberi Çalıştayı', en: 'Workshop* on IFLA Guidelines for Green Libraries' }, color: 'green' },
            { time: '11.30 – 12.30', tr: 'Poster Oturumu', en: 'Poster Session', color: 'green' },
            { time: '12.45 – 14.00', tr: 'Öğle Yemeği', en: 'Lunch Break', color: 'gray' },
            { time: '14.00 – 16.00', tr: 'Panel Oturumu', en: 'Panel Session', color: 'green' },
            { time: '16.00 – 16.30', tr: 'Çay/Kahve Arası', en: 'Coffee Break', color: 'gray' },
            { time: '16.30 – 17.30', tr: 'Kütüphaneciler için Yetkinlik Programı', en: 'Masterclass Program for Librarians', color: 'green' },
        ]
    };

    const tabs = [
        { id: 'day1', label: { tr: '2 Nisan - Perşembe', en: 'April 2 - Thursday' } },
        { id: 'day2', label: { tr: '3 Nisan - Cuma', en: 'April 3 - Friday' } },
        { id: 'day3', label: { tr: '4 Nisan - Cumartesi', en: 'April 4 - Saturday' } },
    ];

    const getColorClasses = (color) => {
        switch (color) {
            case 'purple': return { border: 'border-purple-600', bgOuter: 'bg-white dark:bg-gray-800', bgInner: 'bg-purple-50 dark:bg-gray-700', textTime: 'text-purple-700 dark:text-purple-300', textTitle: 'text-gray-800 dark:text-white', shadow: 'shadow-lg' };
            case 'blue': return { border: 'border-blue-500', bgOuter: 'bg-white dark:bg-gray-800', bgInner: 'bg-blue-50 dark:bg-gray-700', textTime: 'text-blue-600 dark:text-blue-300', textTitle: 'text-gray-800 dark:text-white', shadow: 'shadow-lg' };
            case 'green': return { border: 'border-green-500', bgOuter: 'bg-white dark:bg-gray-800', bgInner: 'bg-green-50 dark:bg-gray-700', textTime: 'text-green-600 dark:text-green-300', textTitle: 'text-gray-800 dark:text-white', shadow: 'shadow-lg' };
            case 'gray': return { border: 'border-gray-400', bgOuter: 'bg-gray-100 dark:bg-gray-700/50', bgInner: 'bg-gray-200 dark:bg-gray-800', textTime: 'text-gray-600 dark:text-gray-400', textTitle: 'text-gray-700 dark:text-gray-300', shadow: 'shadow-inner' };
            default: return { border: 'border-purple-600', bgOuter: 'bg-white dark:bg-gray-800', bgInner: 'bg-purple-50 dark:bg-gray-700', textTime: 'text-purple-700 dark:text-purple-300', textTitle: 'text-gray-800 dark:text-white', shadow: 'shadow-lg' };
        }
    };

    return (
        <section id="program" className="py-20 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? '2026 Taslak Programı' : '2026 Draft Program'}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {lang === 'tr' ? 'Bilgi, inovasyon ve sanatla dolu 3 gün. (Program taslak aşamasındadır)' : '3 days full of knowledge, innovation, and art. (Program is in draft stage)'}
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="sticky top-20 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur pb-4 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 flex flex-wrap justify-center gap-4 mb-8" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-transform transform hover:scale-105 ${activeTab === tab.id ? 'text-white bg-purple-600 shadow-lg' : 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-gray-800 shadow-md hover:bg-purple-100 dark:hover:bg-gray-700'}`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                        >
                            <span>{tab.label[lang]}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="program-tab-content block animate-fade-in-up">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {schedule[activeTab].map((item, idx) => {
                            const colors = getColorClasses(item.color);
                            return (
                                <div key={idx} className={`flex flex-col md:flex-row rounded-xl overflow-hidden border-l-4 ${colors.bgOuter} ${colors.border} ${colors.shadow} transition-transform hover:-translate-y-1`}>
                                    <div className={`md:w-1/4 p-6 flex items-center justify-center md:justify-start ${colors.bgInner}`}>
                                        <span className={`text-xl font-bold ${colors.textTime}`}>{item.time}</span>
                                    </div>
                                    <div className="md:w-3/4 p-6 flex flex-col justify-center">
                                        <h3 className={`text-lg font-bold ${colors.textTitle}`}>{item[lang]}</h3>
                                        {item.desc && (
                                            <p className="text-gray-600 dark:text-gray-400 mt-1">{item.desc[lang]}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;
