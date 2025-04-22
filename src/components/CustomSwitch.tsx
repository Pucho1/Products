import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CustomSwitch: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="top-4 right-4">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center md:space-x-2 px-1 md:px-2 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 
                   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="h-5 w-5 text-gray-600" aria-hidden="true" />
          <span className="hidden md:flex text-sm font-medium text-gray-700">
            {i18n.language === 'en' ? 'English' : 'Español'}
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <button
                onClick={() => selectLanguage('en')}
                className={`w-full text-left px-4 py-2 text-sm ${
                  i18n.language === 'en'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                } flex items-center space-x-2`}
                role="menuitem"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>{t('english')}</span>
                {i18n.language === 'en' && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </button>
              <button
                onClick={() => selectLanguage('es')}
                className={`w-full text-left px-4 py-2 text-sm ${
                  i18n.language === 'es'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                } flex items-center space-x-2`}
                role="menuitem"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>{t('spanish')}</span>
                {i18n.language === 'es' && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSwitch;