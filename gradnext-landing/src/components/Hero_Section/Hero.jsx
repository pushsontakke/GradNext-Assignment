
const Hero = () => {
    return(
        <section className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-12 md:pt-16 md:pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <div className="text-3xl font-bold text-gray-900 leading-tight sm:text-4xl md:text-5xl">
                            Making your consulting dream possible.
                        </div>

                        <div className="text-2xl md:text-3xl font-bold text-gray-900">
                            Elevate your <span className="text-blue-600">consulting</span> preparation.
                        </div>

                        <p className="text-base text-gray-600 md:text-lg">
                            Learn from McKinsey, BCG and Bain consultants to set you on the path to success
                        </p>

                        {/* Company Logos */}
                        <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow-sm">
                                <span className="font-medium text-sm md:text-base">McKinsey & Company</span>
                            </div>
                            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow-sm">
                                <span className="font-medium text-sm md:text-base">BCG</span>
                            </div>
                            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow-sm">
                                <span className="font-medium text-sm md:text-base">Bain & Company</span>
                            </div>
                        </div>
                    </div>

                    {/* Program Cards - Same styling for mobile and desktop */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="bg-white p-5 rounded-xl shadow-md">
                            <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">1:1 Coaching Program</div>
                            <p className="text-gray-600 text-sm md:text-base">Tailored program for personalised preparation</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-md">
                            <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">Consulting Cohort 101</div>
                            <p className="text-gray-600 text-sm md:text-base">Consulting foundations with global live-minded peers</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-md">
                            <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">CaseBuddy</div>
                            <p className="text-gray-600 text-sm md:text-base">Self practice cases at your own pace</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero