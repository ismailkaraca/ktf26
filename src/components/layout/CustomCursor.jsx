import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if touch device
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            <div
                className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-100 ease-out border-2 border-white ${isHovering ? 'scale-[2.5] bg-white opacity-50' : 'scale-100'}`}
                style={{
                    width: '40px',
                    height: '40px',
                    left: `${position.x - 20}px`,
                    top: `${position.y - 20}px`,
                }}
            />
            <div
                className="fixed pointer-events-none z-[9999] w-2 h-2 bg-white rounded-full transition-transform duration-75 mix-blend-difference"
                style={{
                    left: `${position.x - 4}px`,
                    top: `${position.y - 4}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
