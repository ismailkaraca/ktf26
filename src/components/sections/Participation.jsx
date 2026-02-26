import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { UserCheck, Star, CalendarPlus, ChevronDown, Calendar, Download } from 'lucide-react';

const Participation = () => {
    const { lang, t } = useLanguage();
    const [selectedRole, setSelectedRole] = useState('Kütüphaneci');
    const [reasonContent, setReasonContent] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', institution: '', want_stand: false, 'kvkk-consent': false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });
    const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);

    const mockResponses = {
        tr: {
            'Kütüphaneci': [
                '📚 Sevgili Kütüphaneci! Bu festival, mesleğinizin geleceğini şekillendiren en önemli buluşma noktası. Yapay zeka destekli kataloglama sistemlerinden, kullanıcı deneyimini dönüştüren dijital hizmetlere; bibliyoterapi uygulamalarından akıllı kütüphane tasarımlarına kadar pek çok yenilikçi çözümü ilk elden deneyimleme fırsatı sizi bekliyor. "İyileştiren Kütüphane" temasıyla, toplum sağlığına katkı sağlayan kütüphane modellerini keşfedin. Türkiye\'nin dört bir yanından meslektaşlarınızla networkınızı güçlendirin, ilham verici başarı hikayelerini dinleyin ve kurumunuza taşıyabileceğiniz somut projelerle dönün!',
            ],
            'Kütüphane Yöneticisi': [
                '🎯 Değerli Kütüphane Yöneticisi! Kurumunuzu geleceğe taşıyacak stratejik vizyonu bu festivalde bulacaksınız. Dijital dönüşüm süreçlerinin nasıl yönetileceği, personel gelişimi için yapay zeka araçlarının entegrasyonu, bütçe optimizasyonu sağlayan teknolojik çözümler ve kullanıcı memnuniyetini artıran yenilikçi hizmet modelleri hakkında uzman görüşleri edinin.',
            ],
            'Öğrenci': [
                '🎓 Merhaba Genç Yetenek! Kariyer yolculuğunda sana en büyük avantajı sağlayacak etkinliğe hoş geldin! Sektörün önde gelen profesyonelleriyle tanışma, staj ve iş fırsatlarını öğrenme, geleceğin kütüphanelerinde kullanılacak teknolojileri deneyimleme şansı seni bekliyor.'
            ],
            'Yazılım Geliştirici': [
                '💻 Selam Geliştirici! Kütüphane ve bilgi yönetimi sektörü, yazılım çözümlerine her zamankinden daha fazla ihtiyaç duyuyor. Bu festivalde, RFID sistemleri, dijital arşivleme platformları, yapay zeka destekli arama motorları, kullanıcı arayüzü tasarımları ve API entegrasyonları gibi alanlarda gerçek dünya problemlerini çözme fırsatı bulacaksın.'
            ],
            'Akademisyen': [
                '🔬 Sayın Akademisyen! Araştırmalarınıza yeni perspektifler kazandıracak disiplinlerarası bir platform sizi bekliyor. Bilgi bilimi, dijital beşeri bilimler, kullanıcı araştırmaları, yapay zeka etiği ve kültürel miras dijitalleştirmesi gibi alanlarda en güncel çalışmaları keşfedin.'
            ],
            'Girişimci': [
                '🚀 Değerli Girişimci! 2000\'den fazla potansiyel müşteri ve paydaşın bir arada olacağı bu festival, iş fırsatlarıyla dolu. Kütüphane ve bilgi yönetimi sektörü, dijital dönüşüm sürecinde milyarlarca liralık bir pazara dönüşüyor.'
            ]
        },
        en: {
            'Librarian': [
                '📚 Dear Librarian! This festival is the most important meeting point shaping the future of your profession. From AI-powered cataloging systems to digital services transforming user experience, from bibliotherapy applications to smart library designs, many innovative solutions await you to experience firsthand.'
            ],
            'Library Manager': [
                '🎯 Dear Library Manager! You will find the strategic vision to carry your institution into the future at this festival. Gain expert insights on managing digital transformation processes, integrating AI tools for staff development, technological solutions for budget optimization, and innovative service models that increase user satisfaction.'
            ],
            'Student': [
                '🎓 Hello Young Talent! Welcome to the event that will give you the biggest advantage in your career journey! Opportunities await you to meet leading professionals in the sector, learn about internship and job opportunities, and experience technologies to be used in future libraries.'
            ],
            'Software Developer': [
                '💻 Hello Developer! The library and information management sector needs software solutions more than ever. At this festival, you\'ll find opportunities to solve real-world problems in areas such as RFID systems, digital archiving platforms, AI-powered search engines, user interface designs, and API integrations.'
            ],
            'Academic': [
                '🔬 Dear Academic! An interdisciplinary platform awaits you that will bring new perspectives to your research. Discover the most current work in areas such as information science, digital humanities, user research, AI ethics, and cultural heritage digitization.'
            ],
            'Entrepreneur': [
                '🚀 Dear Entrepreneur! This festival, where more than 2,000 potential customers and stakeholders will gather, is full of business opportunities. The library and information management sector is turning into a multi-billion dollar market during digital transformation.'
            ]
        }
    };

    const generateReason = () => {
        if (!selectedRole) return;
        setIsGenerating(true);
        setReasonContent('');

        setTimeout(() => {
            const roleToUse = Object.keys(mockResponses[lang]).includes(selectedRole)
                ? selectedRole
                : (lang === 'en' ? 'Librarian' : 'Kütüphaneci');

            const responsesArray = mockResponses[lang][roleToUse];
            const responseText = responsesArray ? responsesArray[Math.floor(Math.random() * responsesArray.length)] : (lang === 'tr' ? "Bu festivalde sizin için harika fırsatlar var!" : "There are great opportunities for you at this festival!");

            setReasonContent(responseText);
            setIsGenerating(false);
        }, 1500);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'phone') {
            let val = value;
            const startsWithPlus = val.startsWith('+');
            let numbersOnly = val.replace(/[^0-9]/g, '');
            if (startsWithPlus) {
                val = '+' + numbersOnly.substring(0, 12);
            } else {
                val = numbersOnly.substring(0, 10);
            }
            setFormData({ ...formData, [name]: val });
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

        const submissionData = new FormData();
        for (const key in formData) {
            if (key === 'want_stand' && formData[key]) {
                submissionData.append(key, 'Evet');
            } else if (key === 'kvkk-consent' && formData[key]) {
                submissionData.append(key, 'on');
            } else if (key !== 'want_stand' && key !== 'kvkk-consent') {
                submissionData.append(key, formData[key]);
            }
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzDQk69nZLzHiL8imzr5jVCWgzsBnrRcc0EwaDm6Y9y0lwQpXjbnUmQ0jlI5uhzzlQomw/exec';

        fetch(scriptURL, { method: 'POST', body: submissionData })
            .then(response => {
                if (!response.ok) { throw new Error('Network response was not ok'); }
                return response;
            })
            .then(() => {
                setFormMessage({
                    type: 'success',
                    text: lang === 'tr' ? 'Kaydınız başarıyla alındı. Teşekkür ederiz!' : 'Your registration was successful. Thank you!'
                });
                setFormData({ name: '', email: '', phone: '', institution: '', want_stand: false, 'kvkk-consent': false });
            })
            .catch((err) => {
                console.error(err);
                setFormMessage({
                    type: 'error',
                    text: lang === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.'
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const renderCalendarDropdown = () => (
        <div className="relative inline-block text-left mt-3">
            <div>
                <button
                    type="button"
                    onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                    className="inline-flex items-center justify-center w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
                >
                    <CalendarPlus className="mr-2 h-5 w-5" />
                    <span>{lang === 'tr' ? 'Etkinliği Takvime Ekle' : 'Add to Calendar'}</span>
                    <ChevronDown className="ml-2 h-5 w-5" />
                </button>
            </div>
            {showCalendarDropdown && (
                <div className="origin-top-right absolute left-0 sm:left-auto sm:right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                        <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Calendar className="w-4 h-4 mr-2" /> Google Calendar
                        </a>
                        <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Calendar className="w-4 h-4 mr-2" /> Outlook Calendar
                        </a>
                        <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Download className="w-4 h-4 mr-2" /> Apple Calendar (.ics)
                        </a>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <section id="participation" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="scroll-animate">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-left text-gray-900 dark:text-white">
                            {lang === 'tr' ? 'Yerinizi Ayırtın!' : 'Reserve Your Spot!'}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            {lang === 'tr'
                                ? 'Bu teknoloji ve kültür buluşmasının bir parçası olun. Kütüphaneci, öğrenci, teknoloji uzmanı veya sadece bir meraklı... Herkes için bir yer var!'
                                : 'Be a part of this technology and culture gathering. Whether you are a librarian, student, tech expert, or just curious... There\'s a place for everyone!'}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {lang === 'tr' ? 'Kimler Katılabilir?' : 'Who Can Attend?'}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {lang === 'tr'
                                            ? 'Kütüphaneciler, akademisyenler, öğrenciler, teknoloji firmaları, girişimciler, sanatçılar.'
                                            : 'Librarians, academics, students, tech companies, entrepreneurs, artists.'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Star className="w-6 h-6 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {lang === 'tr' ? 'Neden Katılmalısınız?' : 'Why Should You Attend?'}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {lang === 'tr'
                                            ? 'Yeni fikirler edinin, profesyonel ağınızı genişletin ve geleceği şekillendiren projelere tanık olun.'
                                            : 'Gain new ideas, expand your professional network, and witness projects shaping the future.'}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                            {lang === 'tr' ? '✨ Size Özel Nedenleri Keşfedin' : '✨ Discover Personalized Reasons'}
                                        </h5>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <select
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                className="w-full sm:w-auto flex-grow px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                            >
                                                {lang === 'tr' ? (
                                                    <>
                                                        <option value="Kütüphaneci">Kütüphaneci</option>
                                                        <option value="Kütüphane Yöneticisi">Kütüphane Yöneticisi</option>
                                                        <option value="Öğrenci">Öğrenci</option>
                                                        <option value="Yazılım Geliştirici">Yazılım Geliştirici</option>
                                                        <option value="Akademisyen">Akademisyen</option>
                                                        <option value="Girişimci">Girişimci</option>
                                                    </>
                                                ) : (
                                                    <>
                                                        <option value="Librarian">Librarian</option>
                                                        <option value="Library Manager">Library Manager</option>
                                                        <option value="Student">Student</option>
                                                        <option value="Software Developer">Software Developer</option>
                                                        <option value="Academic">Academic</option>
                                                        <option value="Entrepreneur">Entrepreneur</option>
                                                    </>
                                                )}
                                            </select>
                                            <button
                                                onClick={generateReason}
                                                disabled={isGenerating}
                                                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 inline-flex items-center justify-center outline-none"
                                            >
                                                <span>{lang === 'tr' ? 'Oluştur' : 'Generate'}</span>
                                            </button>
                                        </div>
                                        <div className="mt-3 p-4 bg-purple-50 dark:bg-gray-700/50 rounded-lg min-h-[80px] text-sm text-gray-700 dark:text-gray-300">
                                            {isGenerating ? (
                                                <div className="flex justify-center items-center h-full">
                                                    <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                            ) : (
                                                <p>{reasonContent || (lang === 'tr' ? 'Mesleğinizi seçin ve yapay zekanın sizin için neden bu festivalde olmanız gerektiğini anlatmasını izleyin!' : 'Select your role and let AI tell you why you should be at this festival!')}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-2xl scroll-animate">
                        {formMessage.type === 'success' ? (
                            <div className="text-center space-y-3">
                                <p className="text-green-600 dark:text-green-400 font-semibold">{formMessage.text}</p>
                                {renderCalendarDropdown()}
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                                    {lang === 'tr' ? 'Online Kayıt' : 'Online Registration'}
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input type="text" id="name" name="name" placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone</label>
                                        <input type="tel" id="phone" name="phone" placeholder={lang === 'tr' ? 'Telefon (İsteğe Bağlı)' : 'Phone (Optional)'} value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-1">
                                            {lang === 'tr'
                                                ? '* Başına \'+\' koyarsanız ülke koduyla 13 hane (Örn: +90555...), koymazsanız 10 hane (Örn: 555...) giriniz.'
                                                : '* Enter 13 digits with country code if starting with \'+\' (e.g., +90555...), otherwise 10 digits (e.g., 555...).'}
                                        </p>
                                    </div>

                                    <div>
                                        <label htmlFor="institution" className="sr-only">Institution</label>
                                        <input type="text" id="institution" name="institution" placeholder={lang === 'tr' ? 'Kurum / Meslek' : 'Institution / Profession'} value={formData.institution} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white border-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {lang === 'tr' ? 'Katılım Türü Tercihiniz (Opsiyonel):' : 'Participation Type Preference (Optional):'}
                                        </p>
                                        <div className="flex items-center space-x-3">
                                            <input type="checkbox" id="want_stand" name="want_stand" checked={formData.want_stand} onChange={handleInputChange} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer" />
                                            <label htmlFor="want_stand" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                                                {lang === 'tr' ? 'Kurumsal olarak katılmak (Stand açmak) istiyorum.' : 'I want to participate as an institution (Open a stand).'}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 py-2">
                                        <input type="checkbox" id="kvkk-consent" name="kvkk-consent" checked={formData['kvkk-consent']} onChange={handleInputChange} required className="h-4 w-4 mt-1 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer" />
                                        <label htmlFor="kvkk-consent" className="text-xs text-gray-600 dark:text-gray-400 select-none cursor-pointer leading-tight">
                                            {lang === 'tr' ? (
                                                <span>
                                                    <a href="https://kygm.ktb.gov.tr/TR-330512/kvkk-aydinlatma-metni.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline" onClick={(e) => e.stopPropagation()}>KVKK Aydınlatma Metni</a>'ni okudum, kabul ediyorum.
                                                </span>
                                            ) : (
                                                <span>
                                                    I have read and accept the <a href="https://kygm.ktb.gov.tr/TR-330512/kvkk-aydinlatma-metni.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline" onClick={(e) => e.stopPropagation()}>KVKK Clarification Text</a>.
                                                </span>
                                            )}
                                        </label>
                                    </div>

                                    <div className="text-xs text-gray-500 dark:text-gray-400 -mt-2 mb-2 px-1">
                                        <p>{lang === 'tr' ? 'Ad Soyad ve Kurum bilgileriniz web sitemizde katılımcılar bölümünde yayınlanacaktır.' : 'Your Name, Surname, and Institution information will be published in the participants section on our website.'}</p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-70 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 outline-none flex justify-center items-center"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            lang === 'tr' ? 'Kayıt Ol' : 'Register'
                                        )}
                                    </button>

                                    {formMessage.type === 'error' && (
                                        <div className="mt-4 text-center">
                                            <p className="text-red-600 dark:text-red-400 font-semibold">{formMessage.text}</p>
                                        </div>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Participation;
