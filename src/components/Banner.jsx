import BannerImage from "../assets/banner.png"

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
                        <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-primary animate-ping"></div>
                            <div className="status status-primary"></div>
                        </div> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-7xl font-bold">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Experience the full spectrum of frontier intelligence — all the most
                        advanced AI models, unified under a single, powerful subscription.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn bg-linear-to-r from-[#4F39F6]   to-[#9514FA] hover:shadow-[#4F39F6] hover:drop-shadow-xl text-white rounded-full">Explore Products</button>
                        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-[2px] rounded-full">
                            <div className="btn btn-outline rounded-full border-0 bg-white flex items-center gap-2 group">
                                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">Explore Products</span>
                                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent group-hover:translate-x-1 transition text-2xl">→</span>
                            </div>
                        </button>

                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                            src={BannerImage}
                            alt="Tools Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;