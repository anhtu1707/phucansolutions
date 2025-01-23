import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const solutions = [
    { title: 'Giải pháp mạng', path: '/solutions/network' },
    { title: 'Camera an ninh', path: '/solutions/security' },
    { title: 'Hạ tầng CNTT', path: '/solutions/infrastructure' },
    { title: 'Giải pháp xây dựng', path: '/solutions/construction' },
  ];

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setShowSolutions(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSolutions(false);
    }, 500);
    setTimeoutId(timeout);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <nav className="fixed w-full z-50">
      {/* Background image container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('images/1.jpg')",
          height: "80px" // Matches h-16 from the content div
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              {/* Logo - hidden on desktop, visible on mobile/tablet */}
              <img 
                src="/images/LOGO PAS-14.png" 
                alt="Phuc An Solutions Logo"
                className="h-10 w-auto hidden max-md:block" // Ẩn trên desktop (>768px), hiện trên mobile/tablet
              />
              {/* <span className="text-2xl font-bold text-white">Phúc An Solutions</span> */}
            </Link>
          </div>
          
          {/* Desktop Menu - updated text colors to white */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-blue-200 ${
                location.pathname === '/' ? 'text-blue-200' : ''
              }`}
            >
              Trang chủ
            </Link>
            <Link 
              to="/services" 
              className={`text-white hover:text-blue-200 ${
                location.pathname === '/services' ? 'text-blue-200' : ''
              }`}
            >
              Dịch vụ
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="px-4 py-2 text-white hover:text-blue-200 rounded-md"
              >
                Giải Pháp
              </button>

              {showSolutions && (
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                  
                  <div className="py-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowSolutions(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/blog" 
              className={`text-white hover:text-blue-200 ${
                location.pathname === '/blog' ? 'text-blue-200' : ''
              }`}
            >
              Tin Tức
            </Link>
            
            <button
              onClick={handleContactClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Liên Hệ Ngay
            </button>
          </div>

          {/* Mobile menu button - updated color to white */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - styling remains the same */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 hover:bg-blue-50 rounded ${
                  location.pathname === '/' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                Trang chủ
              </Link>
              <Link 
                to="/services"
                className={`block px-3 py-2 hover:bg-blue-50 rounded ${
                  location.pathname === '/services' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                Dịch vụ
              </Link>
              <div className="px-3 py-2">
                <div className="font-medium">Giải pháp</div>
                <div className="pl-4 mt-2 space-y-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                onClick={handleContactClick} 
                className="block w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-50 rounded"
              >
                Liên Hệ Ngay
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 