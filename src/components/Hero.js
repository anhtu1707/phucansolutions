import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-screen max-md:h-[70vh] overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat flex items-center justify-center bg-white z-0"
        style={{
          backgroundImage: "url('/Banner web.jpg')",
          backgroundSize: 'auto 90%',
          backgroundPosition: 'center',
          '@media (max-width: 768px)': {
            backgroundImage: "url('/fix size mobile.jpg')",
            backgroundSize: 'auto 80%'
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
      </div>

      {/* Alternative way using classes */}
      <div className="absolute inset-0 z-0">
        <div className="hidden max-md:block absolute inset-0 bg-center bg-no-repeat bg-white flex items-center justify-center" 
          style={{ 
            backgroundImage: "url('/images/fix size mobile.jpg')",
            backgroundSize: 'auto 75%'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
        </div>
        <div className="md:block hidden absolute inset-0 bg-center bg-no-repeat bg-white flex items-center justify-center" 
          style={{ 
            backgroundImage: "url('/images/Banner web.jpg')",
            backgroundSize: 'auto 100%'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
        </div>
      </div>

      {/* Hoa Mai và Hoa Đào rơi */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -50,
            rotate: 0,
            opacity: 0 
          }}
          animate={{ 
            y: window.innerHeight + 50,
            rotate: 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="absolute text-2xl pointer-events-none z-20"
          style={{ filter: 'drop-shadow(0 0 2px rgba(255,223,0,0.3))' }}
        >
          {Math.random() > 0.5 ? '🌸' : '🌺'}
        </motion.div>
      ))}

      {/* Content section - thêm flex để căn giữa */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl max-md:text-white max-md:drop-shadow-lg"
            >
              <span className="block">Phúc An Solutions</span>
              <span className="block text-blue-600 max-md:text-blue-100">Cho Doanh Nghiệp Của Bạn</span>
            </motion.h1>
            
            <div data-aos="fade-up" data-aos-delay="200" className="mt-8 space-x-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-6 py-2.5 max-md:px-5 max-md:py-2 rounded-full font-bold hover:bg-blue-50 transition duration-300 shadow-lg border-2 border-blue-600 max-md:text-sm"
              >
                Liên Hệ Ngay
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="bg-blue-600 text-white px-6 py-2.5 max-md:px-5 max-md:py-2 rounded-full font-bold hover:bg-blue-700 transition duration-300 shadow-lg max-md:text-sm"
              >
                Tìm Hiểu Thêm
              </button>
            </div>

            <div data-aos="fade-up" className="mt-12">
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl max-md:text-white max-md:text-base max-md:drop-shadow-md">
                Cung cấp giải pháp toàn diện về CNTT, xây dựng hệ thống mạng, 
                camera an ninh và các dịch vụ công nghệ hiện đại.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute -bottom-4 md:-bottom-16 w-full z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 800"
          className="w-full h-[200px]"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1"
            className="hidden md:block" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
          ></path>
          <path 
            fill="#ffffff" 
            fillOpacity="1"
            className="md:hidden block"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero; 
