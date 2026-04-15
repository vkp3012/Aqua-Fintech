import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { PILLARS } from "../constants/Data";

const PAIN_POINTS = [
  "No CFO / VCFO gap filled strategically",
  "Compliance handled with zero missed deadlines",
  "Real-time insights replacing reactive decisions",
  "Strategic forecasting aligned with business goals",
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F7F9FC" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* ── Left: Text ── */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              <Chip
                label="About Us"
                sx={{ bgcolor: "#EEF2FF", color: "#1A3C8F", width: "fit-content", fontWeight: 600, fontSize: "0.75rem" }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, color: "#0D1B3E" }}>
                The Growing Finance Challenge — Solved
              </Typography>
              <Typography sx={{ color: "#5A6A85", lineHeight: 1.8, fontSize: "0.92rem" }}>
                Many business owners spend a large portion of their time on day-to-day financial tasks,
                leaving little time for marketing, operations, and sales. The increasing complexity of
                modern finance demands specialized expertise that most growing companies cannot afford.
              </Typography>
              <Typography sx={{ color: "#5A6A85", lineHeight: 1.8, fontSize: "0.92rem" }}>
                Aqua Aarisis acts as your end-to-end finance partner — combining expert accounting,
                compliance, strategic advisory, and Virtual CFO services under one roof.
              </Typography>
              <Stack spacing={1}>
                {PAIN_POINTS.map((p) => (
                  <Stack key={p} direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircle sx={{ fontSize: 18, color: "#22C55E", mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#5A6A85" }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* ── Right: Pillar cards ── */}
          <Grid item xs={12} md={1}>
            <Grid container spacing={5}>
              {PILLARS.map((p) => (
                <Grid item xs={6} key={p.title}>
                  <Box sx={{
                    bgcolor: "#fff", borderRadius: 3, p: 1,

                    border: "1px solid rgba(0,0,0,0.06)", height: "100%",
                    transition: "all 0.3s",
                    "&:hover": { boxShadow: "0 8px 30px rgba(26,60,143,0.1)", borderColor: "#1A3C8F20" },
                  }}>
                    <Typography sx={{ fontSize: "2rem", mb: 5 }}>{p.icon}</Typography>
                    <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 700, color: "#1A3C8F", mb: 0.5 }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#5A6A85", lineHeight: 1.6 }}>
                      {p.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}