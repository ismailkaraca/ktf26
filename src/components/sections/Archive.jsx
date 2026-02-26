import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, DownloadCloud, Images } from 'lucide-react';

const Archive = () => {
    const { lang } = useLanguage();
    const [activeYear, setActiveYear] = useState('2025');

    const archiveData = {
        '2025': {
            title: { tr: '2025: Üreten Kütüphaneler', en: '2025: Producing Libraries' },
            posterLink: 'https://www.kutuphaneveteknoloji.com/ktf-2025/ktf-2025-program/2025-poster-sunumlari/',
            presentationLink: 'https://www.kutuphaneveteknoloji.com/ktf-2024/2025-sunumlar/',
            albums: [
                { title: { tr: '1. Gün', en: 'Day 1' }, doc: { tr: '4 Nisan 2025', en: 'April 4, 2025' }, link: 'https://photos.app.goo.gl/5qGGzLWB7fmwDS839', gradient: 'from-purple-500 to-blue-500' },
                { title: { tr: '2. Gün', en: 'Day 2' }, doc: { tr: '5 Nisan 2025', en: 'April 5, 2025' }, link: 'https://photos.app.goo.gl/Mvnp1QSZyNdfAi296', gradient: 'from-blue-500 to-cyan-500' },
                { title: { tr: '3. Gün', en: 'Day 3' }, doc: { tr: '6 Nisan 2025', en: 'April 6, 2025' }, link: 'https://photos.app.goo.gl/b5YVCcTu9xVZ73EXA', gradient: 'from-cyan-500 to-teal-500' },
                { title: { tr: 'Atölyeler', en: 'Workshops' }, doc: { tr: '4-6 Nisan 2025', en: 'April 4-6, 2025' }, link: 'https://photos.app.goo.gl/dtPqbJvqacL6iZDY9', gradient: 'from-teal-500 to-green-500' },
            ]
        },
        '2024': {
            title: { tr: '2024: Dijital Ufuklar', en: '2024: Digital Horizons' },
            posterLink: 'https://www.kutuphaneveteknoloji.com/ktf-2024/2024-poster-sunumlari/',
            presentationLink: 'https://www.kutuphaneveteknoloji.com/ktf-2024/2024-sunumlar/',
            albums: [
                { title: { tr: '1. Gün', en: 'Day 1' }, doc: { tr: '23 Mart 2024', en: 'March 23, 2024' }, link: 'https://photos.app.goo.gl/no7ZVSGc7SjHaAVJ7', gradient: 'from-purple-600 to-pink-600' },
                { title: { tr: '2. Gün', en: 'Day 2' }, doc: { tr: '24 Mart 2024', en: 'March 24, 2024' }, link: 'https://photos.app.goo.gl/BrmXxcs7vfacAg43A', gradient: 'from-pink-600 to-red-600' },
                { title: { tr: '3. Gün', en: 'Day 3' }, doc: { tr: '25 Mart 2024', en: 'March 25, 2024' }, link: 'https://photos.app.goo.gl/2MSzY7qt9b4SdjWG7', gradient: 'from-red-600 to-orange-600' },
                { title: { tr: '4. Gün', en: 'Day 4' }, doc: { tr: '27 Mart 2024', en: 'March 27, 2024' }, link: 'https://photos.app.goo.gl/yLZqEAWSBJ9GF4c28', gradient: 'from-orange-600 to-yellow-600' },
            ]
        }
    };

    const activeData = archiveData[activeYear];

    return (
        <section id="archive" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Geçmiş Festivaller Arşivi' : 'Past Festivals Archive'}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        {lang === 'tr' ? 'Önceki yılların heyecanını ve birikimini keşfedin.' : 'Discover the excitement and knowledge from previous years.'}
                    </p>
                </div>

                <div className="flex justify-center mb-8 scroll-animate">
                    <div className="flex space-x-2 bg-white dark:bg-gray-700 p-2 rounded-xl shadow-inner">
                        {['2025', '2024'].map(year => (
                            <button
                                key={year}
                                className={`px-6 py-2 rounded-lg font-bold transition-colors ${activeYear === year ? 'bg-gray-200 dark:bg-gray-600 shadow text-purple-700 dark:text-purple-300' : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                <div id="archive-content" className="space-y-12">
                    <div className="archive-year-content animate-fade-in-up">
                        <div className="scroll-animate">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                                {activeData.title[lang]}
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8 text-center">
                                <div>
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                        {lang === 'tr' ? 'Poster Sunumları' : 'Poster Presentations'}
                                    </h4>
                                    <a href={activeData.posterLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-xs mx-auto flex items-center justify-center space-x-2">
                                        <Download className="w-5 h-5" />
                                        <span>{lang === 'tr' ? 'Tümünü Görüntüle' : 'View All'}</span>
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                        {lang === 'tr' ? 'Sunum PDF\'leri' : 'Presentation PDFs'}
                                    </h4>
                                    <a href={activeData.presentationLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-xs mx-auto flex items-center justify-center space-x-2">
                                        <DownloadCloud className="w-5 h-5" />
                                        <span>{lang === 'tr' ? 'Tümünü Görüntüle' : 'View All'}</span>
                                    </a>
                                </div>
                            </div>

                            {/* Photo Albums Section */}
                            <div className="mt-12">
                                <h4 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                                    {lang === 'tr' ? 'Fotoğraf Albümleri' : 'Photo Albums'}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {activeData.albums.map((album, idx) => (
                                        <a key={idx} href={album.link} target="_blank" rel="noopener noreferrer" className={`bg-gradient-to-br ${album.gradient} rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl block`}>
                                            <div className="p-6 text-white text-center">
                                                <Images className="w-12 h-12 mx-auto mb-3" />
                                                <h5 className="font-bold text-lg mb-2">{album.title[lang]}</h5>
                                                <p className="text-sm opacity-90">{album.doc[lang]}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Archive;
