import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = 'Builderz - Great Software Built with Amazing Developers',
  description = 'We help build and manage a team of world-class developers to bring your vision to life. Professional agency services for modern businesses.',
  keywords = 'software development, developers, agency, web development, mobile apps, custom software',
  image = '/images/og-image.jpg',
  url = window.location?.href,
  type = 'website',
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Builderz" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Builderz" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8d448b" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Builderz",
          "description": description,
          "url": url,
          "logo": "/images/img_group.png",
          "sameAs": [
            "https://twitter.com/builderz",
            "https://linkedin.com/company/builderz"
          ]
        })}
      </script>
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes?.string,
  description: PropTypes?.string,
  keywords: PropTypes?.string,
  image: PropTypes?.string,
  url: PropTypes?.string,
  type: PropTypes?.string,
};

export default SEOHead;