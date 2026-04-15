import { useState } from "react";
import {
  Box, Container, Grid, Typography, Button, Stack,
  Chip, TextField, Divider,
} from "@mui/material";
import {
  Send, CheckCircle, Email, Phone, WhatsApp, LocationOn,
} from "@mui/icons-material";

const CONTACT_INFO = [
  { Icon: Email, label: "Email Us", val: "ckaarisis@gmail.com", sub: "We reply within 24 hours", color: "#4D7BF3" },
  { Icon: Phone, label: "Call Us", val: "+91 6376980718", sub: "Mon – Sat, 9 AM – 7 PM", color: "#22C55E" },
  { Icon: WhatsApp, label: "WhatsApp", val: "+91 6376980718", sub: "Quick chat anytime", color: "#25D366" },
  { Icon: LocationOn, label: "Office", val: "India", sub: "Virtual & On-site visits", color: "#F47B20" },
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    bgcolor: "#F7F9FC",
    "&:hover fieldset": { borderColor: "#1A3C8F" },
    "&.Mui-focused fieldset": { borderColor: "#1A3C8F", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1A3C8F" },
};

const subBox = {
  borderRadius: "20px",
  overflow: "hidden",
  height: "100%",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setForm({ name: "", email: "", phone: "", service: "", msg: "" });
    setErrors({});
  };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F0F4FF" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Box textAlign="center" mb={4}>
          <Chip label="Get In Touch" sx={{ bgcolor: "#EEF2FF", color: "#1A3C8F", mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
            Let's Grow Your Business Financially
          </Typography>
        </Box>

        {/* MAIN GRID */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >

          {/* LEFT: CONTACT INFO */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={4}
          >
            <Box
              sx={{
                ...subBox,
                background: "linear-gradient(150deg, #0D1B3E, #1A3C8F)",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}>
                Contact Information
              </Typography>

              <Stack spacing={3}>
                {CONTACT_INFO.map(({ Icon, label, val, sub, color }) => (
                  <Stack key={label} direction="row" spacing={2}>
                    <Box sx={{
                      width: 40, height: 40,
                      bgcolor: `${color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      color
                    }}>
                      <Icon />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#fff", fontWeight: 600 }}>{val}</Typography>
                      <Typography sx={{ color: "#ccc", fontSize: "0.8rem" }}>{sub}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT: FORM */}
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={8}
          >
            <Box
              sx={{
                ...subBox,
                bgcolor: "#fff",
                p: { xs: 3, md: 4 },
                border: "1px solid #eee",
              }}
            >
              {sent ? (
                <Box textAlign="center">
                  <CheckCircle sx={{ fontSize: 50, color: "green" }} />
                  <Typography>Message Sent!</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              ) : (
                <Stack spacing={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" value={form.name} onChange={handleChange("name")} sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" value={form.email} onChange={handleChange("email")} sx={fieldSx} />
                    </Grid>
                  </Grid>

                  <TextField fullWidth label="Message" multiline rows={4} value={form.msg} onChange={handleChange("msg")} sx={fieldSx} />

                  <Button
                    variant="contained"
                    endIcon={<Send />}
                    onClick={handleSend}
                  >
                    Send Message
                  </Button>
                </Stack>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}