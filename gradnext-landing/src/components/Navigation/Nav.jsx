import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isConsultingOpen, setIsConsultingOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('INR');

    const currencies = [
        { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
        { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
        { code: 'AED', name: 'Emirati Dirham', flag: '🇦🇪' },
        { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
        { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
        { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
        { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
        { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' }
    ];

    const consultingServices = [
        { name: 'Consulting Mentorship', href: '/consulting-mentorship' },
        { name: 'Consulting Mock Interview', href: '/consulting-mock-interview' },
        { name: 'Consulting CV Review', href: '/consulting-cv-review' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsConsultingOpen(false);
        }
    };

    const toggleCurrency = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
    };

    const toggleConsulting = () => {
        setIsConsultingOpen(!isConsultingOpen);
    };

    const selectCurrency = (currency) => {
        setSelectedCurrency(currency.code);
        setIsCurrencyOpen(false);
    };

    const getCurrentCurrency = () => {
        return currencies.find(c => c.code === selectedCurrency) || currencies[0];
    };

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="px-4 sm:px-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 px-4">
                        <a href="https://www.gradnext.co/">
                            <div className="sm:text-4xl text-2xl font-bold text-slate-800 cursor-pointer">
                                GradNext
                            </div>
                        </a>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center space-x-3 lg:hidden">
                        {/* Currency Selector - Mobile */}
                        <div className="relative">
                            <button
                                onClick={toggleCurrency}
                                className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <span className="text-sm">{getCurrentCurrency().flag}</span>
                                <span className="font-medium">{selectedCurrency}</span>
                                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Currency Dropdown - Mobile */}
                            {isCurrencyOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <div className="py-1">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency.code}
                                                onClick={() => selectCurrency(currency)}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            >
                                                <span>{currency.flag}</span>
                                                <span className="font-medium">{currency.code}</span>
                                                <span className="text-gray-500">({currency.name})</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-700 hover:text-slate-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://www.gradnext.co/"
                                className="text-gray-700 hover:text-slate-800 text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </a>
                            <a
                                href="https://www.gradnext.co/1-1coachingprogram"
                                className="text-gray-700 hover:text-slate-800 text-sm font-medium transition-colors duration-200"
                            >
                                1:1 Coaching Program
                            </a>
                            <a
                                href="https://www.gradnext.co/consultingcohort101"
                                className="text-gray-700 hover:text-slate-800 text-sm font-medium transition-colors duration-200"
                            >
                                Consulting Cohort 101
                            </a>

                            {/* Consulting Services Dropdown - Desktop */}
                            <div className="relative">
                                <button
                                    onClick={toggleConsulting}
                                    className="flex items-center space-x-1 text-gray-700 hover:text-slate-800 text-sm font-medium transition-colors duration-200"
                                >
                                    <span>Book a 45-min Session</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isConsultingOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isConsultingOpen && (
                                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            {consultingServices.map((service) => (
                                                <a
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {service.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Desktop Right Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Currency Selector - Desktop */}
                            <div className="relative">
                                <button
                                    onClick={toggleCurrency}
                                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                >
                                    <span>{getCurrentCurrency().flag}</span>
                                    <span className="font-medium">{selectedCurrency}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Currency Dropdown - Desktop */}
                                {isCurrencyOpen && (
                                    <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            {currencies.map((currency) => (
                                                <button
                                                    key={currency.code}
                                                    onClick={() => selectCurrency(currency)}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                                >
                                                    <span>{currency.flag}</span>
                                                    <span className="font-medium">{currency.code}</span>
                                                    <span className="text-gray-500">({currency.name})</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CaseBuddy Button */}
                            <button className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors duration-200">
                                CaseBuddy
                            </button>

                            {/* Login */}
                            <div className="flex items-center space-x-2 text-gray-700 hover:text-slate-800 cursor-pointer transition-colors duration-200">
                                <User className="w-4 h-4" />
                                <span className="text-sm font-medium">Log In</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="border-t border-gray-200 bg-white">
                            {/* Mobile Navigation Links */}
                            <div className="py-4 space-y-1">
                                <a
                                    href="https://www.gradnext.co/"
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-800 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="https://www.gradnext.co/1-1coachingprogram"
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-800 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    1:1 Coaching Program
                                </a>
                                <a
                                    href="https://www.gradnext.co/consultingcohort101"
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-800 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Consulting Cohort 101
                                </a>

                                {/* Consulting Services Dropdown - Mobile */}
                                <div className="relative">
                                    <button
                                        onClick={toggleConsulting}
                                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-800 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <span>Book a 45-min Session</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isConsultingOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isConsultingOpen && (
                                        <div className="pl-6">
                                            {consultingServices.map((service) => (
                                                <a
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {service.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Actions Section */}
                            <div className="border-t border-gray-100 py-4 px-4 space-y-3">
                                {/* CaseBuddy Button - Mobile */}
                                <button
                                    className="w-full bg-slate-800 text-white py-3 rounded-md text-base font-medium hover:bg-slate-700 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    CaseBuddy
                                </button>

                                {/* Login - Mobile */}
                                <button
                                    className="w-full flex items-center justify-center space-x-2 py-3 text-gray-700 hover:text-slate-800 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <User className="w-5 h-5" />
                                    <span className="text-base font-medium">Log In</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;