import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import YouTubeFacade from '../ui/YouTubeFacade';

const RobotInvitation = () => {
    const { lang } = useLanguage();

    return (
        <section id="robot-invitation" className="py-12 bg-gray-50 dark:bg-gray-900 text-center">
            <div className="container mx-auto px-6">
                <div className="scroll-animate mb-8">
                    {lang === 'tr' ? (
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Robotumuz Bilge Sizleri Festivale Davet Etmekten Mutluluk Duyar</h2>
                    ) : (
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Robot Bilge is Delighted to Invite You to the Festival</h2>
                    )}
                </div>
                <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-2xl bg-gray-200 dark:bg-gray-800" style={{ paddingTop: '56.25%' }}>
                    <YouTubeFacade videoId="iaXZNO5_M4E" title="Robotumuz Bilge Davet Videosu" />
                </div>
            </div>
        </section>
    );
};

export default RobotInvitation;
