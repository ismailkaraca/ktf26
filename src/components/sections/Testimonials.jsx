import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Testimonials = () => {
    const { lang } = useLanguage();

    const testimonials = [
        {
            text: {
                tr: '"Rami Kütüphanesi\'nin büyülü atmosferinde, yapay zekanın kütüphanecilik hizmetlerini nasıl dönüştürebileceğine dair vizyoner sunumlar dinledik. 2025\'teki atölyelerden aldığım ilhamla kendi kurumumda yeni projeler başlattım. 2026\'yı iple çekiyorum!"',
                en: '"In the magical atmosphere of Rami Library, we listened to visionary presentations on how artificial intelligence can transform library services. Inspired by the 2025 workshops, I initiated new projects at my institution. Eagerly awaiting 2026!"'
            },
            author: {
                tr: '- Elif Demir, Halk Kütüphanecisi',
                en: '- Elif Demir, Public Librarian'
            },
            delay: 0
        },
        {
            text: {
                tr: '"Bir girişimci olarak, \'Üreten Kütüphaneler\' temalı fuar alanı, potansiyel iş birlikleri için inanılmaz fırsatlar sundu. Özellikle \'Kariyer Simülasyonu\' alanındaki genç yeteneklerle tanışmak çok değerliydi. KTF, teknoloji ve kültürü birleştiren nadir etkinliklerden."',
                en: '"As an entrepreneur, the \'Producing Libraries\' themed exhibition area offered incredible opportunities for potential collaborations. Meeting the young talents in the \'Career Simulation\' area was especially valuable. LTF is one of those rare events that combines technology and culture."'
            },
            author: {
                tr: '- Mehmet Öztürk, Teknoloji Girişimcisi',
                en: '- Mehmet Öztürk, Tech Entrepreneur'
            },
            delay: 150
        },
        {
            text: {
                tr: '"Robotik atölyesine katıldım ve \'KTF Stüdyo\' ile kendi yapay zeka görselimi oluşturdum. Hem eğlendim hem de gelecekteki mesleğim hakkında çok şey öğrendim. Sektör profesyonelleriyle doğrudan konuşabilmek harika bir şanstı."',
                en: '"I attended the robotics workshop and created my own AI image with \'LTF Studio\'. I had fun and learned a lot about my future profession. It was a great chance to talk directly with industry professionals."'
            },
            author: {
                tr: '- Zeynep Şahin, Bilgisayar Mühendisliği Öğrencisi',
                en: '- Zeynep Şahin, Computer Engineering Student'
            },
            delay: 300
        }
    ];

    return (
        <section className="py-20 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Katılımcı Deneyimleri' : 'Participant Experiences'}
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg scroll-animate border border-gray-100 dark:border-gray-700"
                            style={{ transitionDelay: `${testimonial.delay}ms` }}
                        >
                            <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                                {testimonial.text[lang]}
                            </p>
                            <p className="font-bold text-gray-900 dark:text-white">
                                {testimonial.author[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
