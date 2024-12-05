import React, { useState } from "react";
import { Link } from "react-router-dom";
// import '../components/Movies.css';


const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerFromSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <>
      <div className="w-full h-screen relative">
        {/* Background Image */}
        <img
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://s3-alpha-sig.figma.com/img/a0be/02c4/139f6bc499ff95f08a0ebcb0a6171caa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU2UIinTRTTeD156F6hImwp~xXJHlYH0b2Iem-H4O85o31IlvU3Sf9Mf4lFog-fojJZ~jfswKv08xxF3fSHXvqtKQ~iecWWx1lcdZrvEBVg7SP7bgBUQUrSv66fES0zGkKDC3v-xVL9Mzqyj3ZH5gAZaaB37636DKhypHk5JDBTnxLuKlVGVgFKdlpWOP0UsO2NpgZ4Xt9dCMFZKjFtJLealzENeZ~-JJT-~XMtAxqcsnhLJ0mhDugAuqSVsc~j96VtLD~DtsH0fwuHCYe0XjWwCQS-50wS0XgClfun85p7o7Y5cG0G4BsQUOzo65k9r6BM54KUkIZTCHur7uFBZHw__"
          alt="Background"
        />
        <div className="bg-black/70 absolute top-0 left-0 w-full h-full z-0" />

        {/* Login Form */}
        <div className="fixed w-full px-6 sm:px-4 py-24 z-20 flex justify-center items-center">
          <div className="max-w-[450px] w-full bg-black/80 text-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            <form onSubmit={handlerFromSubmit} className="space-y-4">
              <input
                className="w-full p-3 bg-black/70 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full p-3 bg-black/70 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="w-full bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition duration-200"
                type="submit"
              >
                Sign In
              </button>
            </form>

            {/* Remember Me and Help */}
            <div className="flex justify-between items-center text-gray-400 mt-4">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberLogin}
                  onChange={(e) => setRememberLogin(!rememberLogin)}
                />
                Remember me
              </label>
              <p className="text-sm cursor-pointer hover:underline">Need Help?</p>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-400 mt-6 text-sm">
              New to Netflix?{" "}
              <Link to="/signup" className="text-white underline hover:text-gray-300">
                Sign up now
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-black/70 py-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-400 text-sm underline">
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Ad Choices</li>
            </ul>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Cookie Preferences</li>
            </ul>
            <ul className="space-y-2">
              <li>Netflix Shop</li>
              <li>Corporate Information</li>
            </ul>
            <ul className="space-y-2">
              <li>Terms of Use</li>
              <li>Do Not Sell My Personal Information</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
