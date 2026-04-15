import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { SERVICES, ICON_MAP } from "../constants/Data";

export default function Services() {
  return (
    <Box id="services" sx={{ py: { xs: 4, md: 6 }, bgcolor: "#F7F9FC" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Chip label="What We Offer" sx={{ bgcolor: "#EEF2FF", color: "#1A3C8F", mb: 2, fontWeight: 600, fontSize: "0.75rem" }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" }, color: "#0D1B3E", mb: 1.5 }}>
            Complete Finance Ecosystem
          </Typography>
          <Typography sx={{ color: "#5A6A85", maxWidth: 560, mx: "auto",fontSize: { xs: "0.85rem", md: "0.95rem" }, lineHeight: 1.8 }}>
            From bookkeeping to board-level strategy — we grow with you, ensuring your finances
            stay clear, compliant, and future-ready.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {SERVICES.map((s) => {
            const Icon = ICON_MAP[s.iconName];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={s.title} padding={2}>
                <Box sx={{
                  bgcolor: "#fff", borderRadius: 3, p: 2, height: "100%",
                  border: "1px solid rgba(0,0,0,0.06)", transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                    borderColor: s.color + "40",
                  },
                }}>
                  {/* Icon */}
                  <Box sx={{
                    width: 48, height: 48, borderRadius: "12px",
                    bgcolor: s.bg, color: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center", mb: 2,
                  }}>
                    <Icon sx={{ fontSize: 26 }} />
                  </Box>

                  <Typography variant="h6" sx={{ fontSize: "1rem", color: "#0D1B3E", mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#5A6A85", lineHeight: 1.7, mb: 2 }}>
                    {s.desc}
                  </Typography>

                  {/* Feature list (first 4) */}
                  <Stack spacing={1}>
                    {s.items.slice(0, 4).map((item) => (
                      <Stack key={item} direction="row" spacing={1} alignItems="center">
                        <CheckCircle sx={{ fontSize: 16, color: s.color }} />
                        <Typography sx={{ fontSize: "0.8rem", color: "#5A6A85" }}>{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}