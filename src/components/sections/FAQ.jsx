import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const { lang } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: {
                tr: 'Festival ne zaman ve nerede yapılacak?',
                en: 'When and where will the festival take place?'
            },
            answer: {
                tr: 'Festival, 2-4 Nisan 2026 tarihleri arasında Rami Kütüphanesi, İstanbul\'da gerçekleştirilecektir. Ayrıca bazı etkinlikler online olarak da yayınlanacaktır.',
                en: 'The festival will take place from April 2-4, 2026, at Rami Library, Istanbul. Some events will also be broadcast online.'
            }
        },
        {
            question: {
                tr: 'Katılım ücretli mi?',
                en: 'Is there a participation fee?'
            },
            answer: {
                tr: 'Festivale katılım ve atölyeler tamamen ücretsizdir.',
                en: 'Participation in the festival and workshops is completely free.'
            }
        },
        {
            question: {
                tr: 'Konuşmacı veya sponsor olarak nasıl başvurabilirim?',
                en: 'How can I apply as a speaker or sponsor?'
            },
            answer: {
                tr: <>Konuşmacı ve sponsorluk başvuruları için lütfen <a href="#contact" className="text-purple-600 hover:underline">iletişim</a> bölümünden bize ulaşın. Değerli katkılarınızı bekliyoruz.</>,
                en: <>For speaker and sponsorship applications, please contact us via the <a href="#contact" className="text-purple-600 hover:underline">contact</a> section. We look forward to your valuable contributions.</>
            }
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
                    </h2>
                </div>
                <div className="space-y-4 scroll-animate mt-12">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-600">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left flex justify-between items-center p-5 font-semibold text-lg cursor-pointer text-gray-800 dark:text-gray-200 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question[lang]}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-5 pt-0 text-gray-600 dark:text-gray-400">
                                        <p>{faq.answer[lang]}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
