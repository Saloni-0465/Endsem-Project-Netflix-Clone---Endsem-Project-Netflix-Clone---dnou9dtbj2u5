import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handlerFromSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
  };
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/a0be/02c4/139f6bc499ff95f08a0ebcb0a6171caa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU2UIinTRTTeD156F6hImwp~xXJHlYH0b2Iem-H4O85o31IlvU3Sf9Mf4lFog-fojJZ~jfswKv08xxF3fSHXvqtKQ~iecWWx1lcdZrvEBVg7SP7bgBUQUrSv66fES0zGkKDC3v-xVL9Mzqyj3ZH5gAZaaB37636DKhypHk5JDBTnxLuKlVGVgFKdlpWOP0UsO2NpgZ4Xt9dCMFZKjFtJLealzENeZ~-JJT-~XMtAxqcsnhLJ0mhDugAuqSVsc~j96VtLD~DtsH0fwuHCYe0XjWwCQS-50wS0XgClfun85p7o7Y5cG0G4BsQUOzo65k9r6BM54KUkIZTCHur7uFBZHw__"
          alt="///"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"/>
        <div className='fixed w-full px-4 py-24 z-20'>
          <div className="max-w-[450px] h-[488px] mx-auto bg-black/70 rounded-lg">
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-2xl font-nsans-bold'>Sign Up</h1>
              <form
              className='w-full flex flex-col py-4'
              onSubmit={handlerFromSubmit}>
                <input
                className='p-3 my-2 bg-black/70 border-gray-500 border-[1px] rounded'
                type='text'
                placeholder='Name'
                autoComplete='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                  className='p-3 my-2 bg-black/70 border-gray-500 border-[1px] rounded'
                  type='text'
                  placeholder='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className='p-3 my-2 bg-black/70 border-gray-500 border-[1px] rounded'
                  type='password'
                  placeholder='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/"><button className='bg-red-600 py-3 my-6 rounded font-nsans-bold w-full'>Sign Up</button></Link>
                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input
                    type='checkbox'
                    className='mr-2'
                    checked = {rememberLogin}
                    onChange={(e) => setRememberLogin(!rememberLogin)}/>
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='my-2'>
                  <span className='text-gray-600 mr-2'>
                    Already have an account?
                  </span>
                  <Link to="/login"><h1 className='text-white underline'>Sign in here</h1></Link>
                </p>
              </form>
            </div>
          </div>
          {/* Footer Section */}
          <div className='fixed bottom-0 left-0 w-full h-[200px] bg-black/70 py-4'>
            <div className='w-full max-w-[1183px] mx-auto grid grid-cols-4 gap-4 text-center my-6 underline text-white/60 cursor-pointer text-[14px]'>
              <ul className='space-y-2'>
                <li className=' py-1'>FAQ</li>
                <li className=' py-1'>Privacy</li>
                <li className=' py-1'>Ad Choices</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Help Center</li>
                <li className=' py-1'>Cookie Preferences</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Netflix Shop</li>
                <li className=' py-2'>Corporate Information</li>
              </ul>
              <ul className='space-y-2'>
                <li className=' py-1'>Terms of Use</li>
                <li className=' py-1'>Do Not Sell or Share My Personal Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;













