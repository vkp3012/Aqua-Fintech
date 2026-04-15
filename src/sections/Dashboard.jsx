import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { revenueData, cashData, pieData, kpiData } from "../constants/Data";

const KPI_CARDS = [
  { label: "Total Revenue", value: "₹1.04 Cr", change: "+18%", color: "#1A3C8F" },
  { label: "Net Profit",    value: "₹59 L",    change: "+24%", color: "#22C55E" },
  { label: "Cash Flow",     value: "₹32 L",    change: "+11%", color: "#F47B20" },
  { label: "EBITDA",        value: "₹64 L",    change: "+20%", color: "#8B5CF6" },
];

export default function Dashboard() {
  return (
    <Box id="dashboard" sx={{ py: { xs: 9, md: 9 }, bgcolor: "#cdc3c3" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Box textAlign="center" mb={2}>
          <Chip label="MIS & Analytics" sx={{ bgcolor: "#FFF4EC", color: "#F47B20", mb: 2, fontWeight: 600, fontSize: "0.75rem" }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "#0D1B3E", mb: 1.5 }}>
            Data-Driven Decision Making
          </Typography>
          <Typography sx={{ color: "#5A6A85", maxWidth: 520, mx: "auto", fontSize: "0.95rem" }}>
            Real-time dashboards and KPI tracking that give you total financial clarity at a glance.
          </Typography>
        </Box>

        <Grid container spacing={10}>

          {/* KPI cards */}
          {KPI_CARDS.map((k) => (
            <Grid item xs={16} md={16} key={k.label}>
              <Box sx={{ bgcolor: "#F7F9FC", borderRadius: 5, p: 3, border: "1px solid rgba(0,0,0,0.05)" }}>
                <Typography sx={{ fontSize: "0.72rem", color: "#5A6A85", mb: 1 }}>{k.label}</Typography>
                <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 900, fontSize: "1.4rem", color: "#0D1B3E" }}>
                  {k.value}
                </Typography>
                <Chip label={k.change} size="small" sx={{ mt: 1, bgcolor: k.color + "15", color: k.color, fontSize: "0.62rem", height: 10, fontWeight: 900 }} />
              </Box>
            </Grid>
          ))}

          {/* Revenue area chart */}
          <Grid item xs={12} md={8}>
            <Box sx={{ bgcolor: "#F7F9FC", borderRadius: 2.5, p: 3, border: "1px solid rgba(0,0,0,0.05)" }}>
              <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: "0.9rem", color: "#0D1B3E", mb: 2 }}>
                Revenue vs Expenses Trend
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="d-rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A3C8F" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#1A3C8F" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="d-exp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F47B20" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#F47B20" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{ fontSize: 11, fill: "#5A6A85" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#5A6A85" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: "0.75rem", border: "1px solid #e5e7eb" }} />
                  <Area type="monotone" dataKey="r" name="Revenue (₹L)" stroke="#1A3C8F" strokeWidth={2.5} fill="url(#d-rev)" dot={false} />
                  <Area type="monotone" dataKey="e" name="Expenses (₹L)" stroke="#F47B20" strokeWidth={2.5} fill="url(#d-exp)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          {/* Pie chart */}
          <Grid item xs={12} md={8}>
            <Box sx={{ bgcolor: "#F7F9FC", borderRadius: 2.5, p: 2.5, border: "1px solid rgba(0,0,0,0.05)"}}>
              <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: "0.9rem", color: "#0D1B3E", mb: 2 }}>
                Service Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                    {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: "0.75rem" }} />
                </PieChart>
              </ResponsiveContainer>
              <Stack spacing={0.8} mt={1}>
                {pieData.map((p) => (
                  <Stack key={p.name} direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: p.color }} />
                      <Typography sx={{ fontSize: "0.72rem", color: "#5A6A85" }}>{p.name}</Typography>
                    </Stack>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: "#0D1B3E" }}>{p.value}%</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Cash flow bar chart */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "#F7F9FC", borderRadius: 2.5, p: 3, border: "1px solid rgba(0,0,0,0.05)" }}>
              <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: "0.9rem", color: "#0D1B3E", mb: 2 }}>
                Quarterly Cash Flow
              </Typography>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={cashData} barSize={28}>
                  <XAxis dataKey="m" tick={{ fontSize: 11, fill: "#5A6A85" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: "0.75rem" }} />
                  <Bar dataKey="v" name="Cash Flow (₹L)" fill="#1A3C8F" radius={[4, 4, 0, 0]}>
                    {cashData.map((_, i) => (
                      <Cell key={i} fill={i === cashData.length - 1 ? "#F47B20" : "#1A3C8F"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          {/* KPI line chart */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "#F7F9FC", borderRadius: 2.5, p: 3, border: "1px solid rgba(0,0,0,0.05)" }}>
              <Typography sx={{ fontFamily: '"Syne",sans-serif', fontWeight: 600, fontSize: "0.9rem", color: "#0D1B3E", mb: 2 }}>
                KPI Performance Index
              </Typography>
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={kpiData}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#5A6A85" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#5A6A85" }} axisLine={false} tickLine={false} domain={[50, 100]} />
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: "0.75rem" }} />
                  <Line type="monotone" dataKey="k" name="KPI Score" stroke="#22C55E" strokeWidth={2.5} dot={{ fill: "#22C55E", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}