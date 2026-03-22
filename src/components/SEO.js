import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.svbanquethalls.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO component — drop into any page to override per-page meta tags.
 *
 * Props:
 *   title        {string} – page title (appended with site name)
 *   description  {string} – meta description
 *   canonical    {string} – full canonical URL for this page
 *   image        {string} – absolute OG image URL
 *   type         {string} – OG type ("website" | "article")
 *   noIndex      {bool}   – set true to block indexing on a page
 */
const SEO = ({
  title = "SV Banquet Halls | Premier Banquet Hall in Hyderabad",
  description = "SV Banquet Halls in Mansoorabad, Hyderabad offers elegant spaces for weddings, receptions, birthday parties, and corporate events. Call +91 6305 333 751 to book today.",
  canonical = SITE_URL + "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}) => {
  const fullTitle = title.includes("SV Banquet Halls")
    ? title
    : `${title} | SV Banquet Halls`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
