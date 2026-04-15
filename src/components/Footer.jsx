import {
  Box, Container, Grid, Typography, Button, Stack,
  Chip, Divider, IconButton,
} from "@mui/material";
import { TrendingUp, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { FOOTER_NAV } from "../constants/Data";

export default function Footer({ onSectionClick }) {
  return (
    <Box component="footer" sx={{ bgcolor: "#0D1B3E", color: "#fff" }}>

      {/* ── CTA Banner ── */}
      <Box sx={{ background: "linear-gradient(135deg,#1A3C8F,#F47B20)", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, color: "#fff", mb: 1.5 }}>
              Ready to Transform Your Finance Operations?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 3, fontSize: "0.95rem" }}>
              Join 500+ businesses that trust Aqua Aarisis as their complete finance team.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                variant="contained" size="large"
                onClick={() => onSectionClick("contact")}
                sx={{ bgcolor: "#fff", color: "#1A3C8F", fontWeight: 700, px: 4, "&:hover": { bgcolor: "#f0f0f0" } }}
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outlined" size="large" href="tel:+916376980718"
                sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)", px: 4, "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.1)" } }}
              >
                Call +91 6376980718
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── Main footer body ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4}>

          {/* Brand column */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Stack
                direction="row" alignItems="center" spacing={1.2}
                sx={{ cursor: "pointer" }}
                onClick={() => onSectionClick("hero")}
              >
                <Box sx={{
                  width: 36, height: 36, borderRadius: "9px",
                  background: "linear-gradient(135deg,#1A3C8F,#F47B20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <TrendingUp sx={{ color: "#fff", fontSize: 18 }} />
                </Box>
                <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff" }}>
                  Aqua <span style={{ color: "#F47B20" }}>Aarisis</span>
                </Typography>
              </Stack>

              <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Your complete virtual finance department — expert accounting, compliance,
                strategic advisory, and Virtual CFO services under one roof.
              </Typography>

              {/* Social icons */}
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <LinkedIn sx={{ fontSize: 16 }} />, label: "LinkedIn" },
                  { icon: <Twitter  sx={{ fontSize: 16 }} />, label: "Twitter" },
                  { icon: <WhatsApp sx={{ fontSize: 16 }} />, label: "WhatsApp" },
                ].map(({ icon, label }) => (
                  <IconButton
                    key={label} size="small" aria-label={label}
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px", width: 32, height: 32,
                      "&:hover": { color: "#F47B20", borderColor: "rgba(244,123,32,0.4)", background: "rgba(244,123,32,0.08)" },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>

              {/* Status dot */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{
                  width: 7, height: 7, borderRadius: "50%", bgcolor: "#22C55E",
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%,100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" },
                    "50%":     { boxShadow: "0 0 0 5px rgba(34,197,94,0)" },
                  },
                }} />
                <Typography sx={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.45)" }}>
                  All systems operational
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV).map(([section, links]) => (
            <Grid item xs={6} sm={3} md={2.25} key={section}>
              <Typography sx={{
                fontSize: "0.62rem", letterSpacing: "0.12em",
                color: "#F47B20", mb: 2,
                fontFamily: '"Syne",sans-serif', fontWeight: 700,
              }}>
                {section.toUpperCase()}
              </Typography>
              <Stack spacing={1}>
                {links.map((l) => (
                  <Typography
                    key={l} component="a" href="#"
                    sx={{
                      fontSize: "0.8rem", color: "rgba(255,255,255,0.5)",
                      textDecoration: "none", transition: "color 0.2s",
                      "&:hover": { color: "#F47B20" },
                    }}
                  >
                    {l}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mt: 6, mb: 3 }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
        >
          <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>
            © 2025 Aqua Aarisis. All rights reserved. Finance & Business Consulting.
          </Typography>
          <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
            {["ICAI Member", "GST Practitioner", "ROC Registered"].map((b) => (
              <Chip key={b} label={b} size="small" sx={{
                fontSize: "0.56rem", height: 20,
                bgcolor: "rgba(244,123,32,0.08)", color: "#F47B20",
                border: "1px solid rgba(244,123,32,0.2)", letterSpacing: "0.04em",
              }} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}