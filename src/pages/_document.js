import { BASE_PATH } from 'config';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Most Professional Real Estate Agency" />
        <meta
          name="description"
          content="ONE LEGACY REALTY SDN BHD E(1) 2004 is a registered Real Estate Agents (REA) with Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEA). Our agency was incorporated on APRIL 2018 and which is located at Johor Bahru area that’s include our HQ Office at Damansara Aliff Tampoi and our New Branch at Taman Adda Height."
        />
        <meta
          name="keywords"
          content="sewa rumah, sewa rumah murah, rent a house, house for rent johor bahru, house for rent mount austin, house for rent skudai, house for rent gelang patah,   house for rent masai,  rumah sewa johor bahru, rumah sewa skudai, rumah sewa masai, iproperty, propertyguru, ibilik, mudah, rumah sewa murah, apartment johor bahru, apartment for rent johor bahru, apartment for rent mount austin, apartment for rent, apartment for rent kuala lumpur, house for rent, hoom, hoomventure, hoom venture sdn bhd, bryce wong, raymond koo, bosskoo, Real Estate Agents (REA), Johor Bahru, property, rumah sewa, rumah lelong, beli rumah,  Rent / Sale , Buy property, Academy , Training Services, Valuation Consultancy Services, Property Investment Consultancy, Property Legal Consultancy, Refinance Consultancy, Find properties for rent, sell and short-stay"
        />
        <meta property="og:image" content={`${BASE_PATH}assets/images/previewImg1.jpg`} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="ODIC" />
        <meta name="description" content="OD Investment Center" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* 
      <!-- Android  --> 
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <!-- iOS -->
        <meta name="apple-mobile-web-app-title" content="ODIC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
     <!-- Windows  -->
        <meta name="msapplication-navbutton-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-TileImage" content="img/android-icon-192x192.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />
       <!-- Pinned Sites  --> 
        <meta name="application-name" content="Digital Counter" />
        <meta name="msapplication-tooltip" content="Digital Counter" />
        <meta name="msapplication-starturl" content="/DigitalCounter/" />
        <!-- Tap highlighting  -->
        <meta name="msapplication-tap-highlight" content="no" />
         <!-- UC Mobile Browser  --> 
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
       <!-- imagemode - show image even in text only mode  -->
        <meta name="imagemode" content="force" />
      <!-- Orientation  --> 
        <meta name="screen-orientation" content="portrait" /> */}
        {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" /> */}
        <meta name="theme-color" content="black" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="article:publisher" content="https://www.facebook.com/OneDreamLegacyJohor" />
        <meta property="og:title" content="One Dream Legacy - Most Professional Real Estate Agency" />
        <meta
          property="og:description"
          content="ONE LEGACY REALTY SDN BHD E(1) 2004 is a registered Real Estate Agents (REA) with Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEA). Our agency was incorporated on APRIL 2018 and which is located at Johor Bahru area that’s include our HQ Office at Damansara Aliff Tampoi and our New Branch at Taman Adda Height"
        />
        <meta name="twitter:card" content="summary" />
        {/* <meta property="twitter:url" content="https://onedreamproperty.com.my" /> */}
        <meta property="twitter:title" content="One Dream Legacy - Most Professional Real Estate Agency" />
        <meta property="twitter:image" content={`${BASE_PATH}assets/images/previewImg1.jpg`} />
        <meta
          name="twitter:description"
          content="ONE LEGACY REALTY SDN BHD E(1) 2004 is a registered Real Estate Agents (REA) with Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEA). Our agency was incorporated on APRIL 2018 and which is located at Johor Bahru area that’s include our HQ Office at Damansara Aliff Tampoi and our New Branch at Taman Adda Height"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
          integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          async
        ></script>
        {/* <meta property="article:modified_time" content="2021-12-20T13:35:53+00:00" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
