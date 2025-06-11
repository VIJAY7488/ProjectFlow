
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({onFeaturesClcick} : { onFeaturesClcick ?: () => void }) => {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className="flex justify-between items-center h-14 px-4">
        <div className="flex justify-between items-center gap-2">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
          <Link to='/' className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-black'}`}>
            ProjectFlow
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={onFeaturesClcick} 
            className={`text-base font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:text-sky-400 transition-colors duration-200`}
          >
            Features
          </button>
          <Link to='/' className={`text-base font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:text-sky-400 transition-colors duration-200`}>
            Testimonials
          </Link>
          <Link to='' className={`text-base font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:text-sky-400 transition-colors duration-200`}>
            Pricing
          </Link>
          <Link to='/' className={`text-base font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:text-sky-400 transition-colors duration-200`}>
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to='/' className={`hidden md:block text-base font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:text-sky-400 transition-colors duration-200`}>
            Sign In
          </Link>
          <button className="text-base font-medium px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
