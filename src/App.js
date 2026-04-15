import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import theme from "./theme/Theme.jsx";

// Layout components
import Header       from "./components/Header";
import Footer       from "./components/Footer";
import AIChatButton from "./components/Chat.jsx";
import ScrollTop    from "./components/Scrolltap.jsx";

// Page sections
import Hero      from "./sections/Hero";
import Services  from "./sections/Service";
import Dashboard from "./sections/Dashboard";
import About     from "./sections/About";
import Pricing   from "./sections/Pricing";
import Contact   from "./sections/Contact";

/**
 * Smooth-scroll helper.
 * Maps section names to element IDs.
 */
function scrollTo(section) {
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* ── Layout ── */}
        <Header onSectionClick={scrollTo} />

        {/* ── Sections ── */}
        <main>
          <Hero      onSectionClick={scrollTo} />
          <Services  />
          <Dashboard />
          <About     />
          <Pricing   onSectionClick={scrollTo} />
          <Contact   />
        </main>

        <Footer onSectionClick={scrollTo} />

        {/* ── Floating UI ── */}
        <AIChatButton />
        <ScrollTop />
      </Box>
    </ThemeProvider>
  );
}