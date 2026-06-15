"use client";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh-CN", label: "中文(简体)", flag: "🇨🇳" },
  { code: "zh-TW", label: "中文(繁體)", flag: "🇹🇼" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

function getCurrentLang(): string {
  if (typeof document === "undefined") return "ja";
  const match = document.cookie.match(/googtrans=\/ja\/([^;]+)/);
  return match ? match[1] : "ja";
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("ja");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentCode(getCurrentLang());
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = (lang: (typeof languages)[0]) => {
    setOpen(false);
    if (lang.code === currentCode) return;

    if (lang.code === "ja") {
      // 日本語: cookieを削除してリロード
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + location.hostname;
      window.location.reload();
    } else {
      // 他言語: googtrans cookieをセットしてリロード
      document.cookie = `googtrans=/ja/${lang.code}; path=/`;
      document.cookie = `googtrans=/ja/${lang.code}; path=/; domain=.` + location.hostname;
      window.location.reload();
    }
  };

  const current = languages.find((l) => l.code === currentCode) ?? languages[0];

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          background: "none",
          border: "1px solid rgba(0,49,68,0.25)",
          borderRadius: 4,
          padding: "0.3rem 0.7rem",
          cursor: "pointer",
          fontSize: "0.78rem",
          color: "#003144",
          fontWeight: 600,
          letterSpacing: "0.03em",
          whiteSpace: "nowrap",
        }}
        aria-label="言語を切り替える"
      >
        <span style={{ fontSize: "1rem" }}>{current.flag}</span>
        <span>{current.label}</span>
        <span style={{ fontSize: "0.65rem", opacity: 0.6 }}>▾</span>
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: 4,
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            listStyle: "none",
            margin: 0,
            padding: "0.3rem 0",
            zIndex: 9999,
            minWidth: 160,
          }}
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => switchLanguage(lang)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.45rem 1rem",
                  background: lang.code === currentCode ? "#f0f4f6" : "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  color: "#111",
                  textAlign: "left",
                  fontWeight: lang.code === currentCode ? 700 : 400,
                }}
              >
                <span style={{ fontSize: "1rem" }}>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
