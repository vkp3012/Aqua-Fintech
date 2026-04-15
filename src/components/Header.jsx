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
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1300,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,60,143,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2 }}>

          {/* ── Logo ── */}
          <Stack
            direction="row" alignItems="center" spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={() => onSectionClick("hero")}
          >
            <Box sx={{
              width: 38, height: 38, borderRadius: "10px",
              background: "linear-gradient(135deg,#1A3C8F,#F47B20)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <TrendingUp sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{
                fontFamily: '"Syne",sans-serif', fontWeight: 800,
                fontSize: "1.1rem", color: "#1A3C8F", lineHeight: 1,
              }}>
                Aqua <span style={{ color: "#F47B20" }}>Aarisis</span>
              </Typography>
              <Typography sx={{ fontSize: "0.55rem", color: "#5A6A85", letterSpacing: "0.15em", lineHeight: 1 }}>
                YOUR ALL FINANCE TEAM
              </Typography>
            </Box>
          </Stack>

          {/* ── Desktop nav ── */}
          {!isMobile && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {NAV_LINKS.map((l) => (
                <Button
                  key={l}
                  onClick={() => handleNav(l)}
                  sx={{
                    color: "#0D1B3E", fontWeight: 1000, fontSize: "1rem", px: 1.5,
                    "&:hover": { color: "#1A3C8F", background: "rgba(26,60,143,0.06)" },
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
                  background: "linear-gradient(135deg,#1A3C8F,#2D5BE3)",
                  color: "#fff", px: 3,
                  boxShadow: "0 4px 15px rgba(26,60,143,0.3)",
                }}
              >
                Get Started
              </Button>
            </Stack>
          )}

          {/* ── Mobile hamburger ── */}
          {isMobile && (
            <IconButton onClick={() => setDrawer(true)} sx={{ color: "#1A3C8F" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      {/* ── Mobile Drawer ── */}
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: 260, pt: 2, px: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 700, color: "#1A3C8F" }}>
              Menu
            </Typography>
            <IconButton onClick={() => setDrawer(false)}><Close /></IconButton>
          </Stack>
          <List>
            {NAV_LINKS.map((l) => (
              <ListItem
                key={l} button
                onClick={() => handleNav(l)}
                sx={{ borderRadius: 2, mb: 0.5, "&:hover": { background: "#EEF2FF" } }}
              >
                <ListItemText
                  primary={l}
                  primaryTypographyProps={{ fontWeight: 500, color: "#0D1B3E" }}
                />
              </ListItem>
            ))}
          </List>
          <Button
            fullWidth variant="contained"
            onClick={() => handleNav("contact")}
            sx={{ mt: 2, background: "linear-gradient(135deg,#1A3C8F,#2D5BE3)", color: "#fff" }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}