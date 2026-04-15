import {
  AccountBalance, TrendingUp, BarChart, Assessment, Shield, Business,
} from "@mui/icons-material";

// ── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = ["Services", "About", "Dashboard", "Pricing", "Contact"];

// ── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "500+",   label: "Businesses Served" },
  { value: "₹50Cr+", label: "Tax Savings Delivered" },
  { value: "99.8%",  label: "Compliance Rate" },
  { value: "15+",    label: "Years of Expertise" },
];

// ── Chart data ──────────────────────────────────────────────────────────────
export const revenueData = [
  { m: "Jan", r: 40, e: 28 }, { m: "Feb", r: 52, e: 31 },
  { m: "Mar", r: 48, e: 27 }, { m: "Apr", r: 65, e: 35 },
  { m: "May", r: 72, e: 38 }, { m: "Jun", r: 85, e: 40 },
  { m: "Jul", r: 91, e: 42 }, { m: "Aug", r: 104, e: 45 },
];

export const cashData = [
  { m: "Q1", v: 120 }, { m: "Q2", v: 180 }, { m: "Q3", v: 145 },
  { m: "Q4", v: 220 }, { m: "Q5", v: 195 }, { m: "Q6", v: 260 },
];

export const pieData = [
  { name: "Bookkeeping", value: 30, color: "#1A3C8F" },
  { name: "Compliance",  value: 25, color: "#F47B20" },
  { name: "Virtual CFO", value: 25, color: "#22C55E" },
  { name: "MIS Reports", value: 20, color: "#8B5CF6" },
];

export const kpiData = [
  { name: "Jan", k: 65 }, { name: "Feb", k: 72 }, { name: "Mar", k: 80 },
  { name: "Apr", k: 75 }, { name: "May", k: 88 }, { name: "Jun", k: 95 },
];

// ── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    iconName: "AccountBalance",
    title: "Virtual Accounting & Compliance",
    desc: "End-to-end bookkeeping, GST, TDS, ROC, Payroll — all covered with real-time accuracy.",
    color: "#1A3C8F", bg: "#EEF2FF",
    items: ["Bookkeeping & Accounting", "GST Compliance", "TDS Management", "ROC Filings", "Payroll Processing", "Income Tax Filing"],
  },
  {
    iconName: "TrendingUp",
    title: "Virtual CFO & CEO",
    desc: "Strategic financial leadership powered by AI insights — without the full-time executive cost.",
    color: "#F47B20", bg: "#FFF4EC",
    items: ["MIS Reporting", "Cash Flow Forecasting", "Profit Growth Plan", "Business Process Optimization", "AI-Powered Forecasting", "Investor Relations"],
  },
  {
    iconName: "BarChart",
    title: "MIS Reporting & Insights",
    desc: "Transform raw data into strategic intelligence. Monthly dashboards, budgeting, and forecasting.",
    color: "#22C55E", bg: "#ECFDF5",
    items: ["Monthly MIS Reports", "Financial Forecasting", "Budget vs Actuals", "Scenario Planning", "Business Roadmap", "Department P&L"],
  },
  {
    iconName: "Assessment",
    title: "Strategic Financial Planning",
    desc: "Plan smarter. Analyze deeper. Grow faster — with business plans, SOPs, and financial models.",
    color: "#8B5CF6", bg: "#F5F3FF",
    items: ["Business Plan Development", "Financial Modeling", "Cost-Benefit Analysis", "Pricing Strategy", "Break-even Analysis", "Growth Strategy Planning"],
  },
  {
    iconName: "Shield",
    title: "Internal Audit & Cost Control",
    desc: "Systematic audits, fraud detection, and cost reduction to protect and optimize your business.",
    color: "#EF4444", bg: "#FEF2F2",
    items: ["Internal Audit", "Compliance Management", "Risk Assessment", "Fraud Detection", "Cost Analysis & Reduction", "Vendor Management"],
  },
  {
    iconName: "Business",
    title: "Financial Modeling & Investor Readiness",
    desc: "Investor-grade pitch decks, valuations, and due diligence preparation for fundraising.",
    color: "#0891B2", bg: "#ECFEFF",
    items: ["Financial Projections", "Valuation Analysis", "Investor Pitch Decks", "Funding Strategy", "Due Diligence", "Cap Table Modeling"],
  },
];

// Icon resolver
export const ICON_MAP = { AccountBalance, TrendingUp, BarChart, Assessment, Shield, Business };

// ── Pricing packages ─────────────────────────────────────────────────────────
export const PACKAGES = [
  {
    name: "Basic", price: "₹4,999", period: "/month",
    color: "#1A3C8F", highlight: false,
    features: ["Comprehensive Bookkeeping", "Bank Reconciliation", "GST & TDS Filing", "Monthly P&L & Balance Sheet", "Compliance Calendar", "Email Support"],
  },
  {
    name: "Advanced", price: "₹12,999", period: "/month",
    color: "#F47B20", highlight: true,
    features: ["Everything in Basic", "Automated Reconciliation", "ROC & Payroll Compliance", "Monthly MIS Reports", "Finance Review Meeting", "Priority Support"],
  },
  {
    name: "Premium", price: "₹24,999", period: "/month",
    color: "#8B5CF6", highlight: false,
    features: ["Everything in Advanced", "Virtual CFO Services", "Real-time Dashboards", "Compliance Audits", "Strategic Planning", "Dedicated CFO Manager"],
  },
];

// ── About pillars ────────────────────────────────────────────────────────────
export const PILLARS = [
  { icon: "🎯", title: "Core",       desc: "Foundational mission and values driving every engagement." },
  { icon: "📊", title: "Strategy",   desc: "Long-term financial plans and growth goals aligned with your vision." },
  { icon: "⚙️", title: "Operations", desc: "Streamlined processes, teams, and workflows for efficiency." },
  { icon: "🤝", title: "Outreach",   desc: "Partners, community, and growth opportunities." },
];

// ── Chat ─────────────────────────────────────────────────────────────────────
export const CHAT_SUGGESTIONS = [
  "What services does Aqua Aarisis offer?",
  "What's included in the Virtual CFO plan?",
  "How does your pricing work?",
  "Can you help with GST compliance?",
];

export const CHAT_SYSTEM = `You are a knowledgeable, friendly AI assistant for Aqua Aarisis — a finance and business consulting company based in India.
You help potential and existing clients understand the company's services, pricing, and value proposition.

Company Overview:
- Full name: Aqua Aarisis Finance & Business Consulting
- Tagline: "Your All Finance Team in One Place"
- Contact: ckaarisis@gmail.com | +91 6376980718

Core Services:
1. Virtual Accounting & Compliance: Bookkeeping, GST, TDS, ROC, Payroll, Income Tax Filing
2. Virtual CFO & CEO Services: MIS reporting, cash flow management, AI-powered forecasting, organization structure optimization
3. MIS Reporting & Insights: Monthly dashboards, budgeting, 12-month rolling forecasts, scenario planning
4. Strategic Financial Planning: Business plans, SOPs, financial modeling, cost-benefit analysis, pricing strategy
5. Internal Audit & Cost Control: Internal audit, compliance management, fraud detection, vendor management
6. Financial Modeling & Investor Readiness: Pitch decks, valuation analysis, funding strategy, due diligence

Pricing:
- Basic: ₹4,999/month — bookkeeping, GST/TDS filing, P&L, balance sheet
- Advanced: ₹12,999/month — everything in Basic + ROC, payroll, MIS reports, review meeting
- Premium: ₹24,999/month — everything in Advanced + Virtual CFO, real-time dashboards, strategic planning

Always be helpful, concise, and encourage prospects to book a free consultation.`;

// ── Footer nav ───────────────────────────────────────────────────────────────
export const FOOTER_NAV = {
  Services:  ["Virtual Accounting", "Virtual CFO", "MIS Reporting", "Financial Planning", "Internal Audit"],
  Company:   ["About Us", "Our Team", "Careers", "Blog", "Press Kit"],
  Legal:     ["Terms of Service", "Privacy Policy", "Cookie Policy", "AML Policy"],
  Resources: ["Case Studies", "Financial Templates", "GST Guide", "Tax Calendar"],
};