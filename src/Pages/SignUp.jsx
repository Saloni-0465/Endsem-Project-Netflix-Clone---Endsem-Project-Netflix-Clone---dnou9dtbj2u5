import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../components/Movies.css';


const SignUp = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  return (
    <>
      <div className="w-full h-screen relative">
        {/* Background Image */}
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/a0be/02c4/139f6bc499ff95f08a0ebcb0a6171caa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU2UIinTRTTeD156F6hImwp~xXJHlYH0b2Iem-H4O85o31IlvU3Sf9Mf4lFog-fojJZ~jfswKv08xxF3fSHXvqtKQ~iecWWx1lcdZrvEBVg7SP7bgBUQUrSv66fES0zGkKDC3v-xVL9Mzqyj3ZH5gAZaaB37636DKhypHk5JDBTnxLuKlVGVgFKdlpWOP0UsO2NpgZ4Xt9dCMFZKjFtJLealzENeZ~-JJT-~XMtAxqcsnhLJ0mhDugAuqSVsc~j96VtLD~DtsH0fwuHCYe0XjWwCQS-50wS0XgClfun85p7o7Y5cG0G4BsQUOzo65k9r6BM54KUkIZTCHur7uFBZHw__"
          alt="Background"
        />
        {/* Overlay */}
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>

        {/* Sign-Up Form Container */}
        <div className="fixed w-full px-4 py-24 z-20 flex justify-center items-center">
          <div className="max-w-[450px] w-full bg-black/80 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
            <form className="w-full flex flex-col space-y-4" onSubmit={handleFormSubmit}>
              <input
                className="w-full p-3 bg-black/70 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full p-3 bg-black/70 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full p-3 bg-black/70 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition w-full">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 accent-red-600"
                    checked={rememberLogin}
                    onChange={() => setRememberLogin(!rememberLogin)}
                  />
                  Remember me
                </label>
                <p className="hover:underline cursor-pointer">Need Help?</p>
              </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-white underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="fixed bottom-0 left-0 w-full bg-black/90 py-6 text-gray-400 text-sm">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Ad Choices</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Cookie Preferences</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Netflix Shop</li>
              <li className="hover:underline cursor-pointer">Corporate Information</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Terms of Use</li>
              <li className="hover:underline cursor-pointer">
                Do Not Sell or Share My Personal Information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;




