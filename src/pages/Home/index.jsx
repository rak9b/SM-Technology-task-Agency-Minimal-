import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../../components/common/SEOHead';
import Header from '../../components/common/Header';
import HeroSection from '../../components/sections/HeroSection';
import FeaturesSection from '../../components/sections/FeaturesSection';
import Button from '../../components/ui/Button';
import LazyImage from '../../components/ui/LazyImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
  const boostRef = useIntersectionObserver();
  const companiesRef = useIntersectionObserver();
  const testimonialsRef = useIntersectionObserver();
  const supportRef = useIntersectionObserver();
  const tutorialsRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  const testimonials = [
    {
      id: 1,
      name: 'Pierre Hackett',
      position: 'VP of Engineering',
      avatar: '/images/img_ellipse_6.png'
    },
    {
      id: 2,
      name: 'Natalia Sanz',
      position: 'Head of Technology',
      avatar: '/images/img_ellipse_6_50x50.png'
    },
    {
      id: 3,
      name: 'Ece Akman',
      position: 'Senior Marketer',
      avatar: '/images/img_ellipse_6_1.png'
    }
  ];

  const tutorials = [
    {
      id: 1,
      image: '/images/img_stefan_stefanci.png',
      title: 'How to work with prototype design with adobe xd featuring tools',
      comments: '22 Comments'
    },
    {
      id: 2,
      image: '/images/img_avel_chuklanov.png',
      title: 'Create multiple artboard by using figma prototyping development',
      comments: '15 Comments'
    },
    {
      id: 3,
      image: '/images/img_corinne_kutz_tm.png',
      title: 'Convert your web layout theming easily with sketch zeplin extension',
      comments: '18 Comments'
    }
  ];

  const handleVideoPlay = () => {
    console.log('Play video');
    // Add video play logic here
  };

  const handleHireDevelopers = () => {
    console.log('Hire developers clicked');
    // Add hire developers logic here
  };

  return (
    <HelmetProvider>
      <div className="w-full bg-global-6 overflow-hidden">
        <SEOHead />
        
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Boost Agencies Section - Pixel Perfect Layout */}
        <section ref={boostRef?.elementRef} className="w-full px-4 sm:px-6 lg:px-0 pt-[80px] pb-[120px] lg:pt-[100px] lg:pb-[140px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`flex flex-col lg:flex-row justify-between items-center w-full gap-[60px] lg:gap-[80px] ${
              boostRef?.hasIntersected ? 'animate-fade-in' : 'opacity-0'
            }`}>
              {/* Left Image Stack - Exact Positioning */}
              <div className="w-full lg:w-[630px] relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[630px]">
                  <div className="absolute bottom-0 left-[8px] w-[532px] h-[532px] bg-[#f0faff] rounded-full"></div>
                  <LazyImage 
                    src="/images/img_shutterstock_1361520500.png" 
                    className="relative w-full max-w-[630px] h-auto z-10 transition-transform duration-300 hover:scale-[1.02]" 
                    alt="Professional Developer at Work" 
                  />
                </div>
              </div>

              {/* Right Content - Exact Spacing and Typography */}
              <div className="w-full lg:w-[516px] flex flex-col gap-[26px] justify-start items-start">
                <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-left text-[#0f2136] tracking-[-0.02em]">
                  Boost your agencies<br />
                  by choosing Ninja<br />
                  Developers
                </h2>
                <p className="text-[17px] font-dm-sans font-normal leading-[34px] text-left text-[#02073e99] w-full lg:w-[476px]">
                  Create custom landing pages with Shades that convert more visitors than any website, no coding required.
                </p>
                
                <div className="flex flex-col md:flex-row justify-start items-start w-full gap-[32px] mt-[16px]">
                  <div className="flex flex-col gap-[24px] justify-start items-center">
                    <LazyImage 
                      src="/images/img_combined_shape_16072.svg" 
                      className="w-[20px] h-[20px]" 
                      alt="Check Mark" 
                    />
                    <LazyImage 
                      src="/images/img_combined_shape_16072.svg" 
                      className="w-[20px] h-[20px]" 
                      alt="Check Mark" 
                    />
                    <LazyImage 
                      src="/images/img_combined_shape_16072.svg" 
                      className="w-[20px] h-[20px]" 
                      alt="Check Mark" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-[20px] justify-start items-start flex-1">
                    <div className="flex flex-col gap-0 justify-start items-start">
                      <p className="text-[18px] font-dm-sans font-normal leading-[45px] text-left text-[#02073e] mb-0">
                        Unlimited design possibility
                      </p>
                      <p className="text-[18px] font-dm-sans font-normal leading-[45px] text-left text-[#02073e] mb-0">
                        Completely responsive features
                      </p>
                      <p className="text-[18px] font-dm-sans font-normal leading-[45px] text-left text-[#02073e] mb-0">
                        Easy to customize plugins
                      </p>
                    </div>
                    
                    <button className="flex flex-row justify-start items-center gap-[8px] transition-all duration-300 hover:translate-x-1 group mt-[8px]">
                      <span className="text-[16px] font-dm-sans font-bold leading-[21px] text-left text-[#8d448b] group-hover:text-[#6d3469] transition-colors">
                        Learn more
                      </span>
                      <LazyImage 
                        src="/images/img_vector_purple_600.svg" 
                        className="w-[4px] h-[10px] transition-transform group-hover:translate-x-1" 
                        alt="Arrow Right" 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leading Companies Section - Exact Measurements */}
        <section ref={companiesRef?.elementRef} className="w-full px-4 sm:px-6 lg:px-0 pb-[120px] lg:pb-[140px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`flex flex-col justify-start items-center w-full ${
              companiesRef?.hasIntersected ? 'animate-fade-in' : 'opacity-0'
            }`}>
              <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-center text-[#0f2136] tracking-[-0.02em] w-full max-w-[412px]">
                Leading companies trust us to develop software
              </h2>
              <p className="text-[17px] font-dm-sans font-normal leading-[34px] text-center text-[#343d48] w-full max-w-[362px] mt-[24px]">
                We believe it is important for everyone to have access to software especially when it comes to digital learning be navigate.
              </p>
              
              <button className="flex flex-row gap-[8px] justify-center items-center mt-[16px] transition-all duration-300 hover:translate-x-1 group">
                <span className="text-[16px] font-dm-sans font-bold leading-[21px] text-left text-[#8d448b] group-hover:text-[#6d3469] transition-colors">
                  Explore Details
                </span>
                <LazyImage 
                  src="/images/img_vector_purple_600.svg" 
                  className="w-[4px] h-[10px] transition-transform group-hover:translate-x-1" 
                  alt="Arrow Right" 
                />
              </button>

              {/* Video Section - Exact Dimensions */}
              <div className="w-full flex justify-center items-center mt-[58px]">
                <button 
                  onClick={handleVideoPlay}
                  className="relative w-full max-w-[1110px] h-[300px] md:h-[400px] lg:h-[484px] bg-cover bg-center rounded-[6px] bg-[#02073e33] flex justify-center items-center transition-all duration-300 hover:scale-[1.01] group shadow-[0px_20px_60px_rgba(47,97,144,0.1)]"
                  style={{ backgroundImage: "url('/images/img_shutterstock1528124060_1.png')" }}
                  aria-label="Play Company Video"
                >
                  <div className="bg-[#ffffff] rounded-full w-[80px] h-[80px] md:w-[96px] md:h-[96px] flex justify-center items-center shadow-[0px_15px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110">
                    <LazyImage 
                      src="/images/img_vector_purple_600_40x34.svg" 
                      className="w-[28px] md:w-[34px] h-[32px] md:h-[40px] ml-[4px]" 
                      alt="Play Button Icon" 
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Comments Section - Pixel Perfect Typography */}
        <section ref={testimonialsRef?.elementRef} className="w-full px-4 sm:px-6 lg:px-0 pb-[120px] lg:pb-[140px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`flex flex-col justify-start items-center w-full ${
              testimonialsRef?.hasIntersected ? 'animate-fade-in' : 'opacity-0'
            }`}>
              <div className="flex flex-col gap-[12px] justify-start items-center">
                <p className="text-[18px] font-dm-sans font-bold leading-[24px] text-center text-[#8d448b] capitalize tracking-[0.5px]">
                  Customer Comments
                </p>
                <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-center text-[#0f2136] tracking-[-0.02em]">
                  Why customers love us
                </h2>
              </div>

              <blockquote className="text-[28px] md:text-[32px] lg:text-[36px] font-playfair font-normal leading-[45px] md:leading-[55px] lg:leading-[65px] text-center text-[#0f2136] w-full max-w-[540px] mt-[58px] tracking-[-0.01em]">
                "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again"
              </blockquote>

              <div className="flex flex-col justify-start items-start w-full max-w-[516px] gap-[26px] mt-[170px]">
                <div className="w-[240px] h-[3px] bg-[#8d448b] rounded-[2px]"></div>
                
                <div className="flex flex-col md:flex-row justify-start items-center w-full gap-[32px] ml-[8px]">
                  {testimonials?.map((testimonial) => (
                    <div key={testimonial?.id} className="flex flex-row justify-start items-center gap-[16px] transition-transform duration-300 hover:scale-105">
                      <LazyImage 
                        src={testimonial?.avatar} 
                        className="w-[50px] h-[50px] rounded-full object-cover" 
                        alt={`${testimonial?.name} Profile Picture`} 
                      />
                      <div className="flex flex-col gap-[4px] justify-start items-start">
                        <h4 className="text-[18px] font-dm-sans font-medium leading-[24px] text-left text-[#0f2136]">
                          {testimonial?.name}
                        </h4>
                        <p className="text-[15px] font-dm-sans font-normal leading-[20px] text-left text-[#343d48cc]">
                          {testimonial?.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support Section - Exact Layout */}
        <section ref={supportRef?.elementRef} className="w-full px-4 sm:px-6 lg:px-0 pb-[120px] lg:pb-[140px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`flex flex-col lg:flex-row justify-start items-center w-full gap-[60px] lg:gap-[80px] ${
              supportRef?.hasIntersected ? 'animate-fade-in' : 'opacity-0'
            }`}>
              {/* Left Content - Exact Width */}
              <div className="w-full lg:w-[672px] flex flex-col justify-start items-start lg:mt-[32px]">
                <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-left text-[#0f2136] tracking-[-0.02em] w-full lg:w-[564px]">
                  Free Customer Support to ensure what you like to expect
                </h2>
                <p className="text-[17px] font-dm-sans font-normal leading-[35px] text-left text-[#343d48] w-full lg:w-[536px] mt-[24px]">
                  We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we will refund payment or fix issues on our dime period customers.
                </p>
                <p className="text-[15px] font-dm-sans font-normal leading-[34px] text-left text-[#02073e99] w-full lg:w-[484px] mt-[16px]">
                  If you are happy with the developer and wish to continue. If you are unsatisfied, we will refund payment or fix issues.
                </p>
                
                <button className="flex flex-row justify-start items-center gap-[8px] mt-[16px] transition-all duration-300 hover:translate-x-1 group">
                  <span className="text-[16px] font-dm-sans font-bold leading-[21px] text-left text-[#8d448b] group-hover:text-[#6d3469] transition-colors">
                    Learn more
                  </span>
                  <LazyImage 
                    src="/images/img_vector_purple_600.svg" 
                    className="w-[4px] h-[10px] transition-transform group-hover:translate-x-1" 
                    alt="Arrow Right" 
                  />
                </button>
              </div>

              {/* Right Image Stack - Exact Positioning */}
              <div className="w-full lg:w-[584px] relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[584px]">
                  <div className="absolute top-[64px] left-[32px] w-[518px] h-[522px] bg-[#0f2136] rounded-[100px]"></div>
                  <LazyImage 
                    src="/images/img_shutterstock_1350640358.png" 
                    className="relative w-full max-w-[584px] h-auto rounded-[100px] z-10 transition-transform duration-300 hover:scale-[1.02]" 
                    alt="Customer Support Representative" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Section - Exact Card Layout */}
        <section ref={tutorialsRef?.elementRef} className="w-full bg-[#f7fafc] px-4 sm:px-6 lg:px-0 py-[80px] lg:py-[100px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`flex flex-col justify-start items-center w-full ${
              tutorialsRef?.hasIntersected ? 'animate-fade-in' : 'opacity-0'
            }`}>
              <p className="text-[18px] font-dm-sans font-bold leading-[24px] text-center text-[#8d448b] capitalize tracking-[0.5px]">
                Quality features
              </p>
              <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-dm-sans font-bold leading-[38px] md:leading-[44px] lg:leading-[60px] text-center text-[#0f2136] mt-[12px] tracking-[-0.02em]">
                Tutorials that people love most
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full max-w-[900px] mt-[68px] mb-[110px]">
                {tutorials?.map((tutorial, index) => (
                  <article 
                    key={tutorial?.id} 
                    className={`flex flex-col justify-start items-center w-full bg-[#ffffff] border border-[#f3f4f5] rounded-[10px] relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_15px_50px_rgba(0,0,0,0.08)] ${
                      tutorialsRef?.hasIntersected ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {index === 1 && (
                      <LazyImage 
                        src="/images/img_bg_white_a700.svg" 
                        className="absolute inset-0 w-full h-[90%] z-0 mb-[8px]" 
                        alt="Background Decoration" 
                      />
                    )}
                    <LazyImage 
                      src={tutorial?.image} 
                      className="w-full h-[230px] object-cover rounded-t-[10px] relative z-10" 
                      alt={`Tutorial: ${tutorial?.title}`} 
                    />
                    <div className="flex flex-col gap-[16px] justify-start items-start w-full px-[24px] pb-[36px] pt-[24px] relative z-10">
                      <h3 className="text-[20px] font-dm-sans font-bold leading-[30px] text-left text-[#0f2136] w-full">
                        {tutorial?.title}
                      </h3>
                      <div className="flex flex-row justify-start items-center gap-[8px]">
                        <LazyImage 
                          src="/images/img_vector_blue_gray_200_01.svg" 
                          className="w-[24px] h-[22px]" 
                          alt="Comments Icon" 
                        />
                        <span className="text-[16px] font-dm-sans font-medium leading-[21px] text-left text-[#343d48cc]">
                          {tutorial?.comments}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Exact Background and Positioning */}
        <section ref={ctaRef?.elementRef} className="w-full px-4 sm:px-6 lg:px-0 pb-[120px] lg:pb-[140px]">
          <div className="w-full max-w-[1290px] mx-auto">
            <div className={`relative w-full ${
              ctaRef?.hasIntersected ? 'animate-scale-in' : 'opacity-0'
            }`}>
              <div className="absolute top-[32px] right-[64px] flex flex-col md:flex-row items-center gap-[190px] w-[82%] pointer-events-none">
                <LazyImage 
                  src="/images/img_group_48.svg" 
                  className="w-[248px] h-[118px]" 
                  alt="Decorative Shape" 
                />
                <div className="flex flex-col gap-[84px] justify-start items-center">
                  <LazyImage 
                    src="/images/img_group_46.svg" 
                    className="w-[72px] h-[24px]" 
                    alt="Decorative Element" 
                  />
                  <LazyImage 
                    src="/images/img_group_46.svg" 
                    className="w-[72px] h-[24px]" 
                    alt="Decorative Element" 
                  />
                </div>
              </div>
              
              <div className="bg-[#8d448b] rounded-[16px] px-[70px] py-[32px] w-full h-[200px] flex flex-col md:flex-row justify-between items-center gap-[32px]">
                <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-dm-sans font-bold leading-[35px] md:leading-[45px] lg:leading-[55px] text-left text-[#ffffff] w-full max-w-[592px] tracking-[-0.02em]">
                  Hire the world's best developers<br />
                  and designers around!
                </h2>
                <Button
                  onClick={handleHireDevelopers}
                  variant="outline"
                  className="bg-[#ffffff] text-[#8d448b] text-[17px] font-dm-sans font-bold leading-[23px] tracking-[1px] text-center rounded-[3px] px-[32px] py-[16px] w-auto transition-all duration-300 hover:bg-[#8d448b] hover:text-[#ffffff] hover:scale-105 border-2 border-transparent hover:border-[#ffffff]"
                >
                  HIRE DEVELOPERS
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Exact Layout */}
        <footer className="w-full bg-[#ffffff] py-[62px] -mt-[114px] relative z-10">
          <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-[32px]">
              <div className="flex flex-row justify-start items-center gap-[16px]">
                <LazyImage 
                  src="/images/img_group.png" 
                  className="w-[26px] h-[36px]" 
                  alt="Builderz Logo" 
                />
                <p className="text-[14px] font-dm-sans font-normal leading-[19px] text-left text-[#f7fafc] self-end">
                  Copyright by 2025 Builderz, Inc
                </p>
              </div>
              <nav>
                <p className="text-[16px] font-dm-sans font-normal leading-[21px] text-center md:text-right text-[#02073e]">
                  <a href="#home" className="hover:text-[#8d448b] transition-colors">Home</a>
                  <span className="mx-[16px] text-[#02073e99]">•</span>
                  <a href="#advertise" className="hover:text-[#8d448b] transition-colors">Advertise</a>
                  <span className="mx-[16px] text-[#02073e99]">•</span>
                  <a href="#supports" className="hover:text-[#8d448b] transition-colors">Supports</a>
                  <span className="mx-[16px] text-[#02073e99]">•</span>
                  <a href="#marketing" className="hover:text-[#8d448b] transition-colors">Marketing</a>
                  <span className="mx-[16px] text-[#02073e99]">•</span>
                  <a href="#faq" className="hover:text-[#8d448b] transition-colors">FAQ</a>
                </p>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default Home;