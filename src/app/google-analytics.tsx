'use client';

import Script from 'next/script';

/**
 * @param {{ measurementId: string }} props
 */
const GoogleAnalytics = ({ measurementId }) => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;