import { useState, useEffect, useRef } from "react";
import {
  Box, Stack, Typography, IconButton, TextField, Avatar, Fab,
} from "@mui/material";
import { Close, SmartToy, Person, Send } from "@mui/icons-material";
import { CHAT_SUGGESTIONS, CHAT_SYSTEM } from "../constants/Data";

export default function AIChatButton() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm the Aqua Aarisis AI assistant. Ask me anything about our finance services, pricing, or how we can help your business. 👋",
    },
  ]);
  const [input, setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY || "",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: CHAT_SYSTEM,
          messages: [...history, { role: "user", content: userText }],
        }),
      });

      const data  = await res.json();
      const reply = data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Sorry, something went wrong. Please email us at ckaarisis@gmail.com" },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <Box sx={{
          position: "fixed", bottom: 90, right: 20,
          width: { xs: "calc(100vw - 40px)", sm: 380 },
          height: 520, zIndex: 1400,
          display: "flex", flexDirection: "column",
          bgcolor: "#fff", borderRadius: 3, overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}>

          {/* Header */}
          <Box sx={{ bgcolor: "#1A3C8F", px: 2.5, py: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: "#F47B20", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <SmartToy sx={{ color: "#fff", fontSize: 20 }} />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1 }}>
                  Aqua AI Assistant
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>
                  Powered by Claude AI
                </Typography>
              </Box>
            </Stack>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "rgba(255,255,255,0.7)", p: 0.5 }}>
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 2, bgcolor: "#F7F9FC", display: "flex", flexDirection: "column", gap: 1.5 }}>
            {messages.map((m, i) => (
              <Stack
                key={i} direction="row" spacing={1} alignItems="flex-end"
                justifyContent={m.role === "user" ? "flex-end" : "flex-start"}
              >
                {m.role === "assistant" && (
                  <Avatar sx={{ width: 26, height: 26, bgcolor: "#1A3C8F", fontSize: "0.7rem" }}>
                    <SmartToy sx={{ fontSize: 14 }} />
                  </Avatar>
                )}
                <Box sx={{
                  maxWidth: "78%", px: 1.8, py: 1.2,
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  bgcolor: m.role === "user" ? "#1A3C8F" : "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  <Typography sx={{ fontSize: "0.8rem", color: m.role === "user" ? "#fff" : "#0D1B3E", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                    {m.text}
                  </Typography>
                </Box>
                {m.role === "user" && (
                  <Avatar sx={{ width: 26, height: 26, bgcolor: "#F47B20", fontSize: "0.7rem" }}>
                    <Person sx={{ fontSize: 14 }} />
                  </Avatar>
                )}
              </Stack>
            ))}

            {/* Typing indicator */}
            {loading && (
              <Stack direction="row" spacing={1} alignItems="flex-end">
                <Avatar sx={{ width: 26, height: 26, bgcolor: "#1A3C8F" }}>
                  <SmartToy sx={{ fontSize: 14 }} />
                </Avatar>
                <Box sx={{ px: 1.8, py: 1.2, borderRadius: "16px 16px 16px 4px", bgcolor: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    {[0, 1, 2].map((i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 6, height: 6, borderRadius: "50%", bgcolor: "#1A3C8F", opacity: 0.6,
                          animation: "bounce 1.2s ease-in-out infinite",
                          animationDelay: `${i * 0.2}s`,
                          "@keyframes bounce": {
                            "0%,100%": { transform: "translateY(0)" },
                            "50%":     { transform: "translateY(-5px)" },
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            )}

            {/* Quick suggestions (shown only on first message) */}
            {messages.length === 1 && (
              <Stack spacing={0.8} mt={0.5}>
                {CHAT_SUGGESTIONS.map((s) => (
                  <Box
                    key={s}
                    onClick={() => send(s)}
                    sx={{
                      px: 1.5, py: 1, bgcolor: "#fff",
                      border: "1px solid #E5E7EB", borderRadius: "10px",
                      cursor: "pointer", fontSize: "0.75rem", color: "#1A3C8F", fontWeight: 500,
                      "&:hover": { bgcolor: "#EEF2FF", borderColor: "#1A3C8F" },
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Stack>
            )}

            <div ref={endRef} />
          </Box>

          {/* Input bar */}
          <Box sx={{ p: 1.5, bgcolor: "#fff", borderTop: "1px solid #F0F0F0" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                fullWidth size="small"
                placeholder="Ask about our services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                disabled={loading}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, fontSize: "0.82rem" } }}
              />
              <IconButton
                onClick={() => send()}
                disabled={loading || !input.trim()}
                sx={{
                  bgcolor: "#1A3C8F", color: "#fff", width: 38, height: 38, borderRadius: 2,
                  "&:hover": { bgcolor: "#142E70" },
                  "&:disabled": { bgcolor: "#ccc" },
                }}
              >
                <Send sx={{ fontSize: 16 }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      )}

      {/* ── FAB ── */}
      <Fab
        onClick={() => setOpen((o) => !o)}
        size="medium"
        sx={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1400,
          background: "linear-gradient(135deg,#1A3C8F,#F47B20)",
          color: "#fff", boxShadow: "0 8px 25px rgba(26,60,143,0.4)",
          "&:hover": { transform: "scale(1.05)" }, transition: "transform 0.2s",
        }}
      >
        {open ? <Close /> : <SmartToy />}
      </Fab>
    </>
  );
}