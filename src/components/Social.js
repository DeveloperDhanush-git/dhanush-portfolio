import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const SocialLinks = () => {
    const location = useLocation();

    const pagesWithWhiteNavbar = ['/about', '/projects','/contact'];
    const isAboutPage = pagesWithWhiteNavbar.includes(location.pathname);

    const iconColor = isAboutPage ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600';
    const lineColor = isAboutPage ? 'bg-white' : 'bg-black';

    return (
        <div className="fixed bottom-5 left-10 flex flex-row lg:flex-col items-center gap-3 lg:gap-6 z-50">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={`${iconColor} transition`}>
                <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className={`${iconColor} transition`}>
                <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className={`${iconColor} transition`}>
                <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className={`${iconColor} transition`}>
                <FaFacebook size={24} />
            </a>
            <a href="https://youtube.com/your-profile" target="_blank" rel="noopener noreferrer" className={`${iconColor} transition`}>
                <FaYoutube size={24} />
            </a>
            <div className={`h-px w-20 lg:h-20 lg:w-px ${lineColor}`}></div>
        </div>
    );
};

export default SocialLinks;
