

const Navbar = () => {
    return (
        <div className="shadow-sm">
            <div className="navbar max-w-[80%] m-auto ">
                <div className="navbar-start">
                    <div className="font-bold text-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end gap-5">
                    <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;