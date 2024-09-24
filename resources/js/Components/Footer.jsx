import { useState } from 'react';

function Footer() {
    const [customText, setCustomText] = useState('');

    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <input
                type="text"
                placeholder="Change text..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="mb-2 p-1 rounded"
            />
            <div>
                {customText.trim() === '' 
                    ? 'Built by: Andres Elacion III' 
                    : customText}
            </div>
        </footer>
    );
}

export default Footer;