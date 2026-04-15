import { Box, Container, Grid, Typography, Button, Stack, Chip, Divider } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { PACKAGES } from "../constants/Data";

export default function Pricing({ onSectionClick }) {
  return (
    <Box id="pricing" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Box textAlign="center" mb={7}>
          <Chip label="Pricing Plans" sx={{ bgcolor: "#FFF4EC", color: "#F47B20", mb: 2, fontWeight: 600, fontSize: "0.75rem" }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "#0D1B3E", mb: 1.5 }}>
            Scalable & Flexible Plans
          </Typography>
          <Typography sx={{ color: "#5A6A85", maxWidth: 480, mx: "auto", fontSize: "0.95rem" }}>
            Choose services that fit your current stage — upgrade or adjust as your business grows.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3} justifyContent="center">
          {PACKAGES.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.name}>
              <Box sx={{
                borderRadius: 3, p: 3.5, height: "100%",
                border: pkg.highlight ? `2px solid ${pkg.color}` : "1px solid rgba(0,0,0,0.08)",
                bgcolor: pkg.highlight ? "#0D1B3E" : "#fff",
                position: "relative", overflow: "hidden",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: `0 16px 40px ${pkg.color}25` },
              }}>
                {pkg.highlight && (
                  <Chip
                    label="Most Popular" size="small"
                    sx={{ position: "absolute", top: 16, right: 16, bgcolor: pkg.color, color: "#fff", fontWeight: 600, fontSize: "0.65rem" }}
                  />
                )}

                <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 700, fontSize: "1.1rem", color: pkg.highlight ? "#fff" : "#0D1B3E", mb: 0.5 }}>
                  {pkg.name}
                </Typography>
                <Stack direction="row" alignItems="baseline" spacing={0.5} mb={2}>
                  <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 800, fontSize: "2rem", color: pkg.color }}>
                    {pkg.price}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#5A6A85" }}>
                    {pkg.period}
                  </Typography>
                </Stack>

                <Divider sx={{ borderColor: pkg.highlight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)", mb: 2 }} />

                <Stack spacing={1.2} mb={3}>
                  {pkg.features.map((f) => (
                    <Stack key={f} direction="row" spacing={1.2} alignItems="center">
                      <CheckCircle sx={{ fontSize: 16, color: pkg.color }} />
                      <Typography sx={{ fontSize: "0.82rem", color: pkg.highlight ? "rgba(255,255,255,0.8)" : "#5A6A85" }}>
                        {f}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  fullWidth
                  variant={pkg.highlight ? "contained" : "outlined"}
                  onClick={() => onSectionClick("contact")}
                  sx={{
                    bgcolor: pkg.highlight ? pkg.color : "transparent",
                    borderColor: pkg.color,
                    color: pkg.highlight ? "#fff" : pkg.color,
                    "&:hover": { bgcolor: pkg.color, color: "#fff" },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}