import React, { useState } from 'react';

const YouTubeFacade = ({ videoId, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div
            className="yt-facade absolute top-0 left-0 w-full h-full cursor-pointer bg-gray-100 dark:bg-gray-800 overflow-hidden"
            onClick={() => setIsPlaying(true)}
        >
            {!isPlaying ? (
                <>
                    <img
                        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title || "Video thumbnail"}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        loading="lazy"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] transition-transform duration-200 hover:scale-110 pointer-events-none" style={{
                        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 68 48'%3E%3Cpath d='M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z' fill='%23212121' fill-opacity='.8'/%3E%3Cpath d='M45 24 27 14v20' fill='%23fff'/%3E%3C/svg%3E") center/contain no-repeat`
                    }}></div>
                </>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            )}
        </div>
    );
};

export default YouTubeFacade;
