
const RatingTab = () => {
    return (
        <div className="flex justify-around bg-gradient-to-r from-[#4F39F6] to-[#9514FA] h-60 items-center">
            <div className="text-center space-y-3">
                <h1 className="text-6xl text-amber-50 font-bold">50K+</h1>
                <p className="text-xl text-amber-50 font-semibold">Active Users</p>
            </div>
            <div className="text-center space-y-3">
                <h1 className="text-6xl text-amber-50 font-bold">200+</h1>
                <p className="text-xl text-amber-50 font-semibold">Premium Tools</p>
            </div>
            <div className="text-center space-y-3">
                <h1 className="text-6xl text-amber-50 font-bold">4.9</h1>
                <p className="text-xl text-amber-50 font-semibold">Rating</p>
            </div>
        </div>
    );
};

export default RatingTab;