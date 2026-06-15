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
          height: "100svh",
          minHeight: 500,
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
        {/* グラデーションオーバーレイ */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
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
              maxWidth: 220,
              marginBottom: "2rem",
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
            }}
          />
          <p
            style={{
              fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
              letterSpacing: "0.25em",
              margin: "0 0 0.6rem",
              opacity: 0.9,
              fontWeight: 300,
            }}
          >
            YATSUGATAKE / PRIVATE VILLA
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              letterSpacing: "0.15em",
              margin: "0 0 2.5rem",
              fontWeight: 500,
            }}
          >
            星空・サウナ・BBQ・大型スクリーン
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/haramura"
              style={{
                display: "inline-block",
                padding: "0.8rem 2rem",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "0.12em",
                fontSize: "0.85rem",
                backdropFilter: "blur(4px)",
                transition: "background 0.2s",
              }}
            >
              原村を見る
            </Link>
            <Link
              href="/himeki"
              style={{
                display: "inline-block",
                padding: "0.8rem 2rem",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "0.12em",
                fontSize: "0.85rem",
                backdropFilter: "blur(4px)",
                transition: "background 0.2s",
              }}
            >
              姫木平を見る
            </Link>
          </div>
        </div>
        {/* スクロール誘導 */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            opacity: 0.7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>SCROLL</span>
          <span style={{ width: 1, height: 40, background: "rgba(255,255,255,0.6)", display: "block" }} />
        </div>
      </div>

      {/* ===== コンセプト ===== */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#999",
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}
          >
            CONCEPT
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "2rem",
              color: "#111",
              lineHeight: 1.5,
            }}
          >
            自然の中で、特別な時間を。
          </h2>
          <p style={{ lineHeight: 2.2, color: "#555", fontSize: "0.97rem" }}>
            Stella（ステラ）は、八ヶ岳の豊かな自然に抱かれた一棟貸切の宿泊施設です。
            <br />
            満天の星空の鑑賞、自然の中でのサウナ、仲間と囲むBBQ、大型スクリーンでの映画鑑賞、ハンモックに揺られながらの休憩——
            <br />
            日常を離れ、大切な人と過ごすかけがえのない時間をご提供します。
          </p>
        </div>
      </section>

      {/* ===== 2施設カード ===== */}
      <section
        style={{
          padding: "2rem 2rem 7rem",
          backgroundColor: "#f7f6f4",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#999",
              marginBottom: "3.5rem",
              fontWeight: 400,
            }}
          >
            OUR FACILITIES
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* 原村カード */}
            <Link href="/haramura" style={{ textDecoration: "none", color: "inherit" }} className="facility-card-link">
              <div className="facility-card">
                <div
                  style={{
                    position: "relative",
                    paddingTop: "62%",
                    overflow: "hidden",
                    backgroundColor: "#ddd",
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
                      transition: "transform 0.6s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "2rem 2rem 2.2rem" }}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.22em",
                      color: "#bbb",
                      marginBottom: "0.6rem",
                    }}
                  >
                    NAGANO / HARA VILLAGE
                  </p>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "#111",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Stella 八ヶ岳 原村
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#666",
                      lineHeight: 2,
                      marginBottom: "1.8rem",
                    }}
                  >
                    長野県諏訪郡原村。八ヶ岳の麓に佇む一棟貸切の宿。
                    <br />
                    バレルサウナ・BBQ・大型スクリーンを完備。
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#003144",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      borderBottom: "1px solid #003144",
                      paddingBottom: "2px",
                    }}
                  >
                    施設を見る →
                  </span>
                </div>
              </div>
            </Link>

            {/* 姫木平カード */}
            <Link href="/himeki" style={{ textDecoration: "none", color: "inherit" }} className="facility-card-link">
              <div className="facility-card">
                <div
                  style={{
                    position: "relative",
                    paddingTop: "62%",
                    overflow: "hidden",
                    backgroundColor: "#ddd",
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
                      transition: "transform 0.6s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "2rem 2rem 2.2rem" }}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.22em",
                      color: "#bbb",
                      marginBottom: "0.6rem",
                    }}
                  >
                    NAGANO / HIMEKI DAIRA
                  </p>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "#111",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Stella 八ヶ岳 姫木平
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#666",
                      lineHeight: 2,
                      marginBottom: "1.8rem",
                    }}
                  >
                    長野県小県郡長和町姫木平。最大19名収容。
                    <br />
                    バレルサウナ・BBQ・大型スクリーンを完備。グループ・合宿に最適。
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#003144",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      borderBottom: "1px solid #003144",
                      paddingBottom: "2px",
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

      {/* ===== 企業研修・合宿バナー ===== */}
      <section style={{ padding: "0 clamp(1.5rem, 5vw, 4rem) 4rem" }}>
      <section style={{ position: "relative", overflow: "hidden", height: 160, borderRadius: 6 }}>
        <img
          src="/wp-content/uploads/2025/01/BBQ-img-1-1024x482.jpg"
          alt="企業研修・合宿"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,20,35,0.68)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 clamp(2rem, 6vw, 6rem)",
            gap: "2rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem", textTransform: "uppercase" }}>
              CORPORATE RETREAT
            </p>
            <h2
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.5,
                letterSpacing: "0.05em",
                borderBottom: "none",
                margin: 0,
              }}
            >
              チームの力を引き出す、八ヶ岳の合宿へ。
            </h2>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.4rem", margin: "0.4rem 0 0" }}>
              大型スクリーン・高速Wi-Fi・完全貸切 ／ BBQ・サウナ・満天の星空
            </p>
          </div>
          <Link
            href="/retreat"
            style={{
              flexShrink: 0,
              display: "inline-block",
              padding: "0.7rem 1.8rem",
              backgroundColor: "#fff",
              color: "#003144",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              borderRadius: 3,
              whiteSpace: "nowrap",
            }}
          >
            詳しく見る →
          </Link>
        </div>
      </section>
      </section>

      {/* ===== フッター ===== */}
      <footer className="site-footer">
        <div className="container site-footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_block widget_text">
                <p>
                  <strong style={{ fontSize: 18 }}>Stella八ヶ岳</strong>
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
          <p>Copyright &copy; <a href="http://united-futures.com/" target="_blank" rel="noreferrer noopener" style={{ color: "inherit" }}>United Futures, Inc.</a> All Rights Reserved.</p>
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
