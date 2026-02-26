import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ParticipantsList = () => {
    const { lang } = useLanguage();

    return (
        <section id="participants-list" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center scroll-animate mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {lang === 'tr' ? 'Kayıtlı Katılımcılar' : 'Registered Participants'}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                        {lang === 'tr'
                            ? 'Festivale katılımını bildiren değerli katılımcılarımız. (Liste anlık güncellenmektedir.)'
                            : 'Our valued participants who have registered for the festival. (List is updated periodically.)'}
                    </p>
                </div>
                <div className="scroll-animate max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="w-full h-[60vh] min-h-[500px]">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSRfLjqvJzlyJdpZ7XpkODUfckYa4zH5vaxeBbj6uN79CwSFm3JW9hUis2eyIXucyQhg3iXlZX2kuXK/pubhtml?widget=true&amp;headers=false"
                            className="w-full h-full border-0"
                            title="Participants List"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParticipantsList;
