import React from 'react';
import Button from '../ui/Button';
import LazyImage from '../ui/LazyImage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const HeroSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const handleSubscribe = (e) => {
    e?.preventDefault();
    const email = e?.target?.elements?.email?.value;
    if (email) {
      console.log('Newsletter subscription:', email);
      // Add newsletter subscription logic here
      e.target.elements.email.value = '';
    }
  };

  return (
    <section 
      ref={elementRef}
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img_bg.svg')" }}
    >
      <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className={`flex flex-col lg:flex-row justify-start items-start py-[96px] lg:py-[120px] gap-[64px] lg:gap-[80px] ${
          hasIntersected ? 'animate-fade-in' : 'opacity-0'
        }`}>
          {/* Left Content - Exact Width and Spacing */}
          <div className="w-full lg:w-[568px] flex flex-col gap-[68px] mt-[30px]">
            <div className="flex flex-col justify-start items-start w-full">
              <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-dm-sans font-bold leading-[48px] md:leading-[64px] lg:leading-[80px] text-left text-[#02073e] tracking-[-0.03em]">
                Great software is<br />
                built with amazing<br />
                developers
              </h1>
              <p className="text-[16px] md:text-[18px] font-dm-sans font-normal leading-[32px] md:leading-[42px] text-left text-[#02073e] w-full lg:w-[432px] mt-[28px]">
                We help build and manage a team of world-class developers to bring your vision to life
              </p>
              
              {/* Newsletter Subscription - Exact Sizing */}
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row justify-start items-stretch w-full mt-[68px] gap-[14px] sm:gap-0"
              >
                <div className="bg-[#ffffff] shadow-[0px_10px_50px_rgba(47,97,144,0.08)] rounded-[8px] px-[24px] py-[20px] flex-1 max-w-[380px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Subscribe newsletter"
                    required
                    className="w-full text-[16px] font-dm-sans font-normal leading-[21px] text-left text-[#02073e66] bg-transparent border-none outline-none placeholder-[#02073e33]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-[#8d448b] text-[#ffffff] text-[20px] font-dm-sans font-bold leading-[27px] text-center rounded-[4px] px-[32px] py-[20px] ml-0 sm:ml-[14px] w-full sm:w-auto transition-all duration-300 hover:bg-[#6d3469] hover:scale-105"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Sponsors - Exact Spacing */}
            <div className="flex flex-col justify-center items-start w-full gap-[16px]">
              <p className="text-[16px] font-dm-sans font-normal leading-[21px] text-left text-[#56627299]">
                Sponsored by:
              </p>
              <div className="flex flex-row justify-start items-center w-full gap-[28px] px-[20px]">
                <LazyImage 
                  src="/images/img_paypal.png" 
                  className="w-[100px] h-[28px] object-contain" 
                  alt="PayPal Sponsor" 
                />
                <LazyImage 
                  src="/images/img_google.png" 
                  className="w-[84px] h-[28px] object-contain ml-[28px]" 
                  alt="Google Sponsor" 
                />
                <div className="flex flex-row justify-start items-center gap-[4px] px-[24px]">
                  <LazyImage 
                    src="/images/img_vector.svg" 
                    className="w-[28px] h-[24px] object-contain" 
                    alt="Vector Logo" 
                  />
                  <LazyImage 
                    src="/images/img_vector_blue_gray_200.svg" 
                    className="w-[88px] h-[20px] object-contain ml-[4px]" 
                    alt="Vector Text" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Exact Positioning */}
          <div className="w-full lg:w-[772px] flex justify-center lg:justify-end items-center">
            <LazyImage 
              src="/images/img_img.png" 
              className="w-full max-w-[772px] h-auto transition-transform duration-300 hover:scale-[1.02]" 
              alt="Professional Developer Team - Hero Image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;