// src/components/PersonalWebsite.jsx
import React, { useState } from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import ResearchPage from './ResearchPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import MyFootprintMap from './MyFootprintMap';

const PersonalWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const NavButton = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 20px",
        backgroundColor: isActive ? "#c8e7ff" : "transparent",
        color: "black",
        border: "None",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: '"monospace", Libertinus Mono',
        letterSpacing: "0.5px",
        transition: "all 0.3s ease",
        backdropFilter: "blur(10px)",
      }}
      onMouseOver={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = "rgba(139, 92, 246, 0.2)";
          e.target.style.borderColor = "#c8e7ff";
        }
      }}
      onMouseOut={(e) => {
        if (!isActive) {
          e.target.style.backgroundColor = "transparent";
          e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
        }
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutMe />;
      case "research":
        return <ResearchPage />;
      case "skills":
        return <SkillsPage />;
      case "projects":
        return <ProjectsPage />;
      case "travel":
        return <MyFootprintMap />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* 动态背景粒子效果 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* 导航栏 */}
      <nav
        style={{
          padding: "20px 40px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#00000",
          }}
        >
          {/* YL. */}
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <NavButton
            id="home"
            label="HOME"
            icon={<i className="fi fi-rr-home" style={{ fontSize: "20px", color: "black" }}></i>}
            isActive={currentPage === "home"}
            onClick={() => setCurrentPage("home")}
          />
          <NavButton
            id="about"
            label="ABOUT ME"
            icon={<i className="fi fi-rr-user" style={{fontSize: "20px"}}></i>}
            isActive={currentPage === "about"}
            onClick={() => setCurrentPage("about")}
          />
          
          <NavButton
            id="research"
            label="RESEARCH"
            icon={<i className="fi fi-rr-rocket-lunch" style={{fontSize: "20px"}}></i>}
            isActive={currentPage === "research"}
            onClick={() => setCurrentPage("research")}
          />
          <NavButton
            id="projects"
            label="PROJECTS"
            icon={<i className="fi fi-rr-cube" style={{fontSize: "20px"}}></i>}
            isActive={currentPage === "projects"}
            onClick={() => setCurrentPage("projects")}
          />
          <NavButton
            id="skills"
            label="SKILLS"
            icon={<i className="fi fi-rr-chart-network" style={{fontSize: "20px"}}></i>}
            isActive={currentPage === "skills"}
            onClick={() => setCurrentPage("skills")}
          />
          <NavButton
            id="travel"
            label="TRAVEL"
            icon={<img src="/nav/travel.png" alt="travel icon" style={{ width: "23px", height: "23px" }} />}
            isActive={currentPage === "travel"}
            onClick={() => setCurrentPage("travel")}
          />
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        {renderPage()}
      </main>

      {/* Footer区域 */}
      <footer style={{
        fontFamily: '"Libertinus Mono", monospace',
        textAlign: "center",
        padding: "20px 0",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        position: "relative",
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div style={{
            color: "#64748b",
            fontSize: "12px",
            fontWeight: "500"
          }}>
            Copyright © 2025 Yiyang Liu.
          </div>
          
          <div style={{
            display: "flex",
            gap: "20px",
            alignItems: "center"
          }}>
            <span style={{
              color: "#64748b",
              fontSize: "12px"
            }}>
              Made with ❤️ in Toronto
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;