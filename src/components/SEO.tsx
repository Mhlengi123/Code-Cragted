import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "CodeCrafted | Strategic Digital Asset Management",
  description = "CodeCrafted engineers high-performance websites and e-commerce systems for businesses that demand technical rigour and measurable growth.",
  keywords = "web development, ecommerce engineering, UI/UX design, technical SEO, digital strategy, South Africa web design",
  image = "/og-image.jpg", // Placeholder, ideally a real image
  url = "https://codecrafted.firm", // Placeholder
  type = "website"
}) => {
  const siteTitle = title.includes("CodeCrafted") ? title : `${title} | CodeCrafted`;

  return (
    <Helmet>
      {/* Standard identity meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mhlengi Mathonsi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
