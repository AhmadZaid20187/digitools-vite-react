import BannerImage from "../assets/banner.png"

const Banner2 = () => {
    return (
        <div className="flex max-w-[80%]">
            <div>
                <h2>Supercharge Your Digital Workflow</h2>
                <p>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                    {/* <button className="btn btn-outline bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Watch Demo</button> */}
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-[2px] rounded-full">
                        <div className="btn btn-outline rounded-full border-0 bg-white hover:bg-white  flex items-center gap-2 group">
                            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">Explore Products</span>
                            <span className="group-hover:translate-x-1 transition text-2xl">→</span>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner2;