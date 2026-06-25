import { useState, useEffect } from "react";
import {
  Box, Container, Stack, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemText, useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Menu as MenuIcon, Close, TrendingUp } from "@mui/icons-material";
import { NAV_LINKS } from "../constants/Data";

export default function Header({ onSectionClick }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [drawer, setDrawer]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (section) => {
    onSectionClick(section.toLowerCase());
    setDrawer(false);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1400,
        background: scrolled ? "rgba(59, 54, 225, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,60,143,0.10)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(26,60,143,0.07)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: "14px" }}>

          {/* ── Logo ── */}
          <Stack
            direction="row" alignItems="center" spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => onSectionClick("hero")}
          >
            <Box sx={{
              width: 40, height: 40, borderRadius: "10px",
              background: "linear-gradient(135deg,#1A3C8F,#F47B20)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <TrendingUp sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{
                fontFamily: '"Syne",sans-serif', fontWeight: 800,
                fontSize: "1.1rem", color: "#1A3C8F", lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}>
                Aqua <span style={{ color: "#F47B20" }}>Aarisis</span>
              </Typography>
              <Typography sx={{
                fontFamily: '"Inter",sans-serif',
                fontSize: "0.52rem", color: "#8497B8",
                letterSpacing: "0.18em", lineHeight: 1, textTransform: "uppercase",
                mt: "2px",
              }}>
                Your All Finance Team
              </Typography>
            </Box>
          </Stack>

          {/* ── Desktop nav ── */}
          {!isMobile && (
            <Stack direction="row" spacing={0.25} alignItems="center">
              {NAV_LINKS.map((l) => (
                <Button
                  key={l}
                  onClick={() => handleNav(l)}
                  sx={{
                    fontFamily: '"Inter",sans-serif',
                    color: "#d8dff1", fontWeight: 800,
                    fontSize: "1rem", px: "14px", py: "8px",
                    borderRadius: "8px", letterSpacing: "0.01em",
                    "&:hover": { color: "#1A3C8F", background: "rgba(26,60,143,0.07)" },
                  }}
                >
                  {l}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => onSectionClick("contact")}
                sx={{
                  ml: 1,
                  fontFamily: '"Inter",sans-serif', fontWeight: 600,
                  fontSize: "0.875rem", letterSpacing: "0.01em",
                  background: "linear-gradient(135deg,#1A3C8F,#2D5BE3)",
                  color: "#fff", px: "22px", py: "9px",
                  borderRadius: "9px",
                  boxShadow: "0 3px 12px rgba(26,60,143,0.28)",
                  "&:hover": { opacity: 0.92, transform: "translateY(-1px)", boxShadow: "0 5px 16px rgba(26,60,143,0.32)" },
                  transition: "all 0.2s",
                }}
              >
                Get Started
              </Button>
            </Stack>
          )}

          {/* ── Mobile hamburger ── */}
          {isMobile && (
            <IconButton onClick={() => setDrawer(true)} sx={{ color: "#1A3C8F", borderRadius: "8px" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      {/* ── Mobile Drawer ── */}
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}
        PaperProps={{ sx: { width: 280, p: 0 } }}
      >
        <Box sx={{ pt: 3, px: "20px", pb: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3.5}>
            <Typography sx={{
              fontFamily: '"Syne",sans-serif', fontWeight: 700,
              fontSize: "1rem", color: "#1A3C8F",
            }}>
              Menu
            </Typography>
            <IconButton onClick={() => setDrawer(false)} sx={{ color: "#5A6A85", borderRadius: "7px", "&:hover": { background: "#EEF2FF", color: "#1A3C8F" } }}>
              <Close fontSize="small" />
            </IconButton>
          </Stack>

          <List sx={{ flex: 1, p: 0 }}>
            {NAV_LINKS.map((l) => (
              <ListItem
                key={l} button
                onClick={() => handleNav(l)}
                sx={{
                  borderRadius: "9px", mb: "4px", px: "14px", py: "12px",
                  "&:hover": { background: "#EEF2FF" },
                }}
              >
                <ListItemText
                  primary={l}
                  primaryTypographyProps={{
                    fontFamily: '"Inter",sans-serif',
                    fontWeight: 500, fontSize: "0.9rem", color: "#0D1B3E",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth variant="contained"
            onClick={() => handleNav("contact")}
            sx={{
              mt: 2,
              fontFamily: '"Inter",sans-serif', fontWeight: 600, fontSize: "0.9rem",
              background: "linear-gradient(135deg,#1A3C8F,#2D5BE3)",
              color: "#fff", py: "13px", borderRadius: "10px",
              boxShadow: "0 3px 14px rgba(26,60,143,0.25)",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}