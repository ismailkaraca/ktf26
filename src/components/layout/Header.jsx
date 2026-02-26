import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon, Menu, X, Sparkles, ChevronDown, Calendar as CalendarIcon, Download } from 'lucide-react';

const Header = () => {
    const { t, lang, setLang } = useLanguage();
    const { isDark, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isMobileCalendarOpen, setIsMobileCalendarOpen] = useState(false);

    const navLinks = [
        { href: '#video-gallery', label: 'nav_videos' },
        { href: '#program', label: 'nav_program' },
        { href: '#participation', label: 'nav_participation' },
        { href: '#participants-list', label: 'participants_title' },
        { href: '#articles', label: 'nav_articles' },
        { href: '#contact', label: 'nav_contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm relative">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center mr-8">
                    <img
                        src="https://www.kutuphaneveteknoloji.com/Logolar/ktf3.png"
                        alt="KTF Logo"
                        width="300" height="225"
                        loading="eager" fetchpriority="high" decoding="async"
                        style={{ height: '90px', width: 'auto', aspectRatio: '300/225', objectFit: 'contain' }}
                        className="dark:invert"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-3">
                    <a href="#ktf-studio-cta" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium inline-flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span>{t('ktf_studio_cta')}</span>
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                    <a href="#canva-showcase" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">
                        {t('vision_title')}
                    </a>
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                    <a href="https://www.kutuphaneveteknoloji.com/logolar-gorsel-materyaller/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">
                        Logo
                    </a>

                    {navLinks.map((link, idx) => (
                        <React.Fragment key={link.href}>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            <a href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">
                                {t(link.label)}
                            </a>
                        </React.Fragment>
                    ))}

                    <div className="relative calendar-wrapper">
                        <button
                            type="button"
                            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            className="calendar-button text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium inline-flex items-center"
                        >
                            <span>| 📅 {t('calendar_add')}</span>
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {isCalendarOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                <div className="py-1" role="none">
                                    <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"><CalendarIcon className="w-4 h-4 mr-2" />{t('calendar_google')}</a>
                                    <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"><CalendarIcon className="w-4 h-4 mr-2" />{t('calendar_outlook')}</a>
                                    <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"><Download className="w-4 h-4 mr-2" />{t('calendar_ics')}</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-2">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full text-sm">
                        <button
                            onClick={() => setLang('tr')}
                            className={`px-3 py-1 rounded-full ${lang === 'tr' ? 'bg-purple-600 text-white' : ''}`}
                        >
                            TR
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`px-3 py-1 rounded-full ${lang === 'en' ? 'bg-purple-600 text-white' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Mobile Menu"
                        className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col space-y-4 p-6">
                        <a href="#ktf-studio-cta" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 inline-flex items-center font-medium">
                            <Sparkles className="w-4 h-4 mr-2" />
                            {t('ktf_studio_cta')}
                        </a>
                        <a href="#canva-showcase" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 font-medium">
                            {t('vision_title')}
                        </a>

                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 font-medium">
                                {t(link.label)}
                            </a>
                        ))}

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsMobileCalendarOpen(!isMobileCalendarOpen)}
                                    className="w-full text-left text-gray-600 dark:text-gray-300 hover:text-purple-600 font-medium inline-flex items-center justify-between"
                                >
                                    <span>{t('calendar_add')}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {isMobileCalendarOpen && (
                                    <div className="mt-2 pl-4 flex flex-col space-y-3">
                                        <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 text-sm"><CalendarIcon className="w-4 h-4 mr-2" />{t('calendar_google')}</a>
                                        <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 text-sm"><CalendarIcon className="w-4 h-4 mr-2" />{t('calendar_outlook')}</a>
                                        <a href="#" className="flex items-center text-gray-600 dark:text-gray-400 text-sm"><Download className="w-4 h-4 mr-2" />{t('calendar_ics')}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
