import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageCircle, X } from 'lucide-react';

const chatTree = {
    'start': {
        message: {
            tr: 'Merhaba! Ben KTF Asistanı. Size nasıl yardımcı olabilirim?',
            en: 'Hello! I am the LTF Assistant. How can I help you?'
        },
        options: [
            { text: { tr: 'Festival hakkında genel bilgi', en: 'General info about the festival' }, nextId: 'general_info' },
            { text: { tr: 'Katılım ve Kayıt', en: 'Participation & Registration' }, nextId: 'participation_info' },
            { text: { tr: 'Program ve Etkinlikler', en: 'Program & Events' }, nextId: 'program_info' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' }
        ]
    },
    'general_info': {
        message: {
            tr: 'Harika! Genel bilgilerden hangisini merak ediyorsunuz?',
            en: 'Great! Which general information are you curious about?'
        },
        options: [
            { text: { tr: 'Festival ne zaman ve nerede?', en: 'When and where is the festival?' }, nextId: 'date_location' },
            { text: { tr: 'Festivalin teması nedir?', en: 'What is the theme of the festival?' }, nextId: 'theme' },
            { text: { tr: 'Başa Dön', en: 'Go Back' }, nextId: 'start' }
        ]
    },
    'date_location': {
        message: {
            tr: 'Festival, 2-4 Nisan 2026 tarihleri arasında İstanbul\'daki tarihi Rami Kütüphanesi\'nde gerçekleştirilecektir. Ulaşım detayları için İletişim bölümüne bakabilirsiniz.',
            en: 'The festival will take place from April 2-4, 2026, at the historic Rami Library in Istanbul. You can check the Contact section for transportation details.'
        },
        options: [
            { text: { tr: 'Yeni bir soru sormak istiyorum', en: 'I want to ask a new question' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'general_info' }
        ]
    },
    'theme': {
        message: {
            tr: '2026 festivalinin ana teması "The Healing Library / İyileştiren Kütüphane" olarak belirlenmiştir. Kütüphanelerin toplumsal iyileşmedeki rolünü ve yenilikçi yaklaşımları keşfedeceğiz.',
            en: 'The main theme for the 2026 festival is "The Healing Library / İyileştiren Kütüphane". We will explore the role of libraries in social healing and innovative approaches.'
        },
        options: [
            { text: { tr: 'Başka bir şey sor', en: 'Ask something else' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'general_info' }
        ]
    },
    'participation_info': {
        message: {
            tr: 'Katılım ve kayıt ile ilgili ne öğrenmek istersiniz?',
            en: 'What would you like to know about participation and registration?'
        },
        options: [
            { text: { tr: 'Katılım ücretli mi?', en: 'Is there a fee?' }, nextId: 'fee' },
            { text: { tr: 'Kimler katılabilir?', en: 'Who can attend?' }, nextId: 'who_can_attend' },
            { text: { tr: 'Nasıl kayıt olurum?', en: 'How can I register?' }, nextId: 'how_to_register' },
            { text: { tr: 'Başa Dön', en: 'Go Back' }, nextId: 'start' }
        ]
    },
    'fee': {
        message: {
            tr: 'Harika bir haberimiz var! Festivale katılım ve tüm atölyeler tamamen ücretsizdir. Sadece online kayıt formunu doldurmanız yeterli.',
            en: 'We have great news! Participation in the festival and all workshops is completely free. You just need to fill out the online registration form.'
        },
        options: [
            { text: { tr: 'Teşekkürler, başa dön', en: 'Thanks, go back' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'participation_info' }
        ]
    },
    'who_can_attend': {
        message: {
            tr: 'Kütüphaneciler, akademisyenler, öğrenciler, teknoloji firmaları, girişimciler, sanatçılar ve teknolojiye merak duyan herkes festivalimize davetlidir!',
            en: 'Librarians, academics, students, tech companies, entrepreneurs, artists, and anyone curious about technology is invited to our festival!'
        },
        options: [
            { text: { tr: 'Anladım, başa dön', en: 'Got it, go back' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'participation_info' }
        ]
    },
    'how_to_register': {
        message: {
            tr: 'Çok kolay! Web sitemizdeki "Kayıt Ol" bölümüne giderek online formu doldurabilirsiniz. Formu gönderdikten sonra kaydınız tamamlanacaktır.',
            en: 'It\'s very easy! You can go to the "Participation" section on our website and fill out the online form. Your registration will be complete after submitting the form.'
        },
        options: [
            { text: { tr: 'Tamamdır, başa dönelim', en: 'Okay, let\'s go back' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'participation_info' }
        ]
    },
    'program_info': {
        message: {
            tr: 'Festival programı dopdolu! Hangi tür etkinliklerle ilgileniyorsunuz?',
            en: 'The festival program is packed! What kind of events are you interested in?'
        },
        options: [
            { text: { tr: 'Atölyeler', en: 'Workshops' }, nextId: 'workshops' },
            { text: { tr: 'Konferans ve Paneller', en: 'Conferences & Panels' }, nextId: 'panels' },
            { text: { tr: 'Başa Dön', en: 'Go Back' }, nextId: 'start' }
        ]
    },
    'workshops': {
        message: {
            tr: 'Festivalde AI, yazılım, robotik, tasarım ve girişimcilik üzerine uygulamalı eğitimler ve atölyeler düzenlenecektir. Detaylı program yakında açıklanacak.',
            en: 'The festival will feature hands-on training and workshops on AI, software, robotics, design, and entrepreneurship. The detailed schedule will be announced soon.'
        },
        options: [
            { text: { tr: 'Harika, başa dön', en: 'Great, go back' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'program_info' }
        ]
    },
    'panels': {
        message: {
            tr: 'Alanında uzman uluslararası konuşmacıların katılımıyla kütüphaneciliğin geleceği, yapay zeka ve dijital dönüşüm gibi konuların ele alınacağı ilham verici konferans ve paneller sizleri bekliyor.',
            en: 'Inspiring conferences and panels await you, where the future of librarianship, artificial intelligence, and digital transformation will be discussed with the participation of international expert speakers.'
        },
        options: [
            { text: { tr: 'Anlaşıldı, başa dön', en: 'Understood, go back' }, nextId: 'start' },
            { text: { tr: 'Başka bir sorum var!', en: 'I have another question!' }, nextId: 'custom_question' },
            { text: { tr: '« Geri Dön', en: '« Go Back' }, nextId: 'program_info' }
        ]
    },
    'custom_question': {
        message: {
            tr: 'Anlıyorum. Lütfen formu doldurun ve iletişim tercihinizi belirtin. Seçiminize göre ilgili alanı doldurmanız zorunludur.',
            en: 'I understand. Please fill out the form and select your contact preference. You must fill in the corresponding field based on your selection.'
        },
        form: true,
        options: [
            { text: { tr: 'Vazgeç, başa dön', en: 'Cancel, go back' }, nextId: 'start' }
        ]
    },
    'question_submitted': {
        message: {
            tr: 'Sorunuz başarıyla iletildi. Tercihinize göre en kısa sürede sizinle iletişime geçeceğiz. Başka bir konuda yardımcı olabilir miyim?',
            en: 'Your question has been successfully sent. We will contact you shortly based on your preference. Can I help with anything else?'
        },
        options: [
            { text: { tr: 'Evet, ana menüye dön', en: 'Yes, return to main menu' }, nextId: 'start' },
            { text: { tr: 'Hayır, teşekkürler', en: 'No, thanks' }, nextId: 'end_chat' }
        ]
    },
    'end_chat': {
        message: {
            tr: 'Yardımcı olabildiğime sevindim! İyi günler.',
            en: 'Glad I could help! Have a great day.'
        },
        isEnd: true
    }
};

const Chatbot = () => {
    const { lang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([{ type: 'bot', nodeId: 'start' }]);
    const [currentNodeId, setCurrentNodeId] = useState('start');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', 'chat-country-code': '+90', contact_preference: 'email', question: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [history, isOpen, currentNodeId]);

    const handleOptionClick = (nextId, text) => {
        setHistory(prev => [...prev, { type: 'user', text: text[lang] }]);
        setTimeout(() => {
            setHistory(prev => [...prev, { type: 'bot', nodeId: nextId }]);
            setCurrentNodeId(nextId);
        }, 300);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'phone') {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: numbersOnly });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError('');

        const preference = formData.contact_preference;
        let errorMessage = '';

        if (preference === 'email' && !formData.email) {
            errorMessage = lang === 'tr' ? 'Lütfen e-posta adresinizi girin.' : 'Please enter your email address.';
        } else if (preference === 'phone' && !formData.phone) {
            errorMessage = lang === 'tr' ? 'Lütfen telefon numaranızı girin.' : 'Please enter your phone number.';
        }

        if (errorMessage) {
            setFormError(errorMessage);
            setIsSubmitting(false);
            return;
        }

        const submissionData = new FormData();
        for (const key in formData) {
            submissionData.append(key, formData[key]);
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyuI28bUKrCzwJmU3R4GMAk6XoMy30-F_Jz6s3LpwoWim7ftd2L9LEDAIGaj7DF0DVJ/exec';

        fetch(scriptURL, { method: 'POST', body: submissionData })
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response;
            })
            .then(() => {
                setHistory(prev => [...prev, { type: 'user', text: lang === 'tr' ? 'Yeni bir soru gönderildi.' : 'A new question was sent.' }]);
                setFormData({ name: '', email: '', phone: '', 'chat-country-code': '+90', contact_preference: 'email', question: '' });

                setTimeout(() => {
                    setHistory(prev => [...prev, { type: 'bot', nodeId: 'question_submitted' }]);
                    setCurrentNodeId('question_submitted');
                }, 300);
            })
            .catch((err) => {
                console.error(err);
                setFormError(lang === 'tr' ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' : 'Could not send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const currentNode = chatTree[currentNodeId];

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={lang === 'tr' ? 'Festival Asistanı' : 'Festival Assistant'}
                className="fixed bottom-24 right-5 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110 animate-pulse-chat outline-none"
            >
                <MessageCircle className="w-8 h-8" />
            </button>

            {isOpen && (
                <div className="fixed bottom-[10.75rem] right-5 z-50 bg-white dark:bg-gray-800 rounded-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl w-[350px] max-w-[calc(100vw-40px)] h-[500px] max-h-[calc(100vh-220px)] animate-fade-in-up">
                    <div className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                            {lang === 'tr' ? 'Festival Asistanı' : 'Festival Assistant'}
                        </h3>
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-600 dark:text-gray-400 transition-colors outline-none">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {history.map((msg, idx) => {
                            if (msg.type === 'user') {
                                return (
                                    <div key={idx} className="flex justify-end">
                                        <div className="bg-purple-600 text-white rounded-lg p-3 max-w-[85%]">
                                            <p className={`text-sm ${msg.text.includes('Yeni bir soru gönderildi') ? 'italic' : ''}`}>{msg.text}</p>
                                        </div>
                                    </div>
                                );
                            } else {
                                const node = chatTree[msg.nodeId];
                                if (!node || !node.message) return null;
                                return (
                                    <div key={idx} className="flex justify-start">
                                        <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-3 max-w-[85%]">
                                            <p className="text-sm">{node.message[lang]}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        <div ref={messagesEndRef} />
                    </div>

                    {!currentNode.isEnd && (
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto max-h-[250px] space-y-2">
                            {currentNode.form && (
                                <form onSubmit={handleFormSubmit} className="space-y-2 mb-4">
                                    {formError && (
                                        <div className="text-red-500 text-xs text-center p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                            {formError}
                                        </div>
                                    )}
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} className="w-full text-sm px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 outline-none" />

                                    <fieldset className="text-sm">
                                        <legend className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {lang === 'tr' ? 'İletişim Tercihi:' : 'Contact Preference:'}
                                        </legend>
                                        <div className="flex items-center space-x-4">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input type="radio" name="contact_preference" value="email" checked={formData.contact_preference === 'email'} onChange={handleInputChange} className="form-radio text-purple-600 focus:ring-purple-500" />
                                                <span className="text-gray-700 dark:text-gray-300">{lang === 'tr' ? 'E-posta' : 'Email'}</span>
                                            </label>
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input type="radio" name="contact_preference" value="phone" checked={formData.contact_preference === 'phone'} onChange={handleInputChange} className="form-radio text-purple-600 focus:ring-purple-500" />
                                                <span className="text-gray-700 dark:text-gray-300">{lang === 'tr' ? 'Telefon' : 'Phone'}</span>
                                            </label>
                                        </div>
                                    </fieldset>

                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={lang === 'tr' ? 'E-posta' : 'Email'} className="w-full text-sm px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 outline-none" />

                                    <div className="flex">
                                        <input type="text" name="chat-country-code" value={formData['chat-country-code']} onChange={handleInputChange} className="w-16 text-center px-3 py-2 rounded-l-lg bg-gray-200 dark:bg-gray-500 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 text-sm outline-none" />
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="5XX XXX XX XX" maxLength="13" className="w-full text-sm px-3 py-2 rounded-r-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 outline-none" />
                                    </div>

                                    <textarea name="question" value={formData.question} onChange={handleInputChange} required rows="3" placeholder={lang === 'tr' ? 'Sorunuz...' : 'Your question...'} className="w-full text-sm px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>

                                    <button type="submit" disabled={isSubmitting} className="w-full p-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-70 text-white font-bold rounded-lg text-sm transition-colors flex justify-center items-center outline-none">
                                        {isSubmitting ? (
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <span>{lang === 'tr' ? 'Soruyu Gönder' : 'Send Question'}</span>
                                        )}
                                    </button>
                                </form>
                            )}

                            {currentNode.options && currentNode.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(opt.nextId, opt.text)}
                                    className="w-full text-left p-3 bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-900/80 rounded-lg text-purple-800 dark:text-purple-200 text-sm transition-colors outline-none block"
                                >
                                    {opt.text[lang]}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Chatbot;
