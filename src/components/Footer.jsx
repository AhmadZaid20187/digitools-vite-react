// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="bg-[#101727]  pt-16 pb-10">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col md:justify-around md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            {/* <img src="/logo.png" alt="AI Hub Logo" className="h-10 w-auto" /> */}
                            <h2 className="text-3xl font-bold tracking-tighter text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Models
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Cookie Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-4 text-lg">Social Links</h3>
                        <div className="flex gap-4">

                            <a href="" className="bg-white rounded-full p-1">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="" className="bg-white rounded-full p-1">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="" className="bg-white rounded-full p-1">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#4F39F6] transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[#4F39F6] transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-[#4F39F6] transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
