import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Articles = () => {
    const { lang } = useLanguage();

    const articles = [
        {
            url: "https://www.kutuphaneveteknoloji.com/large-language-models-and-innovative-libraries-shaping-the-future-of-information-access/",
            imgSrc: "https://placehold.co/600x400/9c27b0/FFFFFF?text=LLM+and+Libraries",
            imgAlt: "Büyük Dil Modelleri ve Yenilikçi Kütüphaneler",
            title: "Large Language Models and Innovative Libraries: Shaping the Future of Information Access",
            authorName: "Osman KAVAF",
            authorDesc: "Product Manager of MAIN HAVELSAN"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/yapay-zekanin-kultur-ve-sanatla-iliskisi/",
            imgSrc: "https://placehold.co/600x400/0693e3/FFFFFF?text=AI+K%C3%BClt%C3%BCr+Sanat",
            imgAlt: "Yapay Zekânın Kültür ve Sanatla İlişkisi",
            title: "Yapay Zekânın Kültür ve Sanatla İlişkisi",
            authorName: "Dr. Öğr. Üyesi Yusuf UZUN",
            authorDesc: "Necmettin Erbakan Üniversitesi"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/bilgi-hizmetlerinde-yapay-zeka-destekli-chatbot-sohbet-robotu-kullanimi/",
            imgSrc: "https://placehold.co/600x400/5e35b1/FFFFFF?text=AI+Chatbot",
            imgAlt: "Bilgi Hizmetlerinde Yapay Zekâ Destekli Chatbot Kullanımı",
            title: "Bilgi Hizmetlerinde Yapay Zekâ Destekli Chatbot (Sohbet Robotu) Kullanımı",
            authorName: "Dr. İhsan Özkol",
            authorDesc: "İzmir Kâtip Çelebi Üniversitesi"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/qulto-infrastructure-for-higher-education-and-research/",
            imgSrc: "https://placehold.co/600x400/9c27b0/FFFFFF?text=Qulto",
            imgAlt: "Qulto altyapısı",
            title: "Qulto infrastructure for higher education and research",
            authorName: "János Pancza",
            authorDesc: "Portfolio Manager, qulto.eu"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/the-future-of-libraries-the-meeting-of-artificial-intelligence-and-innovation/",
            imgSrc: "https://placehold.co/600x400/0693e3/FFFFFF?text=Future+of+Libraries",
            imgAlt: "Kütüphanelerin Geleceği",
            title: "The Future of Libraries: The Meeting of Artificial Intelligence and Innovation",
            authorName: "Iman Magdy Khamis, MLIS, MSDS",
            authorDesc: "Library Director, Northwestern Qatar"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/ai-dunyasi-yapay-zeka-okuryazarligi-egitimde-yeni-bir-rota/",
            imgSrc: "https://placehold.co/600x400/5e35b1/FFFFFF?text=AI+D%C3%BCnyas%C4%B1",
            imgAlt: "AI Dünyası: Yapay Zeka Okuryazarlığı",
            title: "AI Dünyası: Yapay Zeka Okuryazarlığı Eğitimde Yeni Bir Rota",
            authorName: "Sevgi ARIOĞLU",
            authorDesc: "Koç Okulu Kütüphaneleri Yöneticisi"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/dil-kultur-ve-yapay-zeka-evrimi-agac-metaforu/",
            imgSrc: "https://placehold.co/600x400/9c27b0/FFFFFF?text=A%C4%9Fa%C3%A7+Metaforu",
            imgAlt: "Dil, Kültür ve Yapay Zeka Evrimi",
            title: "Dil, Kültür ve Yapay Zeka Evrimi: Ağaç Metaforu",
            authorName: "Buket CALP",
            authorDesc: ""
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/teknolojinin-kutuphanelerin-gelecegine-etkisi/",
            imgSrc: "https://placehold.co/600x400/0693e3/FFFFFF?text=Teknoloji+Kütüphanelerin+Geleceği",
            imgAlt: "Teknolojinin Kütüphanelerin Geleceğine Etkisi",
            title: "Teknolojinin Kütüphanelerin Geleceğine Etkisi",
            authorName: "Dr. Öğr. Üyesi Ayşenur Akbulut",
            authorDesc: "Kastamonu Üniversitesi"
        },
        {
            url: "https://www.kutuphaneveteknoloji.com/kutuphane-diplomasisinin-itici-gucu-olarak-kutuphaneler/",
            imgSrc: "https://placehold.co/600x400/0693e3/FFFFFF?text=Kütüphane+Diplomasisinin+İtici+Gücü",
            imgAlt: "Kütüphane Diplomasisinin İtici Gücü Olarak Kütüphaneler",
            title: "Kütüphane Diplomasisinin İtici Gücü Olarak Kütüphaneler",
            authorName: "Öğr. Gör. Selçuk Aydın",
            authorDesc: "İstanbul Üniversitesi"
        }
    ];

    return (
        <section id="articles" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Makaleler' : 'Articles'}
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
                        {lang === 'tr'
                            ? 'Kütüphanecilik ve teknoloji dünyasından uzman görüşleri ve değerlendirmeler.'
                            : 'Expert opinions and reviews from the world of librarianship and technology.'}
                    </p>
                    <p className="text-md text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        {lang === 'tr' ? (
                            <>Yazılarınızı bizimle paylaşmak için lütfen <a href="#contact" className="text-purple-600 dark:text-purple-400 hover:underline">iletişim</a> kurun.</>
                        ) : (
                            <>To share your articles with us, please <a href="#contact" className="text-purple-600 dark:text-purple-400 hover:underline">contact us</a>.</>
                        )}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-gray-100 dark:border-gray-600 scroll-animate">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                <img src={article.imgSrc} alt={article.imgAlt} loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                            </a>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold mb-3 flex-grow text-gray-900 dark:text-white">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {article.title}
                                    </a>
                                </h3>
                                <div className="flex items-center mt-4">
                                    <div>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{article.authorName}</p>
                                        {article.authorDesc && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{article.authorDesc}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
