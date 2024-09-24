import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <div className='mt-4 flex justify-end mr-12'>
            <button
            onClick={toggleDarkMode}
            className="relative w-16 h-8 rounded-full bg-white dark:bg-gray-800 dark:from-blue-600 dark:to-teal-400 p-1 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-600"
            >
                <span className="sr-only">Toggle theme</span>
                <div
                    className={`absolute top-1 left-1 w-6 h-6 rounded-full transform transition-transform duration-500 ease-in-out ${
                        darkMode ? 'translate-x-8 bg-gray-900' : 'bg-white'
                    }`}
                >
                    {darkMode ? (
                        <svg className="w-4 h-4 text-white absolute top-1 left-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        
                    ) : (
                        <svg className="w-4 h-4 text-yellow-400 absolute top-1 left-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;