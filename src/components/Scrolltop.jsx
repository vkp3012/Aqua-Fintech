import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!show) return null;

  return (
    <IconButton
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{
        position: "fixed", bottom: 24, left: 24, zIndex: 1300,
        bgcolor: "#1A3C8F", color: "#fff", width: 36, height: 36, borderRadius: 2,
        "&:hover": { bgcolor: "#142E70" },
      }}
    >
      <KeyboardArrowUp />
    </IconButton>
  );
}