import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Main footer content */}
            <div className="bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Brand */}
                    <div className="mb-6">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6">
                            gradnext
                        </div>
                    </div>

                    {/* Get in touch section */}
                    <div className="mb-8">
                        <div className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
                            Get in touch:
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                            For any queries or support, write to us at{' '}
                            <a
                                href="mailto:info@gradnext.co"
                                className="text-slate-700 hover:text-slate-900 transition-colors duration-200"
                            >
                                info@gradnext.co
                            </a>
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a href="https://www.gradnext.co/becomeamentor" className="block px-6 py-3 border border-slate-800 hover:text-white rounded-lg hover:bg-slate-800 transition-all duration-200 text-sm sm:text-base font-medium">
                                Apply as Mentor
                            </a>
                            <a href="https://www.gradnext.co/insightsbygradnext" className="block px-6 py-3 border border-slate-800 hover:text-white rounded-lg hover:bg-slate-800 transition-all duration-200 text-sm sm:text-base font-medium">
                                Insights by gradnext
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="bg-slate-800 px-4 py-6 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                        {/* Copyright */}
                        <p className="text-gray-300 text-sm text-center lg:text-left">
                            Copyright © 2024 by gradnext | All Rights Reserved
                        </p>

                        {/* Footer links */}
                        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-end gap-2 sm:gap-6 text-center">
                            <a
                                href="https://www.gradnext.co/contact-8"
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-1"
                            >
                                Contact Us
                            </a>
                            <a
                                href="https://www.gradnext.co/terms-conditions"
                                target="_blank"
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-1"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="https://www.gradnext.co/cancellation-refund-policy"
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-1"
                            >
                                Cancellation/Refund Policy
                            </a>
                            <a
                                href="https://www.gradnext.co/privacy-policy"
                                target="_blank"
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-1"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;