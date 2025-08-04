import React from 'react';
import LazyImage from '../ui/LazyImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const FeaturesSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const features = [
    {
      id: 1,
      icon: '/images/img_art_and_design_1.svg',
      title: 'Unlimited Customization',
      description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      gradient: 'gradient-yellow'
    },
    {
      id: 2,
      icon: '/images/img_shape_1.svg',
      title: 'Vector shape & resizable',
      description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      gradient: 'gradient-cyan'
    },
    {
      id: 3,
      icon: '/images/img_l0001.png',
      title: 'Editing freedom',
      description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      gradient: 'gradient-blue'
    },
    {
      id: 4,
      icon: '/images/img_vector_white_a700.svg',
      title: 'Best Award history',
      description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
      gradient: 'gradient-orange'
    }
  ];

  return (
    <section ref={elementRef} className="w-full px-4 sm:px-6 lg:px-0 py-[80px] lg:py-[100px]">
      <div className="w-full max-w-[1290px] mx-auto">
        <div className={`flex flex-col justify-start items-center w-full ${
          hasIntersected ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <p className="text-[18px] font-dm-sans font-bold leading-[24px] text-center text-[#8d448b] capitalize tracking-[0.5px]">
            Quality features
          </p>
          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-center text-[#0f2136] mt-[12px] tracking-[-0.02em]">
            Meet exciting feature of app
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] md:gap-[48px] lg:gap-[60px] w-full mt-[114px]">
            {features?.map((feature, index) => (
              <div 
                key={feature?.id} 
                className={`flex flex-col gap-[24px] justify-start items-center w-full max-w-[264px] mx-auto transition-all duration-300 hover:scale-105 ${
                  hasIntersected ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col justify-center items-center w-[68px] h-[68px] ${feature?.gradient} rounded-[34px]`}>
                  <LazyImage 
                    src={feature?.icon} 
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-contain" 
                    alt={`${feature?.title} Icon`} 
                  />
                </div>
                <h3 className="text-[18px] font-dm-sans font-bold leading-[24px] text-center text-[#0f2136] px-2">
                  {feature?.title}
                </h3>
                <p className="text-[15px] font-dm-sans font-normal leading-[28px] text-center text-[#343d48] w-full px-2">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;