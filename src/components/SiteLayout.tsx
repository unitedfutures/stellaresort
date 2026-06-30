import LanguageSwitcher from "@/components/LanguageSwitcher";

interface SubNavItem {
  label: string;
  href: string;
}

interface SiteLayoutProps {
  title: string;
  breadcrumb: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  subNav?: SubNavItem[];
}

export default function SiteLayout({ title, breadcrumb, children, fullWidth, subNav }: SiteLayoutProps) {
  return (
    <>
      <header id="site-header" className="site-header site-header--layout--nav-float">
        <div className="header-top" id="header-top">
          <div className="container">
            <p className="header-top-description">星空・サウナ・BBQ・大型スクリーンを楽しめる八ヶ岳の一棟貸切専用宿泊施設</p>
            <nav>
              <ul className="nav">
                <li className="header-top-tel">
                  <span className="header-top-tel-wrap">
                    <i className="fas fa-mobile-alt"></i>TEL.050-1792-1781
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginLeft: "0.75rem" }}>
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="site-header-container" className="site-header-container site-header-container--scrolled--logo-and-nav-container container">
          <div className="site-header-logo site-header-logo--scrolled--logo-and-nav-container">
            <a href="https://stellaresort.jp/">
              <span><img src="/wp-content/uploads/2024/12/stella-logo-design-pre-4.png" alt="Stella 八ヶ岳" /></span>
            </a>
          </div>
          {subNav ? (
            /* 施設ページ用：1段目に施設選択ナビ */
            <nav id="global-nav" className="global-nav global-nav--layout--float-right global-nav--scrolled--logo-and-nav-container">
              <ul className="menu vk-menu-acc global-nav-list nav">
                <li className="menu-item"><a href="/haramura"><strong className="global-nav-name">原村</strong></a></li>
                <li className="menu-item"><a href="/himeki"><strong className="global-nav-name">姫木平</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/contact/"><strong className="global-nav-name">お問い合わせ</strong></a></li>
              </ul>
            </nav>
          ) : (
            /* 通常ページ用：既存ナビ */
            <nav id="global-nav" className="global-nav global-nav--layout--float-right global-nav--scrolled--logo-and-nav-container">
              <ul className="menu vk-menu-acc global-nav-list nav">
                <li className="menu-item"><a href="https://stellaresort.jp/"><strong className="global-nav-name">ホーム</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/#stay2"><strong className="global-nav-name">ご宿泊</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/#information"><strong className="global-nav-name">基本情報</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/#access"><strong className="global-nav-name">アクセス</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/#experience"><strong className="global-nav-name">体験</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/#booking"><strong className="global-nav-name">ご予約</strong></a></li>
                <li className="menu-item"><a href="https://stellaresort.jp/contact/"><strong className="global-nav-name">お問い合わせ</strong></a></li>
              </ul>
            </nav>
          )}
        </div>

        {/* 2段目：施設内セクションナビ */}
        {subNav && (
          <div style={{ backgroundColor: "#f7f7f7", borderBottom: "1px solid #e0e0e0" }}>
            <div className="container">
              <nav>
                <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", margin: 0, padding: "0.3rem 0", gap: "0.1rem" }}>
                  {subNav.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="facility-subnav-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="page-header">
        <div className="page-header-inner container">
          <h1 className="page-header-title">{title}</h1>
        </div>
      </div>

      <div id="breadcrumb" className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            <li className="breadcrumb-list__item breadcrumb-list__item--home" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <a href="https://stellaresort.jp/" itemProp="item">
                <i className="fas fa-fw fa-home"></i><span itemProp="name">Stella八ヶ岳</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-list__item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <span itemProp="name">{breadcrumb}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </div>

      {fullWidth ? (
        <div className="site-body">
          <div id="main" role="main" style={{ overflow: "hidden" }}>
            {children}
          </div>
        </div>
      ) : (
        <div className="site-body">
          <div className="site-body-container container">
            <div className="main-section main-section--col--two" id="main" role="main">
              <div className="entry entry-full">
                <div className="entry-body">
                  {children}
                </div>
              </div>
            </div>
            <div className="sub-section sub-section--col--two"></div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container site-footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_block widget_text">
                <p><strong style={{ fontSize: 18 }}>Stella八ヶ岳</strong></p>
              </aside>
              <aside className="widget widget_block widget_text">
                <p>
                  <b>住所</b><br />
                  <span style={{ fontSize: 13 }}>〒391-0114 長野県諏訪郡原村<br />第2ペンションビレッジ17217-1701</span><br /><br />
                  <b>TEL</b><span style={{ fontSize: 21 }}> 050-3558-6388</span>
                </p>
              </aside>
              <aside className="widget widget_block widget_media_image">
                <figure className="wp-block-image size-full is-resized">
                  <a href="https://www.instagram.com/p/C80uVEQJ1IR/" target="_blank" rel="noreferrer noopener">
                    <img loading="lazy" width="500" height="500" src="/wp-content/uploads/2024/12/Instagram_Glyph_Gradient.png" alt="Instagram" style={{ width: 58, height: "auto" }} />
                  </a>
                </figure>
              </aside>
            </div>
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_nav_menu">
                <h4 className="widget-title site-footer-title">Contents</h4>
                <ul className="menu">
                  <li className="menu-item"><a href="https://stellaresort.jp/">ホーム</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/#stay2">ご宿泊</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/#information">基本情報</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/#access">アクセス</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/#experience">体験</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/#booking">ご予約</a></li>
                  <li className="menu-item"><a href="https://stellaresort.jp/contact/">お問い合わせ</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
        <div className="container site-footer-copyright">
          <p>Copyright &copy; <a href="http://united-futures.com/" target="_blank" rel="noreferrer noopener" style={{ color: "inherit" }}>United Futures, Inc.</a> All Rights Reserved.</p>
        </div>
      </footer>

      <div id="vk-mobile-nav-menu-btn" className="vk-mobile-nav-menu-btn">MENU</div>
      <div className="vk-mobile-nav vk-mobile-nav-drop-in" id="vk-mobile-nav">
        <nav className="vk-mobile-nav-menu-outer" role="navigation">
          <ul className="vk-menu-acc menu">
            <li className="menu-item"><a href="https://stellaresort.jp/">ホーム</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/#stay2">ご宿泊</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/#information">基本情報</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/#access">アクセス</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/#experience">体験</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/#booking">ご予約</a></li>
            <li className="menu-item"><a href="https://stellaresort.jp/contact/">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
      <a href="#top" id="page_top" className="page_top_btn">PAGE TOP</a>
    </>
  );
}
