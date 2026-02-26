import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DownloadCloud } from 'lucide-react';

const CanvaShowcase = () => {
    const { t, lang } = useLanguage();

    return (
        <section id="canva-showcase" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Halk Kütüphanelerinin Gelişen Vizyonu: Yaşayan, Üreten ve İyileştiren Kütüphane Modelleri' : 'The Evolving Vision of Public Libraries: Living, Producing, and Healing Library Models'}
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* Canva Iframe 1 (Landscape) */}
                    <div className="scroll-animate flex flex-col items-center w-full delay-150">
                        <div className="w-full max-w-[900px]">
                            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAG3xl7t-s0/o65eGBGvozdCBlf2B3RSjQ/view?embed"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full border-none"
                                    title="Festival Paydaşları ve Trendler"
                                ></iframe>
                            </div>
                        </div>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1WWdEEOTe6vUE6KAxbyrixVhJfTFwLGpu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            <DownloadCloud className="w-5 h-5 mr-2" />
                            <span>{lang === 'tr' ? 'Sunumu Görüntüle/İndir (PDF - 16.8 MB)' : 'View/Download Presentation (PDF - 16.8 MB)'}</span>
                        </a>
                    </div>

                    {/* Canva Iframe 2 (Portrait) */}
                    <div className="scroll-animate flex flex-col items-center w-full">
                        <div className="w-full max-w-[500px]">
                            <div className="relative w-full h-0 pb-[141.4286%] overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                <iframe
                                    loading="lazy"
                                    src="https://www.canva.com/design/DAG4SvkjeKw/gegyUnuDujIOjxXBg1jXng/view?embed"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full border-none"
                                    title="Festival İçerik Vizyonu"
                                ></iframe>
                            </div>
                        </div>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1h1gnF__M9Y5KNQ1YW6afAUmrl-qdPbXn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            <DownloadCloud className="w-5 h-5 mr-2" />
                            <span>{lang === 'tr' ? 'Belgeyi Görüntüle/İndir (PDF - 753 KB)' : 'View/Download Document (PDF - 753 KB)'}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CanvaShowcase;
