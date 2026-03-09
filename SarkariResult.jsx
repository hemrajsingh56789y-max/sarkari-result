import { useState } from "react";

const navLinks = ["Home", "Latest Jobs", "Results", "Admit Card", "Answer Key", "Syllabus", "Admission"];

const ticker = [
  "🔴 UPSC Civil Services 2026 Notification OUT - Apply Now!",
  "🟢 SSC CGL 2026 Result Declared - Check Now!",
  "🔴 Railway RRB NTPC 2026 New Vacancy - 11558 Posts",
  "🟢 UP Police Constable Admit Card Released!",
  "🔴 IBPS PO 2026 Online Form Last Date Extended",
];

const latestJobs = [
  { id: 1, title: "UPSC Civil Services 2026", date: "09 Mar 2026", lastDate: "15 Apr 2026", posts: "1056", tag: "HOT", color: "#e53e3e" },
  { id: 2, title: "SSC MTS 2026 Online Form", date: "08 Mar 2026", lastDate: "10 Apr 2026", posts: "8326", tag: "NEW", color: "#38a169" },
  { id: 3, title: "RRB NTPC 2026 Vacancy", date: "07 Mar 2026", lastDate: "05 Apr 2026", posts: "11558", tag: "HOT", color: "#e53e3e" },
  { id: 4, title: "UP Police SI Bharti 2026", date: "06 Mar 2026", lastDate: "20 Apr 2026", posts: "4543", tag: "NEW", color: "#38a169" },
  { id: 5, title: "IBPS PO 2026 Notification", date: "05 Mar 2026", lastDate: "01 Apr 2026", posts: "3517", tag: "NEW", color: "#38a169" },
  { id: 6, title: "Army GD Agniveer 2026", date: "04 Mar 2026", lastDate: "25 Mar 2026", posts: "25000", tag: "HOT", color: "#e53e3e" },
];

const results = [
  { id: 1, title: "SSC CGL 2025 Final Result", date: "08 Mar 2026" },
  { id: 2, title: "UPSC IAS Prelims Result 2025", date: "07 Mar 2026" },
  { id: 3, title: "UP Police Constable Result 2025", date: "06 Mar 2026" },
  { id: 4, title: "RRB Group D Result 2025", date: "05 Mar 2026" },
  { id: 5, title: "BPSC 70th Result 2026", date: "04 Mar 2026" },
];

const admitCards = [
  { id: 1, title: "SSC CHSL Admit Card 2026", date: "09 Mar 2026" },
  { id: 2, title: "UPSC Mains Admit Card 2026", date: "08 Mar 2026" },
  { id: 3, title: "Railway RRB ALP Admit Card", date: "07 Mar 2026" },
  { id: 4, title: "SBI PO Exam Admit Card 2026", date: "06 Mar 2026" },
  { id: 5, title: "UP Lekhpal Admit Card 2026", date: "05 Mar 2026" },
];

const quickLinks = [
  { label: "10th Pass Jobs", icon: "🎓" },
  { label: "12th Pass Jobs", icon: "📚" },
  { label: "Graduate Jobs", icon: "🏛️" },
  { label: "Engineer Jobs", icon: "⚙️" },
  { label: "Teacher Jobs", icon: "📝" },
  { label: "Defence Jobs", icon: "🪖" },
  { label: "Police Jobs", icon: "👮" },
  { label: "Bank Jobs", icon: "🏦" },
];

const stateJobs = [
  "UP Jobs", "Bihar Jobs", "Rajasthan Jobs", "MP Jobs",
  "Haryana Jobs", "Delhi Jobs", "Gujarat Jobs", "Maharashtra Jobs",
];

export default function SarkariResult() {
  const [tickerIdx, setTickerIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div style={{ fontFamily: "'Noto Sans', Arial, sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      {/* Top Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a6e 0%, #b21f1f 50%, #fdbb2d 100%)", padding: "8px 0", textAlign: "center" }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: 1 }}>
          🇮🇳 SARKARI RESULT — India's No.1 Govt Job Portal 🇮🇳
        </span>
      </div>

      {/* Logo & Search Bar */}
      <div style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", padding: "10px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexWrap: "wrap", gap: 10 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ background: "linear-gradient(135deg, #1a1a6e, #b21f1f)", borderRadius: 12, width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fdbb2d", fontWeight: 900, fontSize: 22 }}>SR</span>
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 22, color: "#1a1a6e", lineHeight: 1 }}>Sarkari<span style={{ color: "#b21f1f" }}>Result</span></div>
              <div style={{ fontSize: 11, color: "#555", letterSpacing: 0.5 }}>सरकारी रिजल्ट 2026</div>
            </div>
          </div>
          {/* Search */}
          <div style={{ display: "flex", flex: 1, maxWidth: 420, gap: 0, marginLeft: 20 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Jobs, Results, Admit Card..."
              style={{ flex: 1, padding: "9px 14px", border: "2px solid #1a1a6e", borderRadius: "8px 0 0 8px", fontSize: 14, outline: "none" }}
            />
            <button style={{ background: "#b21f1f", color: "#fff", border: "none", padding: "9px 18px", borderRadius: "0 8px 8px 0", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ background: "#1a1a6e", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", padding: "0 16px", flexWrap: "wrap" }}>
          {navLinks.map((link, i) => (
            <a key={i} href="#" style={{
              color: i === 0 ? "#fdbb2d" : "#fff",
              textDecoration: "none",
              padding: "12px 14px",
              fontWeight: i === 0 ? 800 : 600,
              fontSize: 13,
              borderBottom: i === 0 ? "3px solid #fdbb2d" : "3px solid transparent",
              transition: "all 0.2s",
              display: "block",
            }}
              onMouseEnter={e => { e.target.style.color = "#fdbb2d"; e.target.style.borderBottom = "3px solid #fdbb2d"; }}
              onMouseLeave={e => { e.target.style.color = i === 0 ? "#fdbb2d" : "#fff"; e.target.style.borderBottom = i === 0 ? "3px solid #fdbb2d" : "3px solid transparent"; }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Ticker */}
      <div style={{ background: "#b21f1f", color: "#fff", padding: "7px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 10, padding: "0 16px" }}>
          <span style={{ background: "#fdbb2d", color: "#1a1a6e", fontWeight: 800, fontSize: 12, padding: "2px 10px", borderRadius: 4, whiteSpace: "nowrap" }}>LIVE</span>
          <div style={{ overflow: "hidden", flex: 1 }}>
            <div style={{ animation: "ticker 18s linear infinite", whiteSpace: "nowrap", display: "inline-block" }}>
              {ticker.join("   •   ")}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ background: "#fff", borderBottom: "2px solid #e0e0e0", padding: "10px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, padding: "0 16px", flexWrap: "wrap", justifyContent: "center" }}>
          {quickLinks.map((q, i) => (
            <a key={i} href="#" style={{
              background: i % 2 === 0 ? "#1a1a6e" : "#b21f1f",
              color: "#fff", textDecoration: "none",
              padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700,
              display: "flex", alignItems: "center", gap: 5, transition: "transform 0.15s"
            }}
              onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            >
              {q.icon} {q.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1100, margin: "18px auto", padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 18 }}>
        {/* Left Column */}
        <div>
          {/* Latest Jobs */}
          <Section title="🔴 Latest Government Jobs 2026" color="#b21f1f">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#1a1a6e", color: "#fff" }}>
                  <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>Post Name</th>
                  <th style={{ padding: "8px 10px", textAlign: "center", fontWeight: 700 }}>Posts</th>
                  <th style={{ padding: "8px 10px", textAlign: "center", fontWeight: 700 }}>Last Date</th>
                  <th style={{ padding: "8px 10px", textAlign: "center", fontWeight: 700 }}>Tag</th>
                </tr>
              </thead>
              <tbody>
                {latestJobs.map((job, i) => (
                  <tr key={job.id} style={{ background: i % 2 === 0 ? "#fff" : "#f0f4ff", borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "9px 10px" }}>
                      <a href="#" style={{ color: "#1a1a6e", fontWeight: 700, textDecoration: "none", fontSize: 13 }}
                        onMouseEnter={e => e.target.style.color = "#b21f1f"}
                        onMouseLeave={e => e.target.style.color = "#1a1a6e"}
                      >{job.title}</a>
                      <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>📅 {job.date}</div>
                    </td>
                    <td style={{ padding: "9px 10px", textAlign: "center", color: "#1a1a6e", fontWeight: 700 }}>{job.posts}</td>
                    <td style={{ padding: "9px 10px", textAlign: "center", color: "#555", fontSize: 12 }}>{job.lastDate}</td>
                    <td style={{ padding: "9px 10px", textAlign: "center" }}>
                      <span style={{ background: job.color, color: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 800 }}>{job.tag}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ViewAllBtn />
          </Section>

          {/* Results & Admit Card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
            <Section title="✅ Latest Results" color="#38a169" small>
              {results.map((r) => (
                <ResultRow key={r.id} item={r} />
              ))}
              <ViewAllBtn />
            </Section>
            <Section title="📋 Admit Card" color="#d97706" small>
              {admitCards.map((a) => (
                <ResultRow key={a.id} item={a} />
              ))}
              <ViewAllBtn />
            </Section>
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Important Dates Box */}
          <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: 18, overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(90deg, #1a1a6e, #b21f1f)", color: "#fdbb2d", padding: "10px 14px", fontWeight: 800, fontSize: 14 }}>
              📅 Important Dates 2026
            </div>
            <div style={{ padding: "10px 14px" }}>
              {[
                { label: "UPSC CSE Prelims", date: "25 May 2026" },
                { label: "SSC CGL Tier-I", date: "12 Apr 2026" },
                { label: "RRB NTPC CBT-1", date: "20 Apr 2026" },
                { label: "IBPS PO Pre", date: "18 Oct 2026" },
                { label: "SBI PO Prelims", date: "15 Jun 2026" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px dashed #ddd", fontSize: 12 }}>
                  <span style={{ color: "#1a1a6e", fontWeight: 600 }}>{item.label}</span>
                  <span style={{ background: "#b21f1f", color: "#fff", padding: "1px 8px", borderRadius: 4, fontWeight: 700, fontSize: 11 }}>{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* State Jobs */}
          <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: 18, overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(90deg, #1a1a6e, #b21f1f)", color: "#fdbb2d", padding: "10px 14px", fontWeight: 800, fontSize: 14 }}>
              🗺️ State Wise Jobs
            </div>
            <div style={{ padding: "10px 14px", display: "flex", flexWrap: "wrap", gap: 7 }}>
              {stateJobs.map((s, i) => (
                <a key={i} href="#" style={{
                  background: "#f0f4ff", color: "#1a1a6e", textDecoration: "none",
                  padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                  border: "1px solid #1a1a6e", transition: "all 0.2s"
                }}
                  onMouseEnter={e => { e.target.style.background = "#1a1a6e"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "#f0f4ff"; e.target.style.color = "#1a1a6e"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Stats Box */}
          <div style={{ background: "linear-gradient(135deg, #1a1a6e 0%, #b21f1f 100%)", borderRadius: 8, padding: 16, color: "#fff" }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: "#fdbb2d", marginBottom: 12 }}>📊 Portal Statistics</div>
            {[
              { label: "Total Jobs Posted", value: "5,280+" },
              { label: "Active Vacancies", value: "1,23,456" },
              { label: "Daily Visitors", value: "12 Lakh+" },
              { label: "Results Updated", value: "3,100+" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ fontSize: 12 }}>{stat.label}</span>
                <span style={{ fontWeight: 800, color: "#fdbb2d", fontSize: 13 }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#1a1a6e", color: "#ccc", marginTop: 30, padding: "20px 0 10px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <div>
            <div style={{ color: "#fdbb2d", fontWeight: 800, fontSize: 15, marginBottom: 10 }}>SarkariResult.com</div>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: "#aaa" }}>India's most trusted platform for Sarkari Naukri, Results, Admit Cards and Government Job updates.</p>
          </div>
          <div>
            <div style={{ color: "#fdbb2d", fontWeight: 800, fontSize: 13, marginBottom: 10 }}>Quick Links</div>
            {["Latest Jobs", "Results 2026", "Admit Card", "Answer Key", "Syllabus"].map((l, i) => (
              <div key={i}><a href="#" style={{ color: "#ccc", textDecoration: "none", fontSize: 12, lineHeight: 2 }}
                onMouseEnter={e => e.target.style.color = "#fdbb2d"}
                onMouseLeave={e => e.target.style.color = "#ccc"}
              >› {l}</a></div>
            ))}
          </div>
          <div>
            <div style={{ color: "#fdbb2d", fontWeight: 800, fontSize: 13, marginBottom: 10 }}>Contact Us</div>
            <div style={{ fontSize: 12, lineHeight: 2, color: "#aaa" }}>
              📧 info@sarkariresult.com<br />
              📱 Follow us on Social Media<br />
              🌐 www.sarkariresult.com
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "#888" }}>
          © 2026 SarkariResult.com | All Rights Reserved | Made with ❤️ in India 🇮🇳
        </div>
      </footer>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>
    </div>
  );
}

function Section({ title, color, children, small }) {
  return (
    <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", overflow: "hidden", marginBottom: small ? 0 : 0 }}>
      <div style={{ background: color || "#1a1a6e", color: "#fff", padding: "10px 14px", fontWeight: 800, fontSize: small ? 13 : 15, display: "flex", alignItems: "center", gap: 6 }}>
        {title}
      </div>
      <div style={{ padding: small ? "8px 0" : 0 }}>
        {children}
      </div>
    </div>
  );
}

function ResultRow({ item }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 14px", borderBottom: "1px dashed #eee" }}>
      <a href="#" style={{ color: "#1a1a6e", fontWeight: 600, textDecoration: "none", fontSize: 12 }}
        onMouseEnter={e => e.target.style.color = "#b21f1f"}
        onMouseLeave={e => e.target.style.color = "#1a1a6e"}
      >› {item.title}</a>
      <span style={{ fontSize: 10, color: "#888", whiteSpace: "nowrap", marginLeft: 8 }}>{item.date}</span>
    </div>
  );
}

function ViewAllBtn() {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <a href="#" style={{
        background: "#1a1a6e", color: "#fdbb2d", textDecoration: "none",
        padding: "6px 22px", borderRadius: 4, fontSize: 12, fontWeight: 800,
        display: "inline-block", transition: "background 0.2s"
      }}
        onMouseEnter={e => e.target.style.background = "#b21f1f"}
        onMouseLeave={e => e.target.style.background = "#1a1a6e"}
      >
        View All »
      </a>
    </div>
  );
}
