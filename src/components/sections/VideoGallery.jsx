import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import YouTubeFacade from '../ui/YouTubeFacade';

const VideoGallery = () => {
    const { t, lang } = useLanguage();
    const [activeTab, setActiveTab] = useState('2025');

    const videos2025 = [
        { id: 'DI2zR6npWhQ', title: { tr: '2. Uluslararası Kütüphane ve Teknoloji Festivali - 2025', en: '2nd International Library and Technology Festival - 2025' } },
        { id: 'mvCGCoYnGHM', title: { tr: '2. Uluslararası Kütüphane ve Teknoloji Festivali - 2025 Nasıl Geçti', en: 'How was the 2nd International Library and Technology Festival - 2025' } },
        { id: 'PYVO3gWnung', title: { tr: '2. Uluslararası Kütüphane ve Teknoloji Festivali hakkında Genel Müdürümüz Sn. Taner BEYOĞLU’nun Görüşleri', en: 'Our General Director Mr. Taner BEYOĞLU’s Views on the 2nd International Library and Technology Festival' } },
        { id: '1fQxIpchZRc', title: { tr: '2. Uluslararası Kütüphane ve Teknoloji Festivali\'nden - (İlke Haber Ajansı)', en: 'From the 2nd International Library and Technology Festival - (İlke News Agency)' } }
    ];

    const videos2024 = [
        { id: 'ST41o-si2Sg', title: { tr: '1. Uluslararası Kütüphane ve Teknoloji Festivali - 2024 Tanıtım Videosu', en: '1st International Library and Technology Festival - 2024 Promo Video' } },
        { id: 'Xgzk1OcD9CY', title: { tr: '1. Uluslararası Kütüphane ve Teknoloji Festivali - 2024 Nasıl Geçti', en: 'How was the 1st International Library and Technology Festival - 2024' } }
    ];

    return (
        <section id="video-gallery" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {t('video_gallery_title')}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        {t('video_gallery_desc')}
                    </p>
                </div>

                <div className="flex justify-center mb-8 scroll-animate">
                    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-inner">
                        <button
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === '2025' ? 'bg-white dark:bg-gray-600 shadow text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
                            onClick={() => setActiveTab('2025')}
                        >
                            {lang === 'tr' ? '2025 Videoları' : '2025 Videos'}
                        </button>
                        <button
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === '2024' ? 'bg-white dark:bg-gray-600 shadow text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
                            onClick={() => setActiveTab('2024')}
                        >
                            {lang === 'tr' ? '2024 Videoları' : '2024 Videos'}
                        </button>
                    </div>
                </div>

                <div id="video-gallery-content">
                    {activeTab === '2025' && (
                        <div className="video-gallery-year-content grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                            {videos2025.map((video, idx) => (
                                <div key={video.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl duration-300">
                                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                        <YouTubeFacade videoId={video.id} title={video.title[lang]} />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                                            {video.title[lang]}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === '2024' && (
                        <div className="video-gallery-year-content grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                            {videos2024.map((video, idx) => (
                                <div key={video.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl duration-300">
                                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                        <YouTubeFacade videoId={video.id} title={video.title[lang]} />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                                            {video.title[lang]}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
