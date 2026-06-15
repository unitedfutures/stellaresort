import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "企業研修・合宿 | Stella 八ヶ岳",
  description:
    "八ヶ岳の一棟貸切でオフサイト研修・合宿を。大型スクリーン・プロジェクター・高速Wi-Fi完備。会議の後はBBQ・サウナ・星空観賞でチームの絆を深める。最大19名収容。",
};

const features = [
  {
    icon: "📽",
    title: "大型スクリーン・プロジェクター",
    body: "プレゼンテーションやワークショップに最適な大型スクリーンとプロジェクターを完備。本格的な研修環境をご用意しています。",
  },
  {
    icon: "📶",
    title: "高速Wi-Fi完備",
    body: "安定した高速インターネット環境。オンライン会議やクラウドツールの利用もストレスなく行えます。",
  },
  {
    icon: "🏠",
    title: "完全貸切・プライベート空間",
    body: "他のゲストを気にせず、チームだけの空間で集中して議論できます。機密情報を扱う会議にも安心です。",
  },
  {
    icon: "🍖",
    title: "会議後はBBQ・焚き火",
    body: "仕事モードをオフにしてチームで囲むBBQと焚き火。リラックスした雰囲気がアイデアと絆を生みます。",
  },
  {
    icon: "🧖",
    title: "バレルサウナでリフレッシュ",
    body: "八ヶ岳の澄んだ空気の中でサウナ体験。心身をリセットして翌日の集中力を高めます。",
  },
  {
    icon: "✨",
    title: "満天の星空・自然体験",
    body: "都市では見られない満天の星空と八ヶ岳の自然。非日常の環境が、チームの新たな視点を引き出します。",
  },
];

const flow = [
  { time: "15:00", label: "チェックイン・施設確認", note: "荷物を置いて研修スタート" },
  { time: "15:30〜", label: "研修・ワークショップ", note: "大型スクリーン・Wi-Fiフル活用" },
  { time: "18:00〜", label: "BBQ・焚き火", note: "チームで囲む炎がアイデアを生む" },
  { time: "21:00〜", label: "サウナ・星空観賞", note: "八ヶ岳の夜空で頭をリセット" },
  { time: "翌朝", label: "朝食・朝の散策", note: "澄んだ空気で2日目をスタート" },
  { time: "〜10:00", label: "2日目の研修・チェックアウト", note: "テーマを深堀り、行動計画へ" },
];

export default function RetreatPage() {
  return (
    <SiteLayout title="企業研修・合宿" breadcrumb="企業研修・合宿" fullWidth>

      {/* ヒーロー */}
      <div
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#0a1a22",
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
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            padding: "3rem 2rem",
            maxWidth: 760,
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.2rem",
              textTransform: "uppercase",
            }}
          >
            CORPORATE RETREAT / OFF-SITE TRAINING
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "1.5rem",
              letterSpacing: "0.06em",
            }}
          >
            八ヶ岳の大自然で、<br />
            チームの力を引き出す合宿を。
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              lineHeight: 2,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2.5rem",
            }}
          >
            大型スクリーン・プロジェクター・高速Wi-Fi完備の一棟貸切施設で、<br />
            集中できる研修環境と、自然の中のリフレッシュを両立させます。
          </p>
          <a
            href="https://stellaresort.jp/contact/"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              backgroundColor: "#fff",
              color: "#003144",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              borderRadius: 3,
            }}
          >
            お問い合わせ・見積もりを依頼する
          </a>
        </div>
      </div>

      {/* リード文 */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ width: 36, height: 1, backgroundColor: "#003144", margin: "0 auto 1.3rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.32em", color: "#aaa", marginBottom: "0.5rem" }}>
            WHY YATSUGATAKE
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              color: "#111",
              marginBottom: "2rem",
              letterSpacing: "0.08em",
              lineHeight: 1.5,
            }}
          >
            なぜ、八ヶ岳で合宿なのか。
          </h2>
          <p style={{ lineHeight: 2.2, color: "#555", fontSize: "0.97rem" }}>
            心理学やメンタルヘルスの分野では、疲弊した心身を回復させる方法として<br />
            「4つのR」が知られています。<strong style={{ color: "#111" }}>Rest（休息）・Relaxation（弛緩）・Recreation（気晴らし）・Retreatment（非日常への撤退）</strong>——<br />
            その4つをすべて満たす条件が、自然の中の合宿にはあります。<br /><br />
            リトリートが効果を発揮するには、<strong style={{ color: "#111" }}>日常の環境から一定の距離を置くこと</strong>が前提です。<br />
            お住まい、いつもの事務所や会議室、普段のルーティーンを離れることで、思考の枠が変わり新しいアイデアや関係性が産まれやすくなります。<br />
            東京から約2時間。標高1,000メートルを超える八ヶ岳の澄んだ空気の中に身を置くことで、<br />
            脳のモードが切り替わり、普段は出てこない本音や創造的なアイデアが生まれます。<br /><br />
            Stellaは、研修に必要な設備と自然体験を一か所に凝縮した、<br />
            完全貸切のオフサイト拠点です。
          </p>
        </div>
      </section>

      {/* 6つの特徴 */}
      <section style={{ padding: "5rem 2rem 6rem", backgroundColor: "#f7f6f4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ width: 36, height: 1, backgroundColor: "#003144", margin: "0 auto 1.3rem" }} />
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.32em", color: "#aaa", marginBottom: "0.5rem" }}>
              FACILITIES & EXPERIENCE
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "0.08em",
              }}
            >
              選ばれる6つの理由
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: "#fff",
                  padding: "2rem 2rem 2.2rem",
                  borderRadius: 2,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: "0.8rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.9 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合宿の流れ */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ width: 36, height: 1, backgroundColor: "#003144", margin: "0 auto 1.3rem" }} />
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.32em", color: "#aaa", marginBottom: "0.5rem" }}>
              SAMPLE SCHEDULE
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "0.08em",
              }}
            >
              合宿2日間のイメージ
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {flow.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.5rem 0",
                  borderBottom: i < flow.length - 1 ? "1px solid #eee" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#003144",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    paddingTop: "0.15rem",
                  }}
                >
                  {item.time}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111", marginBottom: "0.3rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#888" }}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施設を選ぶ */}
      <section style={{ padding: "5rem 2rem 7rem", backgroundColor: "#f7f6f4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ width: 36, height: 1, backgroundColor: "#003144", margin: "0 auto 1.3rem" }} />
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.32em", color: "#aaa", marginBottom: "0.5rem" }}>
              OUR FACILITIES
            </p>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "0.08em",
                marginBottom: "0.8rem",
              }}
            >
              施設を選ぶ
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#777", lineHeight: 1.8 }}>
              人数・用途に合わせて2つの施設からお選びください。
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* 原村 */}
            <Link href="/haramura" style={{ textDecoration: "none", color: "inherit" }} className="facility-card-link">
              <div className="facility-card">
                <div style={{ position: "relative", paddingTop: "62%", overflow: "hidden", backgroundColor: "#ddd" }}>
                  <img
                    src="/wp-content/uploads/2024/12/P6054473-1024x768.jpg"
                    alt="Stella 八ヶ岳原村"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  />
                </div>
                <div style={{ padding: "2rem 2rem 2.2rem" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: "#bbb", marginBottom: "0.6rem" }}>
                    NAGANO / HARA VILLAGE
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.6rem", color: "#111" }}>
                    Stella 八ヶ岳 原村
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#003144", fontWeight: 600, marginBottom: "0.8rem" }}>
                    〜10名程度の少人数研修に
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                    長野県諏訪郡原村。八ヶ岳の麓に佇む一棟貸切の宿。
                    プロジェクター・大型スクリーン・BBQ設備完備。
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#003144",
                      fontWeight: 600,
                      borderBottom: "1px solid #003144",
                      paddingBottom: "2px",
                    }}
                  >
                    施設詳細を見る →
                  </span>
                </div>
              </div>
            </Link>

            {/* 姫木平 */}
            <Link href="/himeki" style={{ textDecoration: "none", color: "inherit" }} className="facility-card-link">
              <div className="facility-card">
                <div style={{ position: "relative", paddingTop: "62%", overflow: "hidden", backgroundColor: "#ddd" }}>
                  <img
                    src="/wp-content/uploads/2026/04/PXL_20260403_093735966-1-1024x768.jpg"
                    alt="Stella 八ヶ岳姫木平"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  />
                </div>
                <div style={{ padding: "2rem 2rem 2.2rem" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: "#bbb", marginBottom: "0.6rem" }}>
                    NAGANO / HIMEKI DAIRA
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.6rem", color: "#111" }}>
                    Stella 八ヶ岳 姫木平
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#003144", fontWeight: 600, marginBottom: "0.8rem" }}>
                    最大19名対応・大人数合宿に最適
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                    長野県小県郡長和町姫木平。大人数の研修・合宿・チームビルディングに。
                    バレルサウナ・BBQ・大型スクリーン完備。
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#003144",
                      fontWeight: 600,
                      borderBottom: "1px solid #003144",
                      paddingBottom: "2px",
                    }}
                  >
                    施設詳細を見る →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          backgroundColor: "#003144",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.32em", color: "rgba(255,255,255,0.5)", marginBottom: "1.2rem" }}>
            CONTACT
          </p>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 700,
              marginBottom: "1.2rem",
              letterSpacing: "0.08em",
              lineHeight: 1.5,
            }}
          >
            まずはお気軽にご相談ください。
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 2, color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem" }}>
            人数・日程・ご要望に合わせてご提案いたします。<br />
            お見積もりは無料です。
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://stellaresort.jp/contact/"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.5rem",
                backgroundColor: "#fff",
                color: "#003144",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                borderRadius: 3,
              }}
            >
              フォームからお問い合わせ
            </a>
            <a
              href="https://page.line.me/035nepvs?oat_content=url&openQrModal=true"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.5rem",
                backgroundColor: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                borderRadius: 3,
              }}
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
