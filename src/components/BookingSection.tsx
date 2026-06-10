interface BookingLink {
  label: string;
  sublabel?: string;
  href: string;
  primary?: boolean;
  color?: string; // background color
}

interface BookingSectionProps {
  links: BookingLink[];
}

export default function BookingSection({ links }: BookingSectionProps) {
  const primary = links.filter((l) => l.primary);
  const secondary = links.filter((l) => !l.primary);

  return (
    <div
      id="booking"
      style={{
        backgroundColor: "#f5f4f2",
        padding: "5rem 2rem",
        marginTop: "3rem",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* セクションタイトル */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: 36, height: 1, backgroundColor: "#003144", margin: "0 auto 1.3rem" }} />
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.32em",
              color: "#aaa",
              marginBottom: "0.5rem",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            RESERVATION
          </p>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2rem)",
            fontWeight: 700,
            borderBottom: "none",
            textAlign: "center",
            color: "#111",
            marginBottom: "0.8rem",
            letterSpacing: "0.1em",
          }}
        >
          ご予約
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#777",
            marginBottom: "3rem",
            lineHeight: 1.8,
          }}
        >
          公式サイトからの直接予約が最もお得です。
        </p>

        {/* メインCTA */}
        {primary.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              display: "block",
              backgroundColor: "#003144",
              color: "#fff",
              textAlign: "center",
              padding: "1.2rem 2rem",
              borderRadius: 4,
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "1rem",
              transition: "background-color 0.2s",
            }}
          >
            {link.label}
            {link.sublabel && (
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  opacity: 0.75,
                  marginTop: "0.3rem",
                  letterSpacing: "0.05em",
                }}
              >
                {link.sublabel}
              </span>
            )}
          </a>
        ))}

        {/* サブボタングリッド */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.75rem",
            marginTop: "0.5rem",
          }}
        >
          {secondary.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
              style={{
                display: "block",
                backgroundColor: link.color ?? "#fff",
                color: link.color ? "#fff" : "#333",
                textAlign: "center",
                padding: "1rem 1.5rem",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                border: link.color ? "none" : "1px solid #ddd",
                transition: "opacity 0.2s",
              }}
            >
              {link.label}
              {link.sublabel && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.72rem",
                    fontWeight: 400,
                    marginTop: "0.2rem",
                    opacity: 0.75,
                  }}
                >
                  {link.sublabel}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
