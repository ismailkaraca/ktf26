import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCountdown } from '../../hooks/useCountdown';
import { Sparkles, CalendarPlus, ChevronDown, Calendar as CalendarIcon, Download } from 'lucide-react';

const HeroSection = () => {
    const { t, lang } = useLanguage();
    const timeLeft = useCountdown('2026-04-02T00:00:00');
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const ctxEl = canvasEl.getContext('2d');
        let particlesArrayEl = [];
        let animationFrameId;

        function setCanvasSizeEl() {
            const dpr = window.devicePixelRatio || 1;
            canvasEl.width = window.innerWidth * dpr;
            canvasEl.height = window.innerHeight * dpr;
            canvasEl.style.width = `${window.innerWidth}px`;
            canvasEl.style.height = `${window.innerHeight}px`;
            ctxEl.scale(dpr, dpr);
        }

        const mouseEl = { x: undefined, y: undefined, radius: (window.innerHeight / 100) * (window.innerWidth / 100) };

        const updateMousePosition = (x, y) => {
            mouseEl.x = x;
            mouseEl.y = y;
        };

        const handleMouseMove = (event) => updateMousePosition(event.clientX, event.clientY);
        const handleMouseOut = () => updateMousePosition(undefined, undefined);
        const handleTouchStart = (event) => {
            if (event.touches.length > 0) updateMousePosition(event.touches[0].clientX, event.touches[0].clientY);
        };
        const handleTouchMove = (event) => {
            if (event.touches.length > 0) updateMousePosition(event.touches[0].clientX, event.touches[0].clientY);
        };
        const handleTouchEnd = () => updateMousePosition(undefined, undefined);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd);

        class ParticleEl {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
            }
            draw() {
                ctxEl.beginPath(); ctxEl.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctxEl.fillStyle = this.color; ctxEl.fill();
            }
            update() {
                if (this.x > window.innerWidth || this.x < 0) { this.directionX = -this.directionX; }
                if (this.y > window.innerHeight || this.y < 0) { this.directionY = -this.directionY; }

                let dx = (mouseEl.x ?? 99999) - this.x; let dy = (mouseEl.y ?? 99999) - this.y; let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseEl.radius + this.size) {
                    if (mouseEl.x < this.x && this.x < window.innerWidth - this.size * 10) { this.x += 3; }
                    if (mouseEl.x > this.x && this.x > this.size * 10) { this.x -= 3; }
                    if (mouseEl.y < this.y && this.y < window.innerHeight - this.size * 10) { this.y += 3; }
                    if (mouseEl.y > this.y && this.y > this.size * 10) { this.y -= 3; }
                }
                this.x += this.directionX; this.y += this.directionY; this.draw();
            }
        }

        const particleColorsRgbEl = ['39, 27, 198', '191, 36, 198'];

        function initEl() {
            particlesArrayEl = [];
            let numberOfParticles = (window.innerHeight * window.innerWidth) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2.5) + 1;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                const chosenRgb = particleColorsRgbEl[Math.floor(Math.random() * particleColorsRgbEl.length)];
                let color = `rgba(${chosenRgb}, ${Math.random() * 0.5 + 0.4})`;
                particlesArrayEl.push(new ParticleEl(x, y, directionX, directionY, size, color));
            }
        }

        function connectEl() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArrayEl.length; a++) {
                for (let b = a; b < particlesArrayEl.length; b++) {
                    let distance = ((particlesArrayEl[a].x - particlesArrayEl[b].x) * (particlesArrayEl[a].x - particlesArrayEl[b].x)) + ((particlesArrayEl[a].y - particlesArrayEl[b].y) * (particlesArrayEl[a].y - particlesArrayEl[b].y));
                    if (distance < (window.innerWidth / 9) * (window.innerHeight / 9)) {
                        opacityValue = 1 - (distance / 20000);
                        ctxEl.strokeStyle = `rgba(39, 27, 198, ${opacityValue * 0.6})`;
                        ctxEl.lineWidth = 1;
                        ctxEl.beginPath();
                        ctxEl.moveTo(particlesArrayEl[a].x, particlesArrayEl[a].y);
                        ctxEl.lineTo(particlesArrayEl[b].x, particlesArrayEl[b].y);
                        ctxEl.stroke();
                    }
                }
            }
        }

        function animateEl() {
            animationFrameId = requestAnimationFrame(animateEl);
            ctxEl.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < particlesArrayEl.length; i++) {
                particlesArrayEl[i].update();
            }
            connectEl();
        }

        const handleResize = () => {
            setCanvasSizeEl();
            mouseEl.radius = (window.innerHeight / 120) * (window.innerWidth / 120);
            initEl();
        };

        window.addEventListener('resize', handleResize);

        setCanvasSizeEl();
        initEl();
        animateEl();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const isStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
        <section id="home" className="relative h-screen">
            <canvas ref={canvasRef} id="hero-canvas" className="absolute top-0 left-0 w-full h-full z-10"></canvas>
            <div className="content-overlay relative z-20 flex flex-col justify-start items-center h-[100vh] text-center p-4 pt-[5vh] md:pt-[10vh] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.5)_70%,#ffffff_100%)] dark:bg-[radial-gradient(circle,rgba(17,24,39,0.1)_0%,rgba(17,24,39,0.5)_70%,#111827_100%)] pointer-events-none">

                <div className="max-w-4xl mx-auto pointer-events-auto">
                    {lang === 'tr' ? (
                        <h1 className="hero-title gradient-text text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4">
                            {t('hero_badge')} {t('hero_title_line1')} <br /> {t('hero_title_line2')}
                        </h1>
                    ) : (
                        <h1 className="hero-title gradient-text text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4">
                            {t('hero_badge')} {t('hero_title_line1')} <br /> {t('hero_title_line2')}
                        </h1>
                    )}

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
                        {t('hero_date')}
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
                        {lang === 'tr' ? 'Festival Ana Teması: ' : 'Festival Main Theme: '} {t('hero_theme')}
                    </p>

                    {!isStarted ? (
                        <div id="countdown" className="flex justify-center space-x-4 md:space-x-8 my-8 text-center">
                            <div>
                                <span className="gradient-text text-4xl md:text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{t('countdown_days')}</p>
                            </div>
                            <div>
                                <span className="gradient-text text-4xl md:text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{t('countdown_hours')}</p>
                            </div>
                            <div>
                                <span className="gradient-text text-4xl md:text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{t('countdown_minutes')}</p>
                            </div>
                            <div>
                                <span className="gradient-text text-4xl md:text-6xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{t('countdown_seconds')}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="my-8 text-center">
                            <h3 className="gradient-text text-3xl md:text-4xl font-bold">{t('countdown_started')}</h3>
                        </div>
                    )}

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
                        <a href="#ktf-studio-cta"
                            className="animate-wiggle-continuous w-full inline-flex items-center justify-center px-6 py-4 font-semibold text-white bg-gradient-to-r from-[#bf24c6] to-[#241bc6] hover:from-[#bf24c6]/90 hover:to-[#241bc6]/90 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                            <Sparkles className="w-5 h-5 mr-3" />
                            <span>{t('hero_cta_studio')}</span>
                        </a>

                        <div className="flex flex-row items-center justify-center gap-2 w-full">
                            <a href="#participation" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 flex-grow sm:flex-grow-0 text-center">
                                {t('hero_cta_register')}
                            </a>

                            <div className="relative inline-block text-left flex-grow sm:flex-grow-0 calendar-wrapper">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                        className="inline-flex justify-center items-center w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-3 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        <CalendarPlus className="mr-2 -ml-1 h-5 w-5" />
                                        <span>{t('calendar_add')}</span>
                                        <ChevronDown className="ml-2 -mr-1 h-5 w-5" />
                                    </button>
                                </div>
                                {isCalendarOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all text-left">
                                        <div className="py-1">
                                            <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <CalendarIcon className="w-4 h-4 mr-2" /> {t('calendar_google')}
                                            </a>
                                            <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <CalendarIcon className="w-4 h-4 mr-2" /> {t('calendar_outlook')}
                                            </a>
                                            <a href="#" className="flex items-center text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <Download className="w-4 h-4 mr-2" /> {t('calendar_ics')}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
