import React from 'react'
const footerLogo = '/images/logo-xl.png';
const instagram = '/images/instagram.png';
const facebook = '/images/facebook.png';
const twitter = '/images/twitter.png';


const Footer = () => {
  return (
    <>
        <footer className='bg-[#244D3F] mt-20 text-center'>
            <div className='max-w-6xl mx-auto pt-20 pb-10'>
                <div className='w-2xs mx-auto md:w-6xl'>
                    <img src={footerLogo} alt={"footer logo" } className='mx-auto'/>
                </div>
                <p className='text-white opacity-70 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='mt-6'>
                    <h4 className='text-[20px] font-medium text-white'>Social Links</h4>
                    <ul className='flex justify-center mt-3 gap-2'>
                        <li><a href=""><img src={instagram} alt="" /></a></li>
                        <li><a href=""><img src={facebook} alt="" /></a></li>
                        <li><a href=""><img src={twitter} alt="" /></a></li>
                    </ul>
                </div>
            </div>

            <hr className="max-w-[1145px] mx-auto text-[#1A8862] opacity-20"/>

            <div className='max-w-6xl flex justify-between mx-auto mt-8 pb-8 text-[#FAFAFA] opacity-30'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex gap-2 md:gap-10'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer