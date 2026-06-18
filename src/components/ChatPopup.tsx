"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "こんにちは！Stella 八ヶ岳のご案内アシスタントです。施設・予約・近隣情報などお気軽にご質問ください。",
};

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m.role === "user" || m.role === "assistant").map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message || "申し訳ありません、エラーが発生しました。" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "通信エラーが発生しました。しばらくしてお試しください。" }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* ポップアップ本体 */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: "min(380px, calc(100vw - 40px))",
            height: "min(520px, calc(100dvh - 120px))",
            backgroundColor: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
            overflow: "hidden",
            border: "1px solid #e8edf0",
          }}
        >
          {/* ヘッダー */}
          <div
            style={{
              backgroundColor: "#003144",
              color: "#fff",
              padding: "0.9rem 1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1.2rem" }}>✦</span>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em" }}>Stella 八ヶ岳 案内</div>
                <div style={{ fontSize: "0.68rem", opacity: 0.75, marginTop: 1 }}>AI アシスタント</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1.1rem", opacity: 0.8, padding: "0.2rem" }}
              aria-label="閉じる"
            >
              ✕
            </button>
          </div>

          {/* メッセージ一覧 */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              backgroundColor: "#f8f9fa",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "0.6rem 0.85rem",
                    borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    backgroundColor: m.role === "user" ? "#003144" : "#fff",
                    color: m.role === "user" ? "#fff" : "#222",
                    fontSize: "0.84rem",
                    lineHeight: 1.65,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "0.6rem 0.85rem",
                    borderRadius: "12px 12px 12px 2px",
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    fontSize: "0.84rem",
                    color: "#888",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <span style={{ animation: "chatdot 1s infinite" }}>●</span>
                  <span style={{ animation: "chatdot 1s infinite 0.2s" }}>●</span>
                  <span style={{ animation: "chatdot 1s infinite 0.4s" }}>●</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* 入力エリア */}
          <div
            style={{
              padding: "0.75rem",
              borderTop: "1px solid #e8edf0",
              display: "flex",
              gap: "0.5rem",
              backgroundColor: "#fff",
              flexShrink: 0,
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="メッセージを入力… (Enter で送信)"
              rows={1}
              style={{
                flex: 1,
                resize: "none",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "0.55rem 0.75rem",
                fontSize: "0.84rem",
                lineHeight: 1.5,
                outline: "none",
                fontFamily: "inherit",
                maxHeight: 100,
                overflowY: "auto",
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              style={{
                backgroundColor: "#003144",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.55rem 0.9rem",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                opacity: input.trim() && !loading ? 1 : 0.45,
                fontSize: "0.9rem",
                flexShrink: 0,
                transition: "opacity 0.15s",
              }}
              aria-label="送信"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* 起動ボタン */}
      {!open && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 20,
            zIndex: 10001,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
          }}
        >
          {/* 吹き出しラベル */}
          <div
            style={{
              backgroundColor: "#fff",
              color: "#003144",
              fontSize: "0.78rem",
              fontWeight: 700,
              padding: "0.4rem 0.8rem",
              borderRadius: 20,
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
              border: "1.5px solid #003144",
              animation: "chatbounce 2s ease-in-out infinite",
            }}
          >
            施設についてご質問はありますか？
          </div>

          {/* メインボタン */}
          <button
            onClick={() => setOpen(true)}
            style={{
              height: 52,
              padding: "0 1.4rem",
              borderRadius: 26,
              backgroundColor: "#003144",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "0.92rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              boxShadow: "0 4px 20px rgba(0,49,68,0.5)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              whiteSpace: "nowrap",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,49,68,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,49,68,0.5)";
            }}
            aria-label="チャットで質問する"
          >
            <span style={{ fontSize: "1.2rem" }}>💬</span>
            <span>AIに聞く</span>
          </button>
        </div>
      )}

      {open && (
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            bottom: 24,
            right: 20,
            height: 44,
            padding: "0 1.2rem",
            borderRadius: 22,
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="チャットを閉じる"
        >
          ✕ 閉じる
        </button>
      )}

      <style>{`
        @keyframes chatdot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        @keyframes chatbounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
      `}</style>
    </>
  );
}
