import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stella 八ヶ岳 | 八ヶ岳の一棟貸切専用宿泊施設",
  description:
    "星空・サウナ・BBQ・大型スクリーンを楽しめる八ヶ岳の一棟貸切専用宿泊施設。原村・姫木平の2施設をご用意しています。",
};

export default function TopPage() {
  return (
    <>
      {/* ===== ヘッダー ===== */}
      <header id="site-header" className="site-header site-header--layout--nav-float">
        <div className="header-top" id="header-top">
          <div className="container">
            <p className="header-top-description">
              星空・サウナ・BBQ・大型スクリーンを楽しめる八ヶ岳の一棟貸切専用宿泊施設
            </p>
            <nav>
              <ul className="nav">
                <li className="header-top-tel">
                  <span className="header-top-tel-wrap">
                    <i className="fas fa-mobile-alt"></i>TEL.050-1792-1781
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          id="site-header-container"
          className="site-header-container site-header-container--scrolled--logo-and-nav-container container"
        >
          <div className="site-header-logo site-header-logo--scrolled--logo-and-nav-container">
            <a href="/">
              <span>
                <img
                  src="/wp-content/uploads/2024/12/stella-logo-design-pre-4.png"
                  alt="Stella 八ヶ岳"
                />
              </span>
            </a>
          </div>
          <nav
            id="global-nav"
            className="global-nav global-nav--layout--float-right global-nav--scrolled--logo-and-nav-container"
          >
            <ul className="menu vk-menu-acc global-nav-list nav">
              <li className="menu-item">
                <a href="/haramura">
                  <strong className="global-nav-name">原村</strong>
                </a>
              </li>
              <li className="menu-item">
                <a href="/himeki">
                  <strong className="global-nav-name">姫木平</strong>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://stellaresort.jp/contact/">
                  <strong className="global-nav-name">お問い合わせ</strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== ヒーロー動画 ===== */}
      <div
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/wp-content/uploads/2025/01/stella-top-image-03.m4v"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            opacity: 0.38,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            padding: "2rem",
          }}
        >
          <img
            src="/wp-content/uploads/2024/12/stella-logo-design-pre-4.png"
            alt="Stella 八ヶ岳"
            style={{
              maxWidth: 200,
              marginBottom: "1.5rem",
              filter: "brightness(0) invert(1)",
            }}
          />
          <p style={{ fontSize: "1.1rem", letterSpacing: "0.15em", margin: 0 }}>
            星空・サウナ・BBQ・大型スクリーン
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
              marginTop: "0.5rem",
              opacity: 0.9,
            }}
          >
            八ヶ岳の一棟貸切専用宿泊施設
          </p>
        </div>
      </div>

      {/* ===== コンセプト ===== */}
      <section
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
              color: "#1a1a1a",
            }}
          >
            自然の中で、特別な時間を。
          </h2>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "0.97rem" }}>
            Stella（ステラ）は、八ヶ岳の豊かな自然に抱かれた一棟貸切の宿泊施設です。
            <br />
            満天の星空の下でのサウナ、仲間と囲むBBQ、大型スクリーンでの映画鑑賞——
            <br />
            日常を離れ、大切な人と過ごすかけがえのない時間をご提供します。
            <br />
            長野県原村と姫木平、2つの施設からお選びください。
          </p>
        </div>
      </section>

      {/* ===== 2施設カード ===== */}
      <section
        style={{ padding: "3rem 1.5rem 5rem", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              color: "#999",
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            OUR FACILITIES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* 原村カード */}
            <Link href="/haramura" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingTop: "66%",
                    overflow: "hidden",
                    backgroundColor: "#eee",
                  }}
                >
                  <img
                    src="/wp-content/uploads/2024/12/P6054473-1024x768.jpg"
                    alt="Stella 八ヶ岳原村"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1.8rem" }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      color: "#aaa",
                      marginBottom: "0.5rem",
                    }}
                  >
                    NAGANO / HARA VILLAGE
                  </p>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "0.8rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Stella 八ヶ岳 原村
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      lineHeight: 1.9,
                      marginBottom: "1.4rem",
                    }}
                  >
                    長野県諏訪郡原村。八ヶ岳の麓に佇む一棟貸切の宿。
                    <br />
                    バレルサウナ・BBQ・大型スクリーンを完備。
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.6rem 1.5rem",
                      backgroundColor: "#003144",
                      color: "#fff",
                      borderRadius: 4,
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    施設を見る →
                  </span>
                </div>
              </div>
            </Link>

            {/* 姫木平カード */}
            <Link href="/himeki" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingTop: "66%",
                    overflow: "hidden",
                    backgroundColor: "#eee",
                  }}
                >
                  <img
                    src="/wp-content/uploads/2026/04/PXL_20260403_093735966-1-1024x768.jpg"
                    alt="Stella 八ヶ岳姫木平"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1.8rem" }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      color: "#aaa",
                      marginBottom: "0.5rem",
                    }}
                  >
                    NAGANO / HIMEKI DAIRA
                  </p>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "0.8rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Stella 八ヶ岳 姫木平
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      lineHeight: 1.9,
                      marginBottom: "1.4rem",
                    }}
                  >
                    長野県小県郡長和町姫木平。7部屋・最大14名収容。
                    <br />
                    グループ・合宿・家族旅行に最適な大型施設。
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.6rem 1.5rem",
                      backgroundColor: "#003144",
                      color: "#fff",
                      borderRadius: 4,
                      fontSize: "0.85rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    施設を見る →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="site-footer">
        <div className="container site-footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_block widget_text">
                <p>
                  <strong style={{ fontSize: 18 }}>Stella</strong>
                </p>
              </aside>
              <aside className="widget widget_block widget_text">
                <p>
                  <b>TEL</b>
                  <span style={{ fontSize: 18 }}> 050-1792-1781</span>
                </p>
              </aside>
              <aside className="widget widget_block widget_media_image">
                <figure className="wp-block-image size-full is-resized">
                  <a
                    href="https://www.instagram.com/p/C80uVEQJ1IR/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      loading="lazy"
                      width={500}
                      height={500}
                      src="/wp-content/uploads/2024/12/Instagram_Glyph_Gradient.png"
                      alt="Instagram"
                      style={{ width: 48, height: "auto" }}
                    />
                  </a>
                </figure>
              </aside>
            </div>
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_nav_menu">
                <h4 className="widget-title site-footer-title">Facilities</h4>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="/haramura">Stella 原村</a>
                  </li>
                  <li className="menu-item">
                    <a href="/himeki">Stella 姫木平</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://stellaresort.jp/contact/">お問い合わせ</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
        <div className="container site-footer-copyright">
          <p>Copyright &copy; Stella 八ヶ岳 All Rights Reserved.</p>
        </div>
      </footer>

      {/* ===== モバイルナビ ===== */}
      <div id="vk-mobile-nav-menu-btn" className="vk-mobile-nav-menu-btn">
        MENU
      </div>
      <div className="vk-mobile-nav vk-mobile-nav-drop-in" id="vk-mobile-nav">
        <nav className="vk-mobile-nav-menu-outer" role="navigation">
          <ul className="vk-menu-acc menu">
            <li className="menu-item">
              <a href="/haramura">原村</a>
            </li>
            <li className="menu-item">
              <a href="/himeki">姫木平</a>
            </li>
            <li className="menu-item">
              <a href="https://stellaresort.jp/contact/">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="#top" id="page_top" className="page_top_btn">
        PAGE TOP
      </a>
    </>
  );
}
