import { Box, Container, Grid, Typography, Button, Stack, Chip } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis,
} from "recharts";
import { STATS, revenueData } from "../constants/Data";

export default function Hero({ onSectionClick }) {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg,#0D1B3E 0%,#1A3C8F 50%,#0D1B3E 100%)",
        position: "relative",
        overflow: "hidden",
        pt: 8,
      }}
    >
      {/* Decorative rings */}
      {[300, 500, 700].map((s, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute", top: "50%", left: "60%",
            transform: "translate(-50%,-50%)",
            width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(255,255,255,${0.04 - i * 0.01})`,
            pointerEvents: "none",
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">

          {/* ── Left: Text ── */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Chip
                label="Your All Finance Team in One Place"
                sx={{
                  bgcolor: "rgba(244,123,32,0.15)", color: "#F47B20",
                  width: "fit-content", fontWeight: 600, fontSize: "0.75rem",
                  border: "1px solid rgba(244,123,32,0.3)",
                }}
              />
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, color: "#fff", lineHeight: 1.15 }}
              >
                Your Complete<br />
                <span style={{ color: "#F47B20" }}>Virtual Finance</span><br />
                Department
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 480 }}>
                Expert accounting, compliance, strategic advisory, and Virtual CFO services under one roof —
                designed to support and scale with growing businesses like yours.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained" size="large" endIcon={<ArrowForward />}
                  onClick={() => onSectionClick("contact")}
                  sx={{
                    bgcolor: "#F47B20", "&:hover": { bgcolor: "#D96A10" },
                    px: 4, py: 1.5, boxShadow: "0 8px 25px rgba(244,123,32,0.4)",
                  }}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outlined" size="large"
                  onClick={() => onSectionClick("services")}
                  sx={{
                    color: "#fff", borderColor: "rgba(255,255,255,0.3)", px: 4, py: 1.5,
                    "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.05)" },
                  }}
                >
                  Explore Services
                </Button>
              </Stack>

              {/* Stats */}
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap mt={2}>
                {STATS.map((s) => (
                  <Box key={s.label}>
                    <Typography sx={{ color: "#F47B20", fontFamily: '"Syne",sans-serif', fontWeight: 800, fontSize: "1.4rem" }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem" }}>
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* ── Right: Chart card ── */}
          <Grid item xs={12} md={6}>
            <Box sx={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 3, p: 3, backdropFilter: "blur(12px)",
            }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography sx={{ color: "#fff", fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: "0.9rem" }}>
                  Revenue vs Expenses
                </Typography>
                <Chip label="Live MIS" size="small" sx={{ bgcolor: "rgba(34,197,94,0.2)", color: "#22C55E", fontSize: "0.65rem" }} />
              </Stack>

              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="h-rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F47B20" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F47B20" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="h-exp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A3C8F" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#1A3C8F" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#0D1B3E", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8, color: "#fff", fontSize: "0.75rem",
                    }}
                  />
                  <Area type="monotone" dataKey="r" name="Revenue" stroke="#F47B20" strokeWidth={2} fill="url(#h-rev)" dot={false} />
                  <Area type="monotone" dataKey="e" name="Expenses" stroke="#4D7BF3" strokeWidth={2} fill="url(#h-exp)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>

              {/* KPI mini-cards */}
              <Stack direction="row" spacing={2} mt={2}>
                {[
                  { l: "Revenue",  v: "₹1.04Cr", c: "#F47B20" },
                  { l: "Expenses", v: "₹45L",    c: "#4D7BF3" },
                  { l: "Profit",   v: "₹59L",    c: "#22C55E" },
                ].map((k) => (
                  <Box key={k.l} sx={{
                    flex: 1, background: "rgba(255,255,255,0.05)",
                    borderRadius: 2, p: 1.2, textAlign: "center",
                  }}>
                    <Typography sx={{ color: k.c, fontWeight: 700, fontSize: "0.9rem" }}>{k.v}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.62rem" }}>{k.l}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}