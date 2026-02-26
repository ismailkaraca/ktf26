import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Sparkles, CheckCircle2, Image as ImageIcon, BookOpen, Download } from 'lucide-react';

const KTFStudio = () => {
    const { lang } = useLanguage();

    return (
        <section id="ktf-studio-cta" className="bg-gray-900 text-gray-300 py-20 sm:py-24 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* Left Column */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 text-sm font-semibold bg-[#241bc6]/20 text-[#bf24c6] px-3 py-1 rounded-full">
                            <Sparkles className="w-4 h-4" />
                            <span>{lang === 'tr' ? 'Yapay Zeka Destekli' : 'AI-Powered'}</span>
                        </div>

                        {/* Title & Lead Text */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#bf24c6] to-[#241bc6] bg-clip-text text-transparent">
                                {lang === 'tr' ? 'KTF Stüdyo: Sanat ve Yapay Zekâ Buluşması' : 'LTF Studio: Where Art Meets AI'}
                            </h2>
                            <p className="text-lg text-gray-300 max-w-3xl">
                                {lang === 'tr'
                                    ? 'Festival ruhunu kendi fotoğrafınızla birleştirip, sevdiğiniz edebî karakterden ilham alan yapay zekâ destekli sanatsal bir portre ve ona eşlik eden kısa bir hikâye oluşturun. Tek tıkla indirin, sosyal medyada paylaşın, festivale kendi tarzınızla katılın!'
                                    : 'Combine the festival spirit with your own photo to create an AI-powered artistic portrait inspired by your favorite literary character, accompanied by a short story. Download with one click, share on social media, and join the festival in your own style!'}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://gemini.google.com/share/a3f5381a4ede"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="animate-wiggle-continuous inline-flex w-full sm:w-auto flex-grow items-center justify-center px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-[#bf24c6] to-[#241bc6] hover:from-[#bf24c6]/90 hover:to-[#241bc6]/90 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bf24c6] focus:ring-offset-gray-900"
                            >
                                <span>{lang === 'tr' ? 'Festivale Özel Yapay Zeka Görselini Oluşturmak İçin Tıkla!' : 'Click to Create Your Festival AI Image!'}</span>
                            </a>
                            <a
                                href="https://www.instagram.com/explore/tags/kutuphaneveteknolojifestivalindeyim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-gray-200 bg-gray-700/50 border border-gray-600 hover:bg-gray-700/80 rounded-xl transition-colors w-full sm:w-auto"
                            >
                                <span>{lang === 'tr' ? 'İlham Al!' : 'Get Inspired!'}</span>
                            </a>
                        </div>

                        {/* Footnote */}
                        <p className="text-xs text-gray-500 pt-2">
                            {lang === 'tr'
                                ? 'Oturum açma; kimlik doğrulama, üretim kotası ve kötüye kullanımın önlenmesi içindir. İçerikleriniz yalnızca sizin işleminizle paylaşılır.'
                                : 'Sign-in is for authentication, generation quota, and abuse prevention. Your content is only shared through your own actions.'}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <ImageIcon className="w-5 h-5 text-[#bf24c6] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-100">{lang === 'tr' ? 'Sanatsal Portre' : 'Artistic Portrait'}</h4>
                                    <p className="text-sm text-gray-400">
                                        {lang === 'tr'
                                            ? 'Kamera ile çek veya .jpg/.png yükle; “Sherlock Holmes gibi” benzeri bir tema gir, KTF Stüdyo kütüphane + teknoloji temalı özgün görsel üretsin.'
                                            : 'Use your camera or upload a .jpg/.png; enter a theme like "Sherlock Holmes style," and LTF Studio will generate a unique library + technology-themed image.'}
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <BookOpen className="w-5 h-5 text-[#bf24c6] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-100">{lang === 'tr' ? 'Hikâye Yazdır' : 'Generate a Story'}</h4>
                                    <p className="text-sm text-gray-400">
                                        {lang === 'tr'
                                            ? 'Portre hazır olunca tek tıkla festival bağlamında 3 paragraflık kısa bir hikâye oluştur.'
                                            : 'Once the portrait is ready, generate a 3-paragraph short story in the context of the festival with a single click.'}
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Download className="w-5 h-5 text-[#bf24c6] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-100">{lang === 'tr' ? 'İndir & Paylaş' : 'Download & Share'}</h4>
                                    <p className="text-sm text-gray-400">
                                        {lang === 'tr'
                                            ? 'Final görseli .png indir; Instagram, Facebook, X, Threads, LinkedIn; ayrıca WhatsApp/Telegram için hazır iki metin seçeneği: standart ve hikâyeli.'
                                            : 'Download the final image as a .png; ready-to-share text options for Instagram, Facebook, X, Threads, LinkedIn, plus WhatsApp/Telegram: standard and with a story.'}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* 3 Step Card */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                {lang === 'tr' ? '3 Adımda Kendi Eserini Yarat' : 'Create Your Masterpiece in 3 Steps'}
                            </h3>
                            <ol className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#241bc6] text-white font-bold rounded-full">1</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-200">{lang === 'tr' ? 'Fotoğrafı ekle' : 'Add a photo'}</h4>
                                        <p className="text-sm text-gray-400">{lang === 'tr' ? 'Kamera ile çek veya .jpg/.png yükle.' : 'Use your camera or upload a .jpg/.png.'}</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#241bc6] text-white font-bold rounded-full">2</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-200">{lang === 'tr' ? 'Karakteri yaz' : 'Enter the character'}</h4>
                                        <p className="text-sm text-gray-400">{lang === 'tr' ? 'Örn. “Sherlock Holmes gibi” → Portreyi oluştur.' : 'e.g. "Sherlock Holmes style" → Generate portrait.'}</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#241bc6] text-white font-bold rounded-full">3</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-200">{lang === 'tr' ? 'İndir & Paylaş' : 'Download & Share'}</h4>
                                        <p className="text-sm text-gray-400">{lang === 'tr' ? 'İstersen hikâyeni yazdır; görseli kaydet ve tek tıkla paylaş.' : 'Optionally, generate a story; save the image and share with one click.'}</p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        {/* Example Preview */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg overflow-hidden relative">
                            <a href="https://www.kutuphaneveteknoloji.com/wp-content/uploads/2025/10/ktf-studyosu-gorseli.png" target="_blank" rel="noopener noreferrer" className="block relative group">
                                <img
                                    src="https://www.kutuphaneveteknoloji.com/wp-content/uploads/2025/10/ktf-studyosu-gorseli.png"
                                    alt="KTF Stüdyo Örnek Portre"
                                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/888/FFFFFF?text=G%C3%B6rsel+Y%C3%BCklenemedi'; }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                                    <span>{lang === 'tr' ? 'Örnek Görsel' : 'Sample Image'}</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KTFStudio;
