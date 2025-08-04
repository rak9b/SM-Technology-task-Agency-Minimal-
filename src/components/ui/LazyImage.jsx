import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.svg',
  loading = 'lazy',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );
      observer?.observe(imageRef);
    }
    
    return () => {
      if (observer && observer?.unobserve) {
        observer?.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setImageSrc(placeholder);
    setLoaded(true);
  };

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      loading={loading}
      className={`transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes?.string?.isRequired,
  alt: PropTypes?.string?.isRequired,
  className: PropTypes?.string,
  placeholder: PropTypes?.string,
  loading: PropTypes?.oneOf(['lazy', 'eager']),
};

export default LazyImage;