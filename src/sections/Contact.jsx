import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box, Container, Grid, Typography, Button, Stack, Chip,
  TextField, CircularProgress, Alert,
} from "@mui/material";
import { Send, CheckCircle, Email, LocationOn } from "@mui/icons-material";

// ── EmailJS config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const CONTACT_INFO = [
  {
    Icon: Email,
    label: "Primary email",
    val: "ckaarisis@gmail.com",
    sub: "We reply within 24 hours",
    color: "#4D7BF3",
    href: "mailto:ckaarisis@gmail.com",
  },
  {
    Icon: Email,
    label: "Support email",
    val: "anjali@aquaarisis.com",
    sub: "For general enquiries",
    color: "#22C55E",
    href: "mailto:anjali@aquaarisis.com",
  },
  {
    Icon: LocationOn,
    label: "Office",
    val: "India",
    sub: "Virtual & on-site visits",
    color: "#F47B20",
    href: null,
  },
];

const EMPTY = { name: "", email: "", phone: "", msg: "" };

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    bgcolor: "#F7F9FC",
    "&:hover fieldset": { borderColor: "#1A3C8F" },
    "&.Mui-focused fieldset": { borderColor: "#1A3C8F", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1A3C8F" },
};

const subBox = { borderRadius: "20px", overflow: "hidden", height: "100%" };

export default function Contact() {
  const [form, setForm]     = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState("");

  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));

  const handleSend = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.msg.trim()) {
      setErrMsg("Please fill in Name, Email, and Message.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrMsg("");
   try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          name:       form.name,
          from_email: form.email,
          phone:      form.phone,
          message:    form.msg,
          to_email:   "anjali@aquaarisis.com",
          time:       new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");

    } catch (err) {
      setErrMsg("Failed to send. Please email us directly at anjali@aquaarisis.com");
      setStatus("error");
    }
  };

  const handleReset = () => { setStatus("idle"); setErrMsg(""); setForm(EMPTY); };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F0F4FF" }}>
      <Container maxWidth="lg">

        <Box textAlign="center" mb={4}>
          <Chip label="Get In Touch" sx={{ bgcolor: "#EEF2FF", color: "#1A3C8F", mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, fontWeight: 700 }}>
            Let's Grow Your Business Financially
          </Typography>
          <Typography sx={{ color: "#64748B", mt: 1 }}>
            Reach us at either email or fill the form — we'll respond within 24 hours.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">

          {/* LEFT */}
          <Grid item xs={12} md={5} lg={4}>
            <Box sx={{
              ...subBox,
              background: "linear-gradient(150deg, #0D1B3E, #1A3C8F)",
              p: { xs: 3, md: 4 },
              display: "flex", flexDirection: "column", gap: 3,
            }}>
              <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}>
                Contact Information
              </Typography>
              <Stack spacing={3}>
                {CONTACT_INFO.map(({ Icon, label, val, sub, color, href }) => (
                  <Stack key={label} direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{
                      width: 44, height: 44, flexShrink: 0,
                      bgcolor: `${color}22`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: 2, color,
                    }}>
                      <Icon fontSize="small" />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#CBD5E1", fontSize: "0.75rem", mb: 0.3 }}>{label}</Typography>
                      {href ? (
                        <Typography component="a" href={href} sx={{
                          color: "#fff", fontWeight: 600, textDecoration: "none",
                          "&:hover": { textDecoration: "underline", color },
                        }}>{val}</Typography>
                      ) : (
                        <Typography sx={{ color: "#fff", fontWeight: 600 }}>{val}</Typography>
                      )}
                      <Typography sx={{ color: "#94A3B8", fontSize: "0.78rem", mt: 0.2 }}>{sub}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{
              ...subBox, bgcolor: "#fff", p: { xs: 3, md: 4 },
              border: "1px solid #eee", boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}>
              {status === "success" ? (
                <Box textAlign="center" sx={{ py: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <CheckCircle sx={{ fontSize: 64, color: "#22C55E" }} />
                  <Typography variant="h5" fontWeight={700} color="#1A3C8F">Message Sent!</Typography>
                  <Typography color="text.secondary" maxWidth={360}>
                    Delivered to <strong>anjali@aquaarisis.com</strong>. We'll respond within 24 hours.
                  </Typography>
                  <Button variant="outlined" onClick={handleReset}
                    sx={{ mt: 1, borderColor: "#1A3C8F", color: "#1A3C8F", borderRadius: "10px" }}>
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                <Stack spacing={2.5}>
                  <Typography variant="h6" fontWeight={700} color="#1A3C8F">Send us a message</Typography>
                  {status === "error" && (
                    <Alert severity="error" onClose={() => setStatus("idle")}>{errMsg}</Alert>
                  )}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Full Name" placeholder="Rahul Sharma"
                        value={form.name} onChange={set("name")} sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Email Address" type="email"
                        placeholder="rahul@example.com" value={form.email} onChange={set("email")} sx={fieldSx} />
                    </Grid>
                  </Grid>
                  <TextField fullWidth label="Contact Number" type="tel"
                    placeholder="+91 0123456789" value={form.phone} onChange={set("phone")}
                    helperText="Optional — for quicker follow-up" sx={fieldSx} />
                  <TextField fullWidth required label="Message" multiline rows={4}
                    placeholder="Tell us about your business and how we can help..."
                    value={form.msg} onChange={set("msg")} sx={fieldSx} />
                  <Button variant="contained" size="large"
                    endIcon={status === "sending" ? <CircularProgress size={18} color="inherit" /> : <Send />}
                    onClick={handleSend} disabled={status === "sending"}
                    sx={{
                      bgcolor: "#1A3C8F", borderRadius: "10px", py: 1.4, fontWeight: 600,
                      "&:hover": { bgcolor: "#142E6E" },
                      "&:disabled": { bgcolor: "#93A8D4", color: "#fff" },
                    }}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  <Typography variant="caption" color="text.secondary" textAlign="center">
                    By submitting, you agree to our Privacy Policy.
                  </Typography>
                </Stack>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}