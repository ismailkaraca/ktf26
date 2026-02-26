import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Send, Instagram, Twitter, Linkedin, Facebook, Youtube, CalendarPlus, ChevronDown, Calendar, Download, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const { lang, t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', 'chat-country-code': '+90', contact_preference: 'email', question: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage({ type: '', text: '' });

        const preference = formData.contact_preference;
        let errorMessage = '';

        if (preference === 'email' && !formData.email) {
            errorMessage = lang === 'tr' ? 'Lütfen e-posta adresinizi girin.' : 'Please enter your email address.';
        } else if (preference === 'phone' && !formData.phone) {
            errorMessage = lang === 'tr' ? 'Lütfen telefon numaranızı girin.' : 'Please enter your phone number.';
        }

        if (errorMessage) {
            setFormMessage({ type: 'error', text: errorMessage });
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
                setFormMessage({
                    type: 'success',
                    text: lang === 'tr' ? 'Mesajınız başarıyla iletildi!' : 'Your message has been sent successfully!'
                });
                setFormData({ name: '', email: '', phone: '', 'chat-country-code': '+90', contact_preference: 'email', question: '' });
                setTimeout(() => setFormMessage({ type: '', text: '' }), 5000);
            })
            .catch((err) => {
                console.error(err);
                setFormMessage({
                    type: 'error',
                    text: lang === 'tr' ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' : 'Could not send message. Please try again.'
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <footer id="contact" className="bg-gray-900 text-white transition-colors duration-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1 */}
                    <div>
                        <h4 className="text-lg font-bold">
                            {lang === 'tr' ? '3. KTF | 2026' : '3. LTF | 2026'}
                        </h4>
                        <p className="text-gray-500 text-sm mt-2">#ktf2026 #ltf2026 #3ktf #3ltf</p>
                        <p className="text-gray-400 mt-4">
                            {lang === 'tr' ? 'Geleceği birlikte şekillendirelim.' : 'Let\'s shape the future together.'}
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://twitter.com/ktbkygm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://tr.linkedin.com/company/ktbkygm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/kygmktb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@ktb_kygm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/ktbkygm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            {lang === 'tr' ? 'Takvime Ekle' : 'Add to Calendar'}
                        </h4>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                                className="text-gray-300 hover:text-white transition font-medium inline-flex items-center w-full text-left p-3 rounded-lg focus:outline-none bg-gray-800"
                            >
                                <CalendarPlus className="mr-3 h-5 w-5" />
                                <span className="flex-grow">{lang === 'tr' ? 'Takvime Ekle' : 'Add to Calendar'}</span>
                                <ChevronDown className="ml-auto h-4 w-4" />
                            </button>
                            {showCalendarDropdown && (
                                <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-200 block px-4 py-2 text-sm hover:bg-gray-600 transition-colors">
                                            <Calendar className="w-4 h-4 mr-2" /> Google Calendar
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-200 block px-4 py-2 text-sm hover:bg-gray-600 transition-colors">
                                            <Calendar className="w-4 h-4 mr-2" /> Outlook Calendar
                                        </a>
                                        <a href="#" className="flex items-center text-gray-200 block px-4 py-2 text-sm hover:bg-gray-600 transition-colors">
                                            <Download className="w-4 h-4 mr-2" /> Apple Calendar (.ics)
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold mb-4">
                            {lang === 'tr' ? 'İletişim' : 'Contact'}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-400 mb-2">
                                    <a href="mailto:akillikutuphaneler@ktb.gov.tr?subject=3.%20K%C3%BCt%C3%BCphane%20ve%20Teknoloji%20Festivali%20hakk%C4%B1nda%20sorum%20var." target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 transition-colors">
                                        <Mail className="w-4 h-4 flex-shrink-0" />
                                        <span className="truncate">akillikutuphaneler@ktb.gov.tr</span>
                                    </a>
                                </p>
                                <p className="text-gray-400 mb-6">
                                    <a href="tel:+903124708000" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 transition-colors">
                                        <Phone className="w-4 h-4 flex-shrink-0" />
                                        +90 (312) 470 80 00
                                    </a>
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {formMessage.type === 'success' && (
                                    <div className="p-3 bg-green-600/20 border border-green-600 rounded-lg text-green-400 text-sm text-center mb-4">
                                        <span>{formMessage.text}</span>
                                    </div>
                                )}
                                {formMessage.type === 'error' && (
                                    <div className="p-3 bg-red-600/20 border border-red-600 rounded-lg text-red-400 text-sm text-center mb-4">
                                        <span>{formMessage.text}</span>
                                    </div>
                                )}

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'}
                                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-500"
                                />

                                <div className="flex flex-col space-y-2">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                                        {lang === 'tr' ? 'İletişim Tercihi:' : 'Contact Preference:'}
                                    </span>
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center space-x-2 cursor-pointer text-xs group">
                                            <input
                                                type="radio"
                                                name="contact_preference"
                                                value="email"
                                                checked={formData.contact_preference === 'email'}
                                                onChange={handleInputChange}
                                                className="form-radio text-purple-600 bg-gray-800 border-gray-700 cursor-pointer"
                                            />
                                            <span className="text-gray-400 group-hover:text-white transition-colors">
                                                {lang === 'tr' ? 'E-posta' : 'Email'}
                                            </span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-pointer text-xs group">
                                            <input
                                                type="radio"
                                                name="contact_preference"
                                                value="phone"
                                                checked={formData.contact_preference === 'phone'}
                                                onChange={handleInputChange}
                                                className="form-radio text-purple-600 bg-gray-800 border-gray-700 cursor-pointer"
                                            />
                                            <span className="text-gray-400 group-hover:text-white transition-colors">
                                                {lang === 'tr' ? 'Telefon' : 'Phone'}
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={lang === 'tr' ? 'E-posta' : 'Email'}
                                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-500"
                                />

                                <div className="flex">
                                    <input
                                        type="text"
                                        name="chat-country-code"
                                        value={formData['chat-country-code']}
                                        onChange={handleInputChange}
                                        className="w-12 text-center px-1 py-1.5 rounded-l-lg bg-gray-700 border border-gray-600 text-white text-xs outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="5XX XXX XX XX"
                                        maxLength="13"
                                        className="w-full text-xs px-3 py-2.5 rounded-r-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-500"
                                    />
                                </div>

                                <textarea
                                    name="question"
                                    required
                                    rows="3"
                                    value={formData.question}
                                    onChange={handleInputChange}
                                    placeholder={lang === 'tr' ? 'Sorunuz...' : 'Your question...'}
                                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-500 resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-70 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors flex justify-center items-center h-10 outline-none"
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <span>{lang === 'tr' ? 'Mesajı Gönder' : 'Send Message'}</span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
