// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "YIYANG";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      maxWidth: "1400px", 
      margin: "0 auto", 
      padding: "0 40px", 
      height: "calc(100vh - 160px)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{ 
        flex: 1, 
        maxWidth: "650px",
        paddingRight: "40px"
      }}>
        <div style={{ 
          marginBottom: "30px",
          animation: "fadeInUp 1s ease-out"
        }}>
          <span style={{ 
            fontSize: "56px", 
            marginRight: "20px",
            animation: "wave 2s ease-in-out infinite"
          }}>
            👋🏻
          </span>
          <h1 style={{ 
            fontSize: "56px", 
            fontWeight: "800", 
            color: "#2c3e50", 
            margin: 0, 
            display: "inline",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            Hi There! I'M{" "}
            <span style={{ 
              color: "#fca311",
              background: "linear-gradient(45deg, #fca311, #ff8c00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              position: "relative"
            }}>
              {displayText}
              <span style={{ 
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
                color: "#fca311"
              }}>|</span>
            </span>
          </h1>
        </div>
        
        <h3 style={{ 
          fontSize: "42px", 
          color: "#34495e", 
          fontWeight: "500", 
          margin: "30px 0 50px 0",
          animation: "fadeInUp 1s ease-out 0.5s both",
          fontFamily: "monospace"
        }}>
          Student @ UoFT
        </h3>
        
        <div style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          animation: "fadeInUp 1s ease-out 1s both"
        }}>
          <div style={{
            padding: "12px 24px",
            background: "rgba(252, 163, 17, 0.1)",
            borderRadius: "25px",
            border: "2px solid #087198",
            color: "#087198",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#087198";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(252, 163, 17, 0.1)";
            e.target.style.color = "#087198";
            e.target.style.transform = "translateY(0)";
          }}>
           👩🏻‍💻 Developer
          </div>
          <div style={{
            padding: "12px 24px",
            background: "rgba(52, 152, 219, 0.1)",
            borderRadius: "25px",
            border: "2px solid #0c2866",
            color: "#0c2866",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(52, 152, 219, 0.2)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#0c2866";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(52, 152, 219, 0.1)";
            e.target.style.color = "#0c2866";
            e.target.style.transform = "translateY(0)";
          }}>
             
             {<i className = "fi fi-sr-glass-cheers" style={{fontSize: "20px"}}></i>}
             {/* icon={<i className="fi fi-rr-home" style={{ fontSize: "20px", color: "black" }}></i>} */}
             <span style={{ marginLeft: "8px" }}>Foodie</span>
          </div>
          <div style={{
            padding: "12px 24px",
            background: "rgba(252, 163, 17, 0.1)",
            borderRadius: "25px",
            border: "2px solid #fe6f20",
            color: "#fe6f20",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#fe6f20";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(252, 163, 17, 0.1)";
            e.target.style.color = "#fe6f20";
            e.target.style.transform = "translateY(0)";
          }}>
            {/* 🦾 */}
            {/* <img 
                src="/img/robot.png" 
                alt="github"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain"
                }}
              /> */}
            🦾 Engineer

          </div>
        </div>
      </div>
      
      <div style={{ 
        flex: 1, 
        display: "flex", 
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: "60px"
      }}>
        <div style={{ 
          position: "relative",
          animation: "float 3s ease-in-out infinite"
        }}>
          <img 
            src="/img/profile.png" 
            alt="Profile"
            style={{ 
              width: "320px", 
              height: "320px",
              borderRadius: "50%", 
              border: "2px solid #fca311",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)",
              transition: "all 0.3s ease",
              objectFit: "cover"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 25px 50px rgba(0,0,0,0.2), 0 0 0 15px rgba(252, 163, 17, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)";
            }}
          />
          
          <div style={{ 
            position: "absolute", 
            top: "-10px", 
            right: "20px", 
            fontSize: "50px",
            animation: "bounce 2s ease-in-out infinite"
          }}>
            🕶️
          </div>
          <div style={{ 
            position: "absolute", 
            bottom: "10px", 
            left: "-10px", 
            fontSize: "50px",
            animation: "bounce 2s ease-in-out infinite 1s"
          }}>
            🤯
          </div>
          
          <div style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            width: "360px",
            height: "360px",
            border: "2px dashed #fca311",
            borderRadius: "50%",
            opacity: 0.3,
            animation: "rotate 20s linear infinite"
          }} />
          
          {/* 社交媒体图标 */}
          <div style={{
            position: "absolute",
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
            zIndex: 10
          }}>
            {/* GitHub */}
            <a 
              href="https://github.com/yiyangliu3218" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                fontSize: "24px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              <img 
                src="/img/git.png" 
                alt="github"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain"
                }}
              />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/yiyang-liu-2569231b0/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                fontSize: "24px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              <img 
                src="/img/linkedin.png" 
                alt="linkedin"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain"
                }}
              />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:yyl.liu@mail.utoronto.ca"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                fontSize: "24px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {/* <img 
                src="/img/email.png" 
                alt="Email"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "contain"
                }}
              /> */}
              {/* <i className="fi fi-sr-envelope" style={{ fontSize: "24px", color: "#E1306C" }}></i>
               */}
               {/* <i className="fi fi-sr-envelope" style={{ fontSize: "24px", color: "#170108ff" }}></i> */}
               
               <img 
                src="/img/email2.png" 
                alt="Email"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain"
                }}
              />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/yiyangliu21/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "24px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              <img 
                src="/img/ins.png" 
                alt="Instagram"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain"
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;