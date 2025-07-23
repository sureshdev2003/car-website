import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // We'll create this CSS file next

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to a certain amount
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Show button after scrolling down 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top with smooth behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top-button" title="Go to top">
                    &#9650; {/* Up arrow character */}
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;