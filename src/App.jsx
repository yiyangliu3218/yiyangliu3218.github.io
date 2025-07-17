import React, { useState, useEffect } from "react";

export default function PersonalWebsite() {
  const [currentPage, setCurrentPage] = useState("home");


  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "HTML/CSS", icon: "🌐" },
  ];

  const projects = [
    {
      title: "电商网站",
      description: "使用React和Node.js构建的全栈电商平台",
      tech: ["React", "Node.js", "MongoDB"],
      status: "已完成",
    },
    {
      title: "任务管理应用",
      description: "帮助团队协作的项目管理工具",
      tech: ["React", "TypeScript", "Firebase"],
      status: "进行中",
    },
    {
      title: "天气预报应用",
      description: "实时天气查询和预报应用",
      tech: ["React", "API集成", "CSS3"],
      status: "已完成",
    },
  ];

  // const NavButton = ({ id, label, icon, isActive, onClick }) => (
  //   <button
  //     onClick={onClick}
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       gap: "8px",
  //       padding: "12px 20px",
  //       backgroundColor: isActive ? "#c8e7ff" : "transparent",
  //       color: "black",
  //       // border: "1px solid rgba(139, 92, 246, 0.3)",
  //       border: "None",
  //       borderRadius: "8px",
  //       cursor: "pointer",
  //       fontSize: "14px",
  //       fontWeight: "500",
  //       transition: "all 0.3s ease",
  //       backdropFilter: "blur(10px)",
  //     }}
  //     onMouseOver={(e) => {
  //       if (!isActive) {
  //         e.target.style.backgroundColor = "rgba(139, 92, 246, 0.2)";
  //         e.target.style.borderColor = "#c8e7ff";
  //       }
  //     }}
  //     onMouseOut={(e) => {
  //       if (!isActive) {
  //         e.target.style.backgroundColor = "transparent";
  //         e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
  //       }
  //     }}
  //   >
  //     <span>{icon}</span>
  //     <span>{label}</span>
  //   </button>
  // );

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
        // fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        // fontFamily: "'Libertinus Mono', 'Libertinus Mono', 'monospace', 'Poppins', 'Inter', Arial, sans-serif",
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
              🎓 Student
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
                  // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img 
                  src="/img/git.png" 
                  alt="github"
                  style={{
                    width: "40px",
                    height: "40px",
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
                  // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
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
                  // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img 
                  src="/img/email.png" 
                  alt="Email"
                  style={{
                    width: "28px",
                    height: "28px",
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
                  // boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  fontSize: "24px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
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


  // const HomePage = () => {
  //   const [displayText, setDisplayText] = useState('');
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const [showCursor, setShowCursor] = useState(true);
  //   const fullText = "YIYANG";

  //   useEffect(() => {
  //     // 打字效果
  //     if (currentIndex < fullText.length) {
  //       const timer = setTimeout(() => {
  //         setDisplayText(prev => prev + fullText[currentIndex]);
  //         setCurrentIndex(prev => prev + 1);
  //       }, 150); // 打字速度
  //       return () => clearTimeout(timer);
  //     }
  //   }, [currentIndex, fullText]);

  //   useEffect(() => {
  //     // 光标闪烁效果
  //     const cursorTimer = setInterval(() => {
  //       setShowCursor(prev => !prev);
  //     }, 500);
  //     return () => clearInterval(cursorTimer);
  //   }, []);

  //   return (
  //     <div style={{ 
  //       display: "flex", 
  //       alignItems: "center", 
  //       justifyContent: "space-between", 
  //       maxWidth: "1400px", 
  //       margin: "0 auto", 
  //       padding: "0 40px", 
  //       height: "calc(100vh - 160px)", // 减去导航栏和footer的高度
  //       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  //     }}>
  //       {/* 左侧内容区域 */}
  //       <div style={{ 
  //         flex: 1, 
  //         maxWidth: "650px",
  //         paddingRight: "40px"
  //       }}>
  //         <div style={{ 
  //           marginBottom: "30px",
  //           animation: "fadeInUp 1s ease-out"
  //         }}>
  //           <span style={{ 
  //             fontSize: "56px", 
  //             marginRight: "20px",
  //             animation: "wave 2s ease-in-out infinite"
  //           }}>
  //             👋🏻
  //           </span>
  //           <h1 style={{ 
  //             fontSize: "56px", 
  //             fontWeight: "800", 
  //             color: "#2c3e50", 
  //             margin: 0, 
  //             display: "inline",
  //             textShadow: "0 2px 4px rgba(0,0,0,0.1)"
  //           }}>
  //             Hi There! I'M{" "}
  //             <span style={{ 
  //               color: "#fca311",
  //               background: "linear-gradient(45deg, #fca311, #ff8c00)",
  //               WebkitBackgroundClip: "text",
  //               WebkitTextFillColor: "transparent",
  //               backgroundClip: "text",
  //               position: "relative"
  //             }}>
  //               {displayText}
  //               <span style={{ 
  //                 opacity: showCursor ? 1 : 0,
  //                 transition: "opacity 0.1s",
  //                 color: "#fca311"
  //               }}>|</span>
  //             </span>
  //           </h1>
  //         </div>
          
  //         <h3 style={{ 
  //           fontSize: "42px", 
  //           color: "#34495e", 
  //           fontWeight: "500", 
  //           margin: "50px 0 50px 0",
  //           animation: "fadeInUp 1s ease-out 0.5s both",
  //           fontFamily: "monospace"
  //         }}>
  //           Student @ UoFT
  //         </h3>
          
  //         {/* 添加一些装饰性元素 */}
  //         <div style={{
  //           display: "flex",
  //           gap: "20px",
  //           marginTop: "40px",
  //           animation: "fadeInUp 1s ease-out 1s both"
  //         }}>
  //           <div style={{
  //             padding: "12px 24px",
  //             background: "rgba(252, 163, 17, 0.1)",
  //             borderRadius: "25px",
  //             border: "2px solid #087198",
  //             color: "#087198",
  //             fontWeight: "600",
  //             fontSize: "16px",
  //             cursor: "pointer",
  //             transition: "all 0.3s ease",
  //             boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
  //           }}
  //           onMouseEnter={(e) => {
  //             e.target.style.background = "#087198";
  //             e.target.style.color = "white";
  //             e.target.style.transform = "translateY(-2px)";
  //           }}
  //           onMouseLeave={(e) => {
  //             e.target.style.background = "rgba(252, 163, 17, 0.1)";
  //             e.target.style.color = "#087198";
  //             e.target.style.transform = "translateY(0)";
  //           }}>
  //            👩🏻‍💻 Developer
  //           </div>
  //           <div style={{
  //             padding: "12px 24px",
  //             background: "rgba(52, 152, 219, 0.1)",
  //             borderRadius: "25px",
  //             border: "2px solid #0c2866",
  //             color: "#0c2866",
  //             fontWeight: "600",
  //             fontSize: "16px",
  //             cursor: "pointer",
  //             transition: "all 0.3s ease",
  //             boxShadow: "0 4px 15px rgba(52, 152, 219, 0.2)"
  //           }}
  //           onMouseEnter={(e) => {
  //             e.target.style.background = "#0c2866";
  //             e.target.style.color = "white";
  //             e.target.style.transform = "translateY(-2px)";
  //           }}
  //           onMouseLeave={(e) => {
  //             e.target.style.background = "rgba(52, 152, 219, 0.1)";
  //             e.target.style.color = "#0c2866";
  //             e.target.style.transform = "translateY(0)";
  //           }}>
  //             🎓 Student
  //           </div>
  //           <div style={{
  //             padding: "12px 24px",
  //             background: "rgba(252, 163, 17, 0.1)",
  //             borderRadius: "25px",
  //             border: "2px solid #fe6f20",
  //             color: "#fe6f20",
  //             fontWeight: "600",
  //             fontSize: "16px",
  //             cursor: "pointer",
  //             transition: "all 0.3s ease",
  //             boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
  //           }}
  //           onMouseEnter={(e) => {
  //             e.target.style.background = "#fe6f20";
  //             e.target.style.color = "white";
  //             e.target.style.transform = "translateY(-2px)";
  //           }}
  //           onMouseLeave={(e) => {
  //             e.target.style.background = "rgba(252, 163, 17, 0.1)";
  //             e.target.style.color = "#fe6f20";
  //             e.target.style.transform = "translateY(0)";
  //           }}>
  //             🦾 Engineer
  //           </div>
  //         </div>
  //       </div>
        
  //       {/* 右侧头像区域 */}
  //       <div style={{ 
  //         flex: 1, 
  //         display: "flex", 
  //         justifyContent: "flex-end",
  //         alignItems: "center",
  //         paddingLeft: "60px"
  //       }}>
  //         <div style={{ 
  //           position: "relative",
  //           animation: "float 3s ease-in-out infinite"
  //         }}>
  //           <img 
  //             src="/img/profile.png" 
  //             alt="Profile"
  //             style={{ 
  //               width: "320px", 
  //               height: "320px",
  //               borderRadius: "50%", 
  //               border: "2px solid #fca311",
  //               boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)",
  //               transition: "all 0.3s ease",
  //               objectFit: "cover"
  //             }}
  //             onMouseEnter={(e) => {
  //               e.target.style.transform = "scale(1.05)";
  //               e.target.style.boxShadow = "0 25px 50px rgba(0,0,0,0.2), 0 0 0 15px rgba(252, 163, 17, 0.2)";
  //             }}
  //             onMouseLeave={(e) => {
  //               e.target.style.transform = "scale(1)";
  //               e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)";
  //             }}
  //           />
            
  //           {/* 装饰性元素 */}
  //           <div style={{ 
  //             position: "absolute", 
  //             top: "-10px", 
  //             right: "20px", 
  //             fontSize: "50px",
  //             animation: "bounce 2s ease-in-out infinite"
  //           }}>
  //             🕶️
  //           </div>
  //           <div style={{ 
  //             position: "absolute", 
  //             bottom: "10px", 
  //             left: "-10px", 
  //             fontSize: "50px",
  //             animation: "bounce 2s ease-in-out infinite 1s"
  //           }}>
  //             🤯
  //           </div>

            
            
  //           {/* 额外的装饰圆环 */}
  //           <div style={{
  //             position: "absolute",
  //             top: "-20px",
  //             left: "-20px",
  //             width: "360px",
  //             height: "360px",
  //             border: "2px dashed #fca311",
  //             borderRadius: "50%",
  //             opacity: 0.3,
  //             animation: "rotate 20s linear infinite"
  //           }} />
  //         </div>
  //       </div>

  //       {/* CSS动画样式 */}
  //       <style jsx>{`
  //         @keyframes fadeInUp {
  //           from {
  //             opacity: 0;
  //             transform: translateY(30px);
  //           }
  //           to {
  //             opacity: 1;
  //             transform: translateY(0);
  //           }
  //         }
          
  //         @keyframes wave {
  //           0%, 100% { transform: rotate(0deg); }
  //           25% { transform: rotate(20deg); }
  //           75% { transform: rotate(-20deg); }
  //         }
          
  //         @keyframes float {
  //           0%, 100% { transform: translateY(0px); }
  //           50% { transform: translateY(-20px); }
  //         }
          
  //         @keyframes bounce {
  //           0%, 100% { transform: translateY(0px); }
  //           50% { transform: translateY(-10px); }
  //         }
          
  //         @keyframes rotate {
  //           from { transform: rotate(0deg); }
  //           to { transform: rotate(360deg); }
  //         }
  //       `}</style>
  //     </div>



  //   );
  // };

  const AboutPage = () => (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
        minHeight: "calc(100vh - 160px)",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "42px",
            color: "black",
            marginBottom: "30px",
          }}
        >
          About <span style={{ color: "#00000" }}>me</span>
        </h1>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px",
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <p
            style={{
              color: "#052f84ff",
              fontSize: "18px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            大家好，我是
            <span style={{ color: "#00000", fontWeight: "bold" }}> 张三</span>
            ，来自北京。 我目前在一家科技公司担任全栈开发工程师。
          </p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px",
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <p
            style={{
              color: "#052f84ff",
              fontSize: "18px",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            我拥有3年的开发经验，专注于现代Web技术栈。热爱编程，致力于创建用户友好的应用程序。
          </p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <h3 style={{ color: "#00000", marginBottom: "15px" }}>
            除了编程，我还喜欢：
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ color: "#052f84ff", fontSize: "16px" }}>🎮 玩游戏</div>
            <div style={{ color: "#052f84ff", fontSize: "16px" }}>
              ✍️ 写技术博客
            </div>
            <div style={{ color: "#052f84ff", fontSize: "16px" }}>✈️ 旅行</div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "20px",
            fontStyle: "italic",
            color: "#00000",
            fontSize: "18px",
          }}
        >
          " I Examine Myself Three Times a Day"
          <br />
          <span style={{ fontSize: "14px", color: "#9ca3af" }}>— Zengzi </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "450px",
            height: "450px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "100px", marginBottom: "20px" }}>👨‍💻</div>
          <div style={{ fontSize: "60px", display: "flex", gap: "20px" }}>
            <span>💡</span>
            <span>⚡</span>
            <span>🎯</span>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        minHeight: "calc(100vh - 160px)",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          color: "black",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Programming <span style={{ color: "#00000" }}></span>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginBottom: "50px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#c8e7ff";
              e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "20px" }}>
              {skill.icon}
            </div>
            <h3
              style={{
                color: "#00000",
                fontSize: "24px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          border: "1px solid rgba(139, 92, 246, 0.2)",
        }}
      >
        <h2 style={{ color: "#00000", marginBottom: "20px" }}>
          持续学习中...
        </h2>
        <p style={{ color: "#052f84ff", fontSize: "18px", margin: 0 }}>...</p>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        minHeight: "calc(100vh - 160px)",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          color: "black",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        我的 <span style={{ color: "#00000" }}>项目</span>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "2px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "20px",
              padding: "30px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#c8e7ff";
              e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h3
                style={{
                  color: "#00000",
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  backgroundColor:
                    project.status === "已完成" ? "#10b981" : "#f59e0b",
                  color: "black",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {project.status}
              </span>
            </div>

            <p
              style={{
                color: "#052f84ff",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    color: "#00000",
                    padding: "6px 12px",
                    borderRadius: "16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
        minHeight: "calc(100vh - 160px)",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "42px",
            color: "black",
            marginBottom: "30px",
          }}
        >
          联系 <span style={{ color: "#00000" }}>我</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <span style={{ fontSize: "24px" }}>✉️</span>
            <span style={{ color: "#052f84ff", fontSize: "18px" }}>
              zhangsan@example.com
            </span>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <span style={{ fontSize: "24px" }}>📱</span>
            <span style={{ color: "#052f84ff", fontSize: "18px" }}>
              +86 138 0000 0000
            </span>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <span style={{ fontSize: "24px" }}>🔗</span>
            <span style={{ color: "#052f84ff", fontSize: "18px" }}>
              github.com/zhangsan
            </span>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <span style={{ fontSize: "24px" }}>💼</span>
            <span style={{ color: "#052f84ff", fontSize: "18px" }}>
              linkedin.com/in/zhangsan
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid rgba(139, 92, 246, 0.3)",
          }}
        >
          <h3
            style={{ color: "#00000", marginBottom: "15px", fontSize: "20px" }}
          >
            让我们合作吧！🚀
          </h3>
          <p
            style={{
              color: "#052f84ff",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            如果你有有趣的项目想要合作，或者想要了解更多关于我的工作，请随时联系我。我很乐意与你交流！
          </p>
          <button
            style={{
              backgroundColor: "#c8e7ff",
              color: "black",
              padding: "12px 30px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7c3aed")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#c8e7ff")}
          >
            发送邮件 📧
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "80px", marginBottom: "20px" }}>📬</div>
          <div
            style={{ fontSize: "24px", color: "black", textAlign: "center" }}
          >
            随时联系我！
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "skills":
        return <SkillsPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
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
            label="HOMEPAGE"
            // icon="🏠"
            isActive={currentPage === "home"}
            onClick={() => setCurrentPage("home")}
          />
          <NavButton
            id="about"
            label="ABOUT ME"
            // icon="👨‍💻"
            isActive={currentPage === "about"}
            onClick={() => setCurrentPage("about")}
          />
          
          <NavButton
            id="research"
            label="RESEARCH"
            // icon="🚀"
            isActive={currentPage === "research"}
            onClick={() => setCurrentPage("research")}
          />
          <NavButton
            id="projects"
            label="PROJECTS"
            // icon="🚀"
            isActive={currentPage === "projects"}
            onClick={() => setCurrentPage("projects")}
          />
          <NavButton
            id="skills"
            label="SKILLS"
            // icon="💻"
            isActive={currentPage === "skills"}
            onClick={() => setCurrentPage("skills")}
          />
          <NavButton
            id="contact"
            label="CONTACT"
            // icon={<img src="/img/icons-linkedin-100.png" alt="home" style={{ width: 20, height: 20 }} />}
            isActive={currentPage === "contact"}
            onClick={() => setCurrentPage("contact")}
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
             {/* All rights reserved. */}
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

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

  