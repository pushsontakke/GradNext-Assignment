
const Features = () =>{
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            {/* Main Heading */}
            <div className="text-center mb-10">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    1:1 Coaching Programs
                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Get ready with tailored plan and targeted preparation guided by consultants from{" "}
                    <span className="font-semibold text-blue-600">McKinsey, BCG and Bain</span>
                </p>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="font-bold text-lg mb-3">Want to learn more about the program?</div>
                    <div className="space-y-3">
                        <a href="https://www.gradnext.co/booking-calendar/discovery-call" className="w-full border border-slate-800 hover:bg-slate-800 hover:text-white cursor-pointer py-2 px-4 block rounded-md transition">
                            Book Free Discovery Call
                        </a>
                        <a href="#" className="w-full border border-slate-800 hover:text-white hover:bg-slate-800 cursor-pointer py-2 px-4 block rounded-md transition">
                            Already have an interview invite?
                        </a>
                        <a href="https://www.gradnext.co/booking-calendar/roadmap-call" className="w-full border border-slate-800 hover:text-white hover:bg-slate-800 cursor-pointer py-2 px-4 block rounded-md transition">
                            Book Free Roadmap Call
                        </a>
                    </div>
                </div>

                {/* Community Stats */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                    <div className="text-center">
                        <p className="text-gray-500 mb-2">Join our global community of</p>
                        <p className="text-3xl font-bold text-blue-600">1,000+</p>
                        <p className="text-gray-700">aspiring consultants</p>
                        <p className="text-gray-500 mt-3">across</p>
                        <p className="text-2xl font-bold text-blue-600">13+ countries</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;