import type { Metadata } from "next";
import Script from "next/script";
import ChatPopup from "@/components/ChatPopup";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stella 八ヶ岳",
  description: "星空・サウナ・BBQ・大型スクリーンを楽しめる八ヶ岳の一棟貸切専用宿泊施設",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon-32.jpg" sizes="32x32" />
        <link rel="icon" href="/favicon-192.jpg" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
        <link rel="stylesheet" href="/wp-includes/blocks/cover/style.min8717.css" />
        <link rel="stylesheet" href="/wp-content/plugins/vk-all-in-one-expansion-unit/assets/css/vkExUnit_stylef895.css" />
        <link rel="stylesheet" href="/wp-content/plugins/lightning-g3-pro-unit/inc/header-top/package/css/header-topdc63.css" />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles1b46.css" />
        <link rel="stylesheet" href="/wp-content/plugins/table-of-contents-plus/screen.mineabb.css" />
        <link rel="stylesheet" href="/wp-content/plugins/vk-blocks-pro/vendor/vektor-inc/vk-swiper/src/assets/css/swiper-bundle.min8346.css" />
        <link rel="stylesheet" href="/wp-content/themes/lightning/_g3/assets/css/style-theme-json10e5.css" />
        <link rel="stylesheet" href="/wp-content/themes/lightning/_g3/design-skin/origin3/css/style10e5.css" />
        <link rel="stylesheet" href="/wp-content/themes/lightning/_g3/inc/vk-wp-oembed-blog-card/package/css/blog-card8717.css" />
        <link rel="stylesheet" href="/wp-content/plugins/vk-all-in-one-expansion-unit/inc/call-to-action/package/assets/css/stylef895.css" />
        <link rel="stylesheet" href="/wp-content/plugins/vk-blocks-pro/build/block-build68d9.css" />
        <link rel="stylesheet" href="/wp-content/themes/lightning/style10e5.css" />
        <link rel="stylesheet" href="/wp-content/themes/lightning/vendor/vektor-inc/font-awesome-versions/src/versions/6/css/all.min1e39.css" />
        <link rel="stylesheet" href="/wp-content/plugins/lightning-g3-pro-unit/inc/header-layout/package/css/header-layout2453.css" />
        <link rel="stylesheet" href="/wp-content/plugins/lightning-g3-pro-unit/inc/vk-campaign-text/package/css/vk-campaign-textc5da.css" />
        <link rel="stylesheet" href="/wp-content/plugins/lightning-g3-pro-unit/inc/vk-mobile-fix-nav/package/css/vk-mobile-fix-nav1881.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" />
        <style>{`
          :root {
            --vk-color-primary:#337ab7;
            --vk-color-primary-dark:#296292;
            --vk-color-primary-vivid:#3886c9;
            --vk-page-header-url: url(https://stellaresort.jp/wp-content/uploads/2024/12/098-PC040161-scaled-1.jpg);
            --vk-header-logo-url: url(/wp-content/uploads/2024/12/stella-logo-design-pre-4.png);
            --swiper-navigation-color: #fff;
            --vk-mobile-nav-menu-btn-bg-src: url("/wp-content/themes/lightning/_g3/inc/vk-mobile-nav/package/images/vk-menu-btn-black.svg");
            --vk-mobile-nav-menu-btn-close-bg-src: url("/wp-content/themes/lightning/_g3/inc/vk-mobile-nav/package/images/vk-menu-close-black.svg");
            --g_nav_main_acc_icon_open_url: url(/wp-content/themes/lightning/_g3/inc/vk-mobile-nav/package/images/vk-menu-acc-icon-open-black.svg);
            --g_nav_sub_acc_icon_open_url: url(https://stellaresort.jp/wp-content/themes/lightning/_g3/inc/vk-mobile-nav/package/images/vk-menu-acc-icon-open-white.svg);
            --vk_flow-arrow: url(/wp-content/plugins/vk-blocks-pro/inc/vk-blocks/images/arrow_bottom.svg);
          }
          .page-header {
            position: relative;
            color: #ffffff;
            background: var(--vk-page-header-url, url(https://stellaresort.jp/wp-content/uploads/2024/12/098-PC040161-scaled-1.jpg)) no-repeat 50% center;
            background-size: cover;
            min-height: 9rem;
          }
          .page-header::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            background-color: #fff;
            opacity: 0.4;
            width: 100%; height: 100%;
          }
          .site-footer { background-color: #003144; color: #ffffff; }
          .header-top { color: #1e73be; }
          .header-top .nav li a { color: #1e73be; }
          .navbar-brand img { max-height: none; }
          @media (min-width: 992px) {
            .site-header-logo img { max-height: 120px; }
            .header-top .header-top-description { font-size: 14px; }
            .header-top ul>li>a, .header-top ul>li>span { font-size: 24px; }
            .header-top .header-top-contact-btn a.btn { font-size: 16px; }
          }
          @media (max-width: 991px) {
            .site-header-logo img { max-height: 80px; }
          }
          .facility-subnav-link {
            display: block;
            padding: 0.45rem 0.9rem;
            font-size: 0.82rem;
            color: #003144;
            font-weight: 600;
            text-decoration: none;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }
          .facility-subnav-link:hover { color: #1e73be; }
          img.wp-smiley, img.emoji {
            display: inline !important; border: none !important;
            box-shadow: none !important; height: 1em !important;
            width: 1em !important; margin: 0 0.07em !important;
            vertical-align: -0.1em !important; background: none !important; padding: 0 !important;
          }
        `}</style>
      </head>
      <body className="wp-embed-responsive wp-theme-lightning vk-blocks sidebar-fix sidebar-fix-priority-top device-pc fa_v6_css">
        <div id="google_translate_element" style={{ display: "none" }} />
        {children}
        <ChatPopup />
        <Script src="/wp-includes/js/jquery/jquery.minf43b.js" strategy="beforeInteractive" />
        <Script src="/wp-includes/js/jquery/jquery-migrate.min5589.js" strategy="beforeInteractive" />
        <Script src="/wp-content/plugins/vk-blocks-pro/vendor/vektor-inc/vk-swiper/src/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/vk-blocks-pro/build/vk-slider.min.js" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'ja',
              includedLanguages: 'en,zh-CN,zh-TW,ko,fr,de,es,it,pt',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}</Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-hide-bar" strategy="afterInteractive">{`
          /* Google Translateのツールバーを非表示 */
          var style = document.createElement('style');
          style.innerHTML = '.goog-te-banner-frame{display:none!important} body{top:0!important}';
          document.head.appendChild(style);
        `}</Script>
        <Script id="swiper-init" strategy="afterInteractive">{`
          (function tryInitSwiper(attempts) {
            if (typeof Swiper !== 'undefined' && document.querySelector('.lightning_swiper')) {
              new Swiper('.lightning_swiper', {
                slidesPerView: 1, spaceBetween: 0, loop: true,
                autoplay: { delay: 4000 },
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                effect: 'slide'
              });
            } else if (attempts > 0) {
              setTimeout(function(){ tryInitSwiper(attempts - 1); }, 300);
            }
          })(10);
        `}</Script>
      </body>
    </html>
  );
}
