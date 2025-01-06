import React from 'react'

export default function Navbar() {
    return (
        <div className='h-auto w-[100%] '>
            <div className='h-[450px] w-[100%]  flex justify-center items-center'>
                <div className='h-[361px] w-[426px] '>
                    <p className='text-[18px] font-semibold leading-5'>Useful Links</p>
                    <div className='h-[185px] w-[426px]  mt-6 flex'>
                        <div className='h-[185px] w-[130px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                About <br /><br />
                                Careers <br /><br />
                                Blog <br /><br />
                                Press <br /><br />
                                Lead <br /><br />
                                Value
                            </p>
                        </div>
                        <div className='h-[185px] w-[130px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                Privacy <br /><br />
                                Terms <br /><br />
                                FAQs <br /><br />
                                Security <br /><br />
                                Mobile <br /><br />
                                Contact
                            </p>
                        </div>
                        <div className='h-[185px] w-[164px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                Partner <br /><br />
                                Franchise <br /><br />
                                Seller <br /><br />
                                Warehouse <br /><br />
                                Deliver <br /><br />
                                Resources
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-[390px] w-[853px]'>
                    <p className='text-[18px] font-semibold leading-5 mt-4'>Categories</p>
                    <div className='h-[345px] w-[853px]  mt-6 flex'>
                        <div className='h-[343px] w-[300px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                Vegetables & Fruits <br /><br />
                                Cold Drinks & Juices <br /><br />
                                Bakery & Biscuits <br /><br />
                                Dry Fruits, Masala & Oil <br /><br />
                                Paan Corner <br /><br />
                                Pharma & Wellness <br /><br />
                                Ice Creams & Frozen Desserts <br /><br />
                                Beauty & Cosmetics <br /><br />
                                Stationery Needs <br /><br />
                                Navratri Specials <br /><br />
                            </p>
                        </div>
                        <div className='h-[343px] w-[300px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                Dairy & Breakfast <br /><br />
                                Instant & Frozen Food <br /><br />
                                Sweet Tooth <br /><br />
                                Sauces & Spreads <br /><br />
                                Organic & Premium <br /><br />
                                Cleaning Essentials <br /><br />
                                Personal Care <br /><br />
                                Fashion & Accessories <br /><br />
                                Toys & Games <br /><br />
                            </p>
                        </div>
                        <div className='h-[343px] w-[300px]'>
                            <p className='text-[#666666] leading-[16px]'>
                                Munchies <br /><br />
                                Tea, Coffee & Health Drinks <br /><br />
                                Atta, Rice & Dal <br /><br />
                                Chicken, Meat & Fish <br /><br />
                                Baby Care <br /><br />
                                Home & Office <br /><br />
                                Pet Care <br /><br />
                                Electronics & Electricals <br /><br />
                                Print Store <br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100px] w-[100%]  flex justify-center items-center'>
                <div className='h-[100px] w-[80%]  flex justify-center items-center'>
                    <div className='h-[100px] w-[33%] flex justify-center items-center'>
                        <p className='text-[#666666] text-[13px] font-medium'>
                            © Blink Commerce Private Limited, 2016-2025
                        </p>
                    </div>
                    <div className='h-[100px] w-[33%]  flex justify-evenly items-center'>
                        <div className='h-auto w-[40%] flex justify-end items-center'>
                            <p className='text-[#666666]'>Download App</p>
                        </div>
                        <div className='flex justify-evenly  items-center h-auto w-[60%]'>
                            <img className='h-[30px] w-[92px]' src="play store (1).png" alt="" />
                            <img className='h-[30px] w-[92px]' src="apple store.png" alt="" />
                        </div>
                    </div>
                    <div className='h-[100px] w-[33%]  flex justify-evenly items-center'>
                        <img src="Facebook.png" alt="" className='h-[45px] w-[45px]' />
                        <img src="Twitter.png" alt="" className='h-[45px] w-[45px]' />
                        <img src="Instagram.png" alt="" className='h-[45px] w-[45px]' />
                        <img src="Linkedin.png" alt="" className='h-[45px] w-[45px]' />
                        <img src="thrades.png" alt="" className='h-[45px] w-[45px]' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-[80px] w-[85%]  flex justify-center items-center'>
                    <p className='text-[#666666]'>
                        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                    </p>
                </div>
            </div>
        </div>
    )
}