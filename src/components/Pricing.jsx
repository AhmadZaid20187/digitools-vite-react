import React from 'react';
import { Check } from "lucide-react";



const Pricing = () => {

    return (
        <div className='  max-w-[80%] mx-auto pt-30 pb-30'>
            {/* Heading */}
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] font-semibold'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* Price Cart */}
            <div className='flex flex-col gap-4 md:justify-center pt-10'>
                {/* Cart-1 */}
                <div className='p-6 w-80 h-[448px] bg-[#F9FAFC] shadow-lg rounded-2xl flex flex-col'>
                    <div className=''>

                        {/* Heading and Description */}
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Starter</h1>
                            <p className='text-base text-[#627382]'>Perfect for getting started</p>
                        </div>

                        {/* Price */}
                        <div className='pt-6'>
                            <h1>
                                <span className='text-4xl font-bold'>$0</span><span className='text-xl text-[#627382]'>/Month</span>
                            </h1>
                        </div>

                        {/* Check Items */}
                        <div className='pt-6 pb-20'>
                            <h2 className='space-x-2'>
                                <span className='text-green-300'>✓</span><span className='text-[#627382] '>Access to 10 free tools</span>
                            </h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Basic templates</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Community support</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>1 project per month</span></h2>

                        </div>

                        {/* Button */}
                        <button className='mt-6 btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold text-sm'>Get Started Free</button>
                    </div>
                </div>

                {/* Card-2 */}
                <div className='p-6 w-80 h-[448px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-xl rounded-2xl flex flex-col'>
                    <div className=''>

                        {/* Heading and Description */}
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Pro</h1>
                            <p className='text-base text-[#F9FAFC]'>Best for professionals</p>
                        </div>

                        {/* Price */}
                        <div className='pt-6'>
                            <h1>
                                <span className='text-4xl font-bold'>$29</span><span className='text-xl text-[#F9FAFC]'>/Month</span>
                            </h1>
                        </div>

                        {/* Check Items */}
                        <div className='pt-6 pb-7'>
                            <h2 className='space-x-2'>
                                <span className='text-green-300'>✓</span><span className='text-[#F9FAFC] '>Access to all premium tools</span>
                            </h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#F9FAFC]'>Unlimited templates</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#F9FAFC]'>Priority support</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#F9FAFC]'>Unlimited projects</span></h2>
                            <h2 className='space-x-2'>
                                <span className='text-green-300'>✓</span><span className='text-[#F9FAFC] '>Cloud sync</span>
                            </h2>
                            <h2 className='space-x-2'>
                                <span className='text-green-300'>✓</span><span className='text-[#F9FAFC] '>Advanced analytics</span>
                            </h2>

                        </div>

                        {/* Button */}
                        <button className='mt-6 btn bg-white  shadow-0 w-full  py-3 rounded-full font-semibold text-sm'><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                    </div>
                </div>

                {/* Card-3 */}
                <div className='p-6 w-80 h-[448px] bg-[#F9FAFC] shadow-lg rounded-2xl flex flex-col'>
                    <div className=''>

                        {/* Heading and Description */}
                        <div className=''>
                            <h1 className='text-2xl font-bold'>Enterprise</h1>
                            <p className='text-base text-[#627382]'>For teams and businesses</p>
                        </div>

                        {/* Price */}
                        <div className='pt-6'>
                            <h1>
                                <span className='text-4xl font-bold'>$99</span><span className='text-xl text-[#627382]'>/Month</span>
                            </h1>
                        </div>

                        {/* Check Items */}
                        <div className='pt-6 pb-6'>
                            <h2 className='space-x-2'>
                                <span className='text-green-300'>✓</span><span className='text-[#627382] '>Everything in Pro</span>
                            </h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Team collaboration</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Custom integrations</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Dedicated support</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>SLA guarantee</span></h2>
                            <h2 className='space-x-2'><span className='text-green-300'>✓</span><span className='text-[#627382]'>Custom branding</span></h2>

                        </div>

                        {/* Button */}
                        <button className='mt-6 btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold text-sm'>Contact Sales</button>
                    </div>
                </div>


                {/* Card-2 */}

                {/* <div className="w-72 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-5">

                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Starter</h2>
                        <p className="text-sm text-gray-500">Perfect for getting started</p>
                    </div>

                    <div className="text-4xl font-bold text-gray-900">
                        $0 <span className="text-base font-normal text-gray-500">/Month</span>
                    </div>



                    <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full font-semibold text-sm">
                        Get Started Free
                    </button>

                </div> */}
            </div>
        </div>
    );
};

export default Pricing;