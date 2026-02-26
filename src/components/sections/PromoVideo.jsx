import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Play } from 'lucide-react';

const PromoVideo = () => {
    const { lang } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative overflow-hidden w-full max-w-7xl mx-auto rounded-none md:rounded-3xl shadow-2xl mb-12 lg:mb-20">
            <div className="aspect-video relative group">
                {!isPlaying ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: "url('https://img.youtube.com/vi/mvCGCoYnGHM/maxresdefault.jpg')" }}
                        onClick={() => setIsPlaying(true)}
                    >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-600/90 rounded-full flex items-center justify-center z-10 shadow-lg shadow-purple-500/50 transform group-hover:scale-110 transition-all duration-300">
                            <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-2" />
                        </div>
                    </div>
                ) : (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/mvCGCoYnGHM?autoplay=1&mute=1&controls=0&loop=1&playlist=mvCGCoYnGHM&rel=0&showinfo=0&modestbranding=1"
                        title="3. Kütüphane ve Teknoloji Festivali"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            {!isPlaying && (
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {lang === 'tr' ? '3. KTF 2026 Tanıtım Filmi' : '3. LTF 2026 Promo Video'}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {lang === 'tr' ? 'The Healing Library - İyileştiren Kütüphane' : 'The Healing Library'}
                    </p>
                </div>
            )}
        </section>
    );
};

export default PromoVideo;
