// import React, { useState, useEffect } from "react";
// import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
// import { SiJavascript, SiTypescript } from 'react-icons/si';
// import React, { useState, useEffect, useRef } from 'react';
// import { MapPin, Calendar, Star, Heart, Search, Filter } from 'lucide-react';


// export default function PersonalWebsite() {
//   const [currentPage, setCurrentPage] = useState("home");

// // import PersonalWebsite from './components/AboutPage.jsx';

// // function App() {
// //   return <PersonalWebsite />;
// // }

// // export default App;


// const skills = [
//   { name: "React", icon: <FaReact /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "TypeScript", icon: <SiTypescript /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Python", icon: <FaPython /> },
//   { name: "HTML/CSS", icon: <FaHtml5 /> },
// ];

//   const projects = [
//     {
//       title: "电商网站",
//       description: "使用React和Node.js构建的全栈电商平台",
//       tech: ["React", "Node.js", "MongoDB"],
//       status: "已完成",
//     },
//     {
//       title: "任务管理应用",
//       description: "帮助团队协作的项目管理工具",
//       tech: ["React", "TypeScript", "Firebase"],
//       status: "进行中",
//     },
//     {
//       title: "天气预报应用",
//       description: "实时天气查询和预报应用",
//       tech: ["React", "API集成", "CSS3"],
//       status: "已完成",
//     },
//   ];

  
//   const NavButton = ({ id, label, icon, isActive, onClick }) => (
//     <button
//       onClick={onClick}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "8px",
//         padding: "12px 20px",
//         backgroundColor: isActive ? "#c8e7ff" : "transparent",
//         color: "black",
//         border: "None",
//         borderRadius: "8px",
//         cursor: "pointer",
//         fontSize: "16px",
//         fontWeight: "600",
//         // fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
//         // fontFamily: "'Libertinus Mono', 'Libertinus Mono', 'monospace', 'Poppins', 'Inter', Arial, sans-serif",
//         fontFamily: '"monospace", Libertinus Mono',
        
        
//         letterSpacing: "0.5px",
//         transition: "all 0.3s ease",
//         backdropFilter: "blur(10px)",
//       }}
//       onMouseOver={(e) => {
//         if (!isActive) {
//           e.target.style.backgroundColor = "rgba(139, 92, 246, 0.2)";
//           e.target.style.borderColor = "#c8e7ff";
//         }
//       }}
//       onMouseOut={(e) => {
//         if (!isActive) {
//           e.target.style.backgroundColor = "transparent";
//           e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
//         }
//       }}
//     >
//       <span>{icon}</span>
//       <span>{label}</span>
//     </button>
//   );
// const HomePage = () => {
//     const [displayText, setDisplayText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [showCursor, setShowCursor] = useState(true);
//     const fullText = "YIYANG";

//     useEffect(() => {
//       if (currentIndex < fullText.length) {
//         const timer = setTimeout(() => {
//           setDisplayText(prev => prev + fullText[currentIndex]);
//           setCurrentIndex(prev => prev + 1);
//         }, 150);
//         return () => clearTimeout(timer);
//       }
//     }, [currentIndex, fullText]);

//     useEffect(() => {
//       const cursorTimer = setInterval(() => {
//         setShowCursor(prev => !prev);
//       }, 500);
//       return () => clearInterval(cursorTimer);
//     }, []);

//     return (
//       <div style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         justifyContent: "space-between", 
//         maxWidth: "1400px", 
//         margin: "0 auto", 
//         padding: "0 40px", 
//         height: "calc(100vh - 160px)",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
//       }}>
//         <div style={{ 
//           flex: 1, 
//           maxWidth: "650px",
//           paddingRight: "40px"
//         }}>
//           <div style={{ 
//             marginBottom: "30px",
//             animation: "fadeInUp 1s ease-out"
//           }}>
//             <span style={{ 
//               fontSize: "56px", 
//               marginRight: "20px",
//               animation: "wave 2s ease-in-out infinite"
//             }}>
//               👋🏻
//             </span>
//             <h1 style={{ 
//               fontSize: "56px", 
//               fontWeight: "800", 
//               color: "#2c3e50", 
//               margin: 0, 
//               display: "inline",
//               textShadow: "0 2px 4px rgba(0,0,0,0.1)"
//             }}>
//               Hi There! I'M{" "}
//               <span style={{ 
//                 color: "#fca311",
//                 background: "linear-gradient(45deg, #fca311, #ff8c00)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 position: "relative"
//               }}>
//                 {displayText}
//                 <span style={{ 
//                   opacity: showCursor ? 1 : 0,
//                   transition: "opacity 0.1s",
//                   color: "#fca311"
//                 }}>|</span>
//               </span>
//             </h1>
//           </div>
          
//           <h3 style={{ 
//             fontSize: "42px", 
//             color: "#34495e", 
//             fontWeight: "500", 
//             margin: "30px 0 50px 0",
//             animation: "fadeInUp 1s ease-out 0.5s both",
//             fontFamily: "monospace"
//           }}>
//             Student @ UoFT
//           </h3>
          
//           <div style={{
//             display: "flex",
//             gap: "20px",
//             marginTop: "40px",
//             animation: "fadeInUp 1s ease-out 1s both"
//           }}>
//             <div style={{
//               padding: "12px 24px",
//               background: "rgba(252, 163, 17, 0.1)",
//               borderRadius: "25px",
//               border: "2px solid #087198",
//               color: "#087198",
//               fontWeight: "600",
//               fontSize: "16px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = "#087198";
//               e.target.style.color = "white";
//               e.target.style.transform = "translateY(-2px)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(252, 163, 17, 0.1)";
//               e.target.style.color = "#087198";
//               e.target.style.transform = "translateY(0)";
//             }}>
//              👩🏻‍💻 Developer
//             </div>
//             <div style={{
//               padding: "12px 24px",
//               background: "rgba(52, 152, 219, 0.1)",
//               borderRadius: "25px",
//               border: "2px solid #0c2866",
//               color: "#0c2866",
//               fontWeight: "600",
//               fontSize: "16px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: "0 4px 15px rgba(52, 152, 219, 0.2)"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = "#0c2866";
//               e.target.style.color = "white";
//               e.target.style.transform = "translateY(-2px)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(52, 152, 219, 0.1)";
//               e.target.style.color = "#0c2866";
//               e.target.style.transform = "translateY(0)";
//             }}>
//               🎓 Student
//             </div>
//             <div style={{
//               padding: "12px 24px",
//               background: "rgba(252, 163, 17, 0.1)",
//               borderRadius: "25px",
//               border: "2px solid #fe6f20",
//               color: "#fe6f20",
//               fontWeight: "600",
//               fontSize: "16px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               boxShadow: "0 4px 15px rgba(252, 163, 17, 0.2)"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = "#fe6f20";
//               e.target.style.color = "white";
//               e.target.style.transform = "translateY(-2px)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(252, 163, 17, 0.1)";
//               e.target.style.color = "#fe6f20";
//               e.target.style.transform = "translateY(0)";
//             }}>
//               🦾 Engineer
//             </div>
//           </div>
//         </div>
        
//         <div style={{ 
//           flex: 1, 
//           display: "flex", 
//           justifyContent: "flex-end",
//           alignItems: "center",
//           paddingLeft: "60px"
//         }}>
//           <div style={{ 
//             position: "relative",
//             animation: "float 3s ease-in-out infinite"
//           }}>
//             <img 
//               src="/img/profile.png" 
//               alt="Profile"
//               style={{ 
//                 width: "320px", 
//                 height: "320px",
//                 borderRadius: "50%", 
//                 border: "2px solid #fca311",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)",
//                 transition: "all 0.3s ease",
//                 objectFit: "cover"
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "scale(1.05)";
//                 e.target.style.boxShadow = "0 25px 50px rgba(0,0,0,0.2), 0 0 0 15px rgba(252, 163, 17, 0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "scale(1)";
//                 e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15), 0 0 0 10px rgba(252, 163, 17, 0.1)";
//               }}
//             />
            
//             <div style={{ 
//               position: "absolute", 
//               top: "-10px", 
//               right: "20px", 
//               fontSize: "50px",
//               animation: "bounce 2s ease-in-out infinite"
//             }}>
//               🕶️
//             </div>
//             <div style={{ 
//               position: "absolute", 
//               bottom: "10px", 
//               left: "-10px", 
//               fontSize: "50px",
//               animation: "bounce 2s ease-in-out infinite 1s"
//             }}>
//               🤯
//             </div>
            
//             <div style={{
//               position: "absolute",
//               top: "-20px",
//               left: "-20px",
//               width: "360px",
//               height: "360px",
//               border: "2px dashed #fca311",
//               borderRadius: "50%",
//               opacity: 0.3,
//               animation: "rotate 20s linear infinite"
//             }} />
            
//             {/* 社交媒体图标 */}
//             <div style={{
//               position: "absolute",
//               bottom: "-80px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               display: "flex",
//               gap: "20px",
//               zIndex: 10
//             }}>
//               {/* GitHub */}
//               <a 
//                 href="https://github.com/yiyangliu3218" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textDecoration: "none",
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   fontSize: "24px"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-3px)";
//                   // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <img 
//                   src="/img/git.png" 
//                   alt="github"
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     objectFit: "contain"
//                   }}
//                 />
//               </a>
              
//               {/* LinkedIn */}
//               <a 
//                 href="https://www.linkedin.com/in/yiyang-liu-2569231b0/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textDecoration: "none",
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   fontSize: "24px"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-3px)";
//                   // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <img 
//                   src="/img/linkedin.png" 
//                   alt="linkedin"
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     objectFit: "contain"
//                   }}
//                 />
//               </a>
              
//               {/* Email */}
//               <a 
//                 href="mailto:yyl.liu@mail.utoronto.ca"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textDecoration: "none",
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   fontSize: "24px"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-3px)";
//                   // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <img 
//                   src="/img/email.png" 
//                   alt="Email"
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     objectFit: "contain"
//                   }}
//                 />
//               </a>
              
//               {/* Instagram */}
//               <a 
//                 href="https://www.instagram.com/yiyangliu21/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textDecoration: "none",
//                   // boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   fontSize: "24px"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-3px)";
//                   // e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   // e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <img 
//                   src="/img/ins.png" 
//                   alt="Instagram"
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     objectFit: "contain"
//                   }}
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };


//   const AboutPage = () => (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "40px",
//         display: "flex",
//         alignItems: "center",
//         gap: "60px",
//         minHeight: "calc(100vh - 160px)",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <h1
//           style={{
//             fontSize: "42px",
//             color: "black",
//             marginBottom: "30px",
//           }}
//         >
//           About <span style={{ color: "#00000" }}>me</span>
//         </h1>

//         <div
//           style={{
//             backgroundColor: "rgba(255,255,255,0.05)",
//             borderRadius: "20px",
//             padding: "30px",
//             marginBottom: "30px",
//             border: "1px solid rgba(139, 92, 246, 0.2)",
//           }}
//         >
//           <p
//             style={{
//               color: "#052f84ff",
//               fontSize: "18px",
//               lineHeight: "1.8",
//               margin: 0,
//             }}
//           >
//             大家好，我是
//             <span style={{ color: "#00000", fontWeight: "bold" }}> 张三</span>
//             ，来自北京。 我目前在一家科技公司担任全栈开发工程师。
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "rgba(255,255,255,0.05)",
//             borderRadius: "20px",
//             padding: "30px",
//             marginBottom: "30px",
//             border: "1px solid rgba(139, 92, 246, 0.2)",
//           }}
//         >
//           <p
//             style={{
//               color: "#052f84ff",
//               fontSize: "18px",
//               lineHeight: "1.8",
//               margin: 0,
//             }}
//           >
//             我拥有3年的开发经验，专注于现代Web技术栈。热爱编程，致力于创建用户友好的应用程序。
//           </p>
//         </div>

//         <div
//           style={{
//             backgroundColor: "rgba(255,255,255,0.05)",
//             borderRadius: "20px",
//             padding: "30px",
//             border: "1px solid rgba(139, 92, 246, 0.2)",
//           }}
//         >
//           <h3 style={{ color: "#00000", marginBottom: "15px" }}>
//             除了编程，我还喜欢：
//           </h3>
//           <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//             <div style={{ color: "#052f84ff", fontSize: "16px" }}>🎮 玩游戏</div>
//             <div style={{ color: "#052f84ff", fontSize: "16px" }}>
//               ✍️ 写技术博客
//             </div>
//             <div style={{ color: "#052f84ff", fontSize: "16px" }}>✈️ 旅行</div>
//           </div>
//         </div>

//         <div
//           style={{
//             textAlign: "center",
//             marginTop: "40px",
//             padding: "20px",
//             fontStyle: "italic",
//             color: "#00000",
//             fontSize: "18px",
//           }}
//         >
//           " I Examine Myself Three Times a Day"
//           <br />
//           <span style={{ fontSize: "14px", color: "#9ca3af" }}>— Zengzi </span>
//         </div>
//       </div>

//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "450px",
//             height: "450px",
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             borderRadius: "20px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//             position: "relative",
//           }}
//         >
//           <div style={{ fontSize: "100px", marginBottom: "20px" }}>👨‍💻</div>
//           <div style={{ fontSize: "60px", display: "flex", gap: "20px" }}>
//             <span>💡</span>
//             <span>⚡</span>
//             <span>🎯</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const SkillsPage = () => (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "40px",
//         minHeight: "calc(100vh - 160px)",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "42px",
//           color: "black",
//           textAlign: "center",
//           marginBottom: "50px",
//         }}
//       >
//         Programming <span style={{ color: "#00000" }}></span>
//       </h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "30px",
//           marginBottom: "50px",
//         }}
//       >
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "rgba(255,255,255,0.05)",
//               border: "2px solid rgba(139, 92, 246, 0.3)",
//               borderRadius: "20px",
//               padding: "40px",
//               textAlign: "center",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.borderColor = "#c8e7ff";
//               e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
//               e.currentTarget.style.transform = "translateY(-5px)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
//               e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
//               e.currentTarget.style.transform = "translateY(0)";
//             }}
//           >
//             <div style={{ fontSize: "60px", marginBottom: "20px" }}>
//               {skill.icon}
//             </div>
//             <h3
//               style={{
//                 color: "#00000",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 margin: 0,
//               }}
//             >
//               {skill.name}
//             </h3>
//           </div>
//         ))}
//       </div>

//       <div
//         style={{
//           backgroundColor: "rgba(255,255,255,0.05)",
//           borderRadius: "20px",
//           padding: "40px",
//           textAlign: "center",
//           border: "1px solid rgba(139, 92, 246, 0.2)",
//         }}
//       >
//         <h2 style={{ color: "#00000", marginBottom: "20px" }}>
//           持续学习中...
//         </h2>
//         <p style={{ color: "#052f84ff", fontSize: "18px", margin: 0 }}>...</p>
//       </div>
//     </div>
//   );

//   const ProjectsPage = () => (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "40px",
//         minHeight: "calc(100vh - 160px)",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "42px",
//           color: "black",
//           textAlign: "center",
//           marginBottom: "50px",
//         }}
//       >
//         我的 <span style={{ color: "#00000" }}>项目</span>
//       </h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//           gap: "30px",
//         }}
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "rgba(255,255,255,0.05)",
//               border: "2px solid rgba(139, 92, 246, 0.3)",
//               borderRadius: "20px",
//               padding: "30px",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.borderColor = "#c8e7ff";
//               e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
//               e.currentTarget.style.transform = "translateY(-5px)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
//               e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
//               e.currentTarget.style.transform = "translateY(0)";
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "15px",
//               }}
//             >
//               <h3
//                 style={{
//                   color: "#00000",
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   margin: 0,
//                 }}
//               >
//                 {project.title}
//               </h3>
//               <span
//                 style={{
//                   backgroundColor:
//                     project.status === "已完成" ? "#10b981" : "#f59e0b",
//                   color: "black",
//                   padding: "4px 12px",
//                   borderRadius: "12px",
//                   fontSize: "12px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {project.status}
//               </span>
//             </div>

//             <p
//               style={{
//                 color: "#052f84ff",
//                 fontSize: "16px",
//                 lineHeight: "1.6",
//                 marginBottom: "20px",
//               }}
//             >
//               {project.description}
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "8px",
//               }}
//             >
//               {project.tech.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   style={{
//                     backgroundColor: "rgba(139, 92, 246, 0.2)",
//                     color: "#00000",
//                     padding: "6px 12px",
//                     borderRadius: "16px",
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     border: "1px solid rgba(139, 92, 246, 0.3)",
//                   }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // const TravelPage = () => (

//   // );
//   const MyFootprintMap = () => {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newLocation, setNewLocation] = useState({
//     name: '',
//     date: '',
//     description: '',
//     photos: [],
//     rating: 5
//   });

//   // 示例足迹数据
//   const [footprints, setFootprints] = useState([
//     {
//       id: 1,
//       name: "东京塔",
//       lat: 35.6586,
//       lng: 139.7454,
//       date: "2023-10-15",
//       description: "在东京塔上看到了美丽的城市夜景，太震撼了！",
//       photos: ["https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=300&h=200&fit=crop"],
//       rating: 5,
//       category: "landmark"
//     },
//     {
//       id: 2,
//       name: "巴黎埃菲尔铁塔",
//       lat: 48.8584,
//       lng: 2.2945,
//       date: "2023-08-20",
//       description: "经典的巴黎地标，白天和夜晚都很美",
//       photos: ["https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=200&fit=crop"],
//       rating: 5,
//       category: "landmark"
//     },
//     {
//       id: 3,
//       name: "纽约中央公园",
//       lat: 40.7851,
//       lng: -73.9683,
//       date: "2023-09-10",
//       description: "秋天的中央公园，叶子变黄了很漂亮",
//       photos: ["https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=300&h=200&fit=crop"],
//       rating: 4,
//       category: "nature"
//     },
//     {
//       id: 4,
//       name: "伦敦大本钟",
//       lat: 51.5007,
//       lng: -0.1246,
//       date: "2023-07-05",
//       description: "经典的伦敦地标，虽然在维修中但依然壮观",
//       photos: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop"],
//       rating: 4,
//       category: "landmark"
//     },
//     {
//       id: 5,
//       name: "巴厘岛海滩",
//       lat: -8.3405,
//       lng: 115.0920,
//       date: "2023-11-02",
//       description: "完美的海滩假期，水清沙白，非常放松",
//       photos: ["https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop"],
//       rating: 5,
//       category: "beach"
//     }
//   ]);

//   // 初始化地图
//   useEffect(() => {
//     if (!window.google) {
//       // 如果没有加载Google Maps API，显示提示
//       console.log('请先加载Google Maps API');
//       return;
//     }

//     const mapInstance = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 35.6586, lng: 139.7454 },
//       zoom: 2,
//       styles: [
//         {
//           featureType: "water",
//           elementType: "geometry",
//           stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
//         },
//         {
//           featureType: "landscape",
//           elementType: "geometry",
//           stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
//         }
//       ]
//     });

//     setMap(mapInstance);
//     // 创建标记
//     const newMarkers = footprints.map(footprint => {
//       const marker = new window.google.maps.Marker({
//         position: { lat: footprint.lat, lng: footprint.lng },
//         map: mapInstance,
//         title: footprint.name,
//         icon: {
//           url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
//             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
//               <circle cx="12" cy="10" r="3" fill="white"/>
//             </svg>
//           `),
//           scaledSize: new window.google.maps.Size(32, 32)
//         }
//       });

//       marker.addListener('click', () => {
//         setSelectedLocation(footprint);
//         mapInstance.setCenter({ lat: footprint.lat, lng: footprint.lng });
//         mapInstance.setZoom(10);
//       });

//       return marker;
//     });

//     setMarkers(newMarkers);

//     // 添加地图点击事件
//     mapInstance.addListener('click', (event) => {
//       const lat = event.latLng.lat();
//       const lng = event.latLng.lng();
//       setNewLocation(prev => ({
//         ...prev,
//         lat,
//         lng
//       }));
//       setShowAddForm(true);
//     });

//   }, [footprints]);

//   // 添加新足迹
//   const addFootprint = () => {
//     if (!newLocation.name || !newLocation.date) {
//       alert('请填写地点名称和日期');
//       return;
//     }

//     const newFootprint = {
//       id: Date.now(),
//       ...newLocation,
//       photos: [],
//       category: 'custom'
//     };

//     setFootprints(prev => [...prev, newFootprint]);
//     setShowAddForm(false);
//     setNewLocation({
//       name: '',
//       date: '',
//       description: '',
//       photos: [],
//       rating: 5
//     });
//   };

//   // 渲染星级评分
//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
//         ★
//       </span>
//     ));
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       {/* 头部 */}
//       <header className="bg-white shadow-sm p-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <MapPin className="h-6 w-6 text-red-500" />
//             <h1 className="text-2xl font-bold text-gray-900">我的足迹</h1>
//           </div>
//           <div className="text-sm text-gray-600">
//             已访问 {footprints.length} 个地点
//           </div>
//         </div>
//       </header>

//       <div className="flex-1 flex">
//         {/* 地图区域 */}
//         <div className="flex-1 relative">
//           <div ref={mapRef} className="w-full h-full" />
          
//           {/* 提示信息 */}
//           {!window.google && (
//             <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//               <div className="text-center">
//                 <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   加载地图API
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   需要在页面中加载Google Maps API
//                 </p>
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
//                   <p className="text-sm text-yellow-800">
//                     在HTML中添加：<br/>
//                     <code className="bg-yellow-100 px-2 py-1 rounded">
//                       &lt;script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"&gt;&lt;/script&gt;
//                     </code>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* 添加足迹按钮 */}
//           <button
//             onClick={() => setShowAddForm(true)}
//             className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
//           >
//             <Plus className="h-6 w-6" />
//           </button>
//         </div>

//         {/* 侧边栏 */}
//         <div className="w-80 bg-white shadow-lg overflow-y-auto">
//           {selectedLocation ? (
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold">足迹详情</h2>
//                 <button
//                   onClick={() => setSelectedLocation(null)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold text-lg">{selectedLocation.name}</h3>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
//                     <Calendar className="h-4 w-4" />
//                     <span>{selectedLocation.date}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-1">
//                   {renderStars(selectedLocation.rating)}
//                 </div>

//                 {selectedLocation.photos.length > 0 && (
//                   <div>
//                     <h4 className="font-medium mb-2">照片</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {selectedLocation.photos.map((photo, index) => (
//                         <img
//                           key={index}
//                           src={photo}
//                           alt={`${selectedLocation.name} ${index + 1}`}
//                           className="w-full h-24 object-cover rounded"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <h4 className="font-medium mb-2">描述</h4>
//                   <p className="text-gray-700 text-sm">{selectedLocation.description}</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-4">所有足迹</h2>
//               <div className="space-y-3">
//                 {footprints.map(footprint => (
//                   <div
//                     key={footprint.id}
//                     onClick={() => setSelectedLocation(footprint)}
//                     className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
//                   >
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-medium">{footprint.name}</h3>
//                       <div className="flex items-center space-x-1">
//                         {renderStars(footprint.rating)}
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
//                       <Calendar className="h-3 w-3" />
//                       <span>{footprint.date}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* 添加足迹弹窗 */}
//       {showAddForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 max-w-full">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-semibold">添加新足迹</h2>
//               <button
//                 onClick={() => setShowAddForm(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">地点名称</label>
//                 <input
//                   type="text"
//                   value={newLocation.name}
//                   onChange={(e) => setNewLocation(prev => ({ ...prev, name: e.target.value }))}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="输入地点名称"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-1">访问日期</label>
//                 <input
//                   type="date"
//                   value={newLocation.date}
//                   onChange={(e) => setNewLocation(prev => ({ ...prev, date: e.target.value }))}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-1">描述</label>
//                 <textarea
//                   value={newLocation.description}
//                   onChange={(e) => setNewLocation(prev => ({ ...prev, description: e.target.value }))}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   rows="3"
//                   placeholder="描述这次旅行的感受..."
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-1">评分</label>
//                 <div className="flex space-x-1">
//                   {[1, 2, 3, 4, 5].map(star => (
//                     <button
//                       key={star}
//                       onClick={() => setNewLocation(prev => ({ ...prev, rating: star }))}
//                       className={`text-2xl ${star <= newLocation.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                     >
//                       ★
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="flex space-x-3 pt-4">
//                 <button
//                   onClick={() => setShowAddForm(false)}
//                   className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   取消
//                 </button>
//                 <button
//                   onClick={addFootprint}
//                   className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   添加
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage />;
//       case "about":
//         return <AboutPage />;
//       case "skills":
//         return <SkillsPage />;
//       case "projects":
//         return <ProjectsPage />;
//       case "travel":
//         return <TravelPage />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "white",
//         position: "relative",
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >

//     <style>{`
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
      
//       @keyframes wave {
//         0%, 100% { transform: rotate(0deg); }
//         25% { transform: rotate(20deg); }
//         75% { transform: rotate(-20deg); }
//       }
      
//       @keyframes float {
//         0%, 100% { transform: translateY(0px); }
//         50% { transform: translateY(-20px); }
//       }
      
//       @keyframes bounce {
//         0%, 100% { transform: translateY(0px); }
//         50% { transform: translateY(-10px); }
//       }
      
//       @keyframes rotate {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//     `}</style>


//       {/* 动态背景粒子效果 */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `
//           radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
//           radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
//           radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
//         `,
//           pointerEvents: "none",
//         }}
//       />

//       {/* 导航栏 */}
//       <nav
//         style={{
//           padding: "20px 40px",
//           display: "flex",
//           justifyContent: "flex-start",
//           alignItems: "center",
//           position: "relative",
//           zIndex: 10,
//         }}
//       >
//         <div
//           style={{
//             fontSize: "28px",
//             fontWeight: "bold",
//             color: "#00000",
//           }}
//         >
//           {/* YL. */}
//         </div>

//         <div
//           style={{
//             display: "flex",
//             gap: "15px",
//           }}
//         >
//           <NavButton
//             id="home"
//             label="HOME"
//             // icon="🏠"
//             // icon={<img src="/nav/ren.png" alt="home icon" style={{ width: "20px", height: "20px" }} />}
//             icon={<i className="fi fi-rr-home" style={{ fontSize: "20px", color: "black" }}></i>}
//             isActive={currentPage === "home"}
//             onClick={() => setCurrentPage("home")}
//           />
//           <NavButton
//             id="about"
//             label="ABOUT ME"
//             icon={<i className="fi fi-rr-user" style={{fontSize: "20px"}}></i>}
//             isActive={currentPage === "about"}
//             onClick={() => setCurrentPage("about")}
//           />
          
//           <NavButton
//             id="research"
//             label="RESEARCH"
//             // icon="🚀"
//             icon={<i className="fi fi-rr-rocket-lunch" style={{fontSize: "20px"}}></i>}
//             isActive={currentPage === "research"}
//             onClick={() => setCurrentPage("research")}
//           />
//           <NavButton
//             id="projects"
//             label="PROJECTS"
//             // icon={<i className="fi fi-rr-cube" style={{"fontSize: "20px"}}></i>} 
//             icon={<i className="fi fi-rr-cube" style={{fontSize: "20px"}}></i>}
//             isActive={currentPage === "projects"}
//             onClick={() => setCurrentPage("projects")}
//           />
//           <NavButton
//             id="skills"
//             label="SKILLS"
//             // icon="💻"
//             isActive={currentPage === "skills"}
//             onClick={() => setCurrentPage("skills")}
//           />
//           <NavButton
//             id="travel"
//             label="TRAVEL"
//             // icon={<i className="fi fi-rr-plane-globe" style={{frontSize: "20px"}}></i>}
//             icon={<img src="/nav/travel.png" alt="travel icon" style={{ width: "23px", height: "23px" }} />}
//             isActive={currentPage === "travel"}
//             onClick={() => setCurrentPage("travel")}
//           />
//         </div>
//       </nav>

//       {/* 主要内容区域 */}
//       <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
//         {renderPage()}
//       </main>

//       {/* Footer区域 */}
//       <footer style={{
//         fontFamily: '"Libertinus Mono", monospace',
//         textAlign: "center",
//         padding: "20px 0",
//         background: "rgba(255, 255, 255, 0.1)",
//         backdropFilter: "blur(10px)",
//         borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//         position: "relative",
//         zIndex: 10,
//       }}>
//         <div style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "0 40px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "20px"
//         }}>
//           <div style={{
//             color: "#64748b",
//             fontSize: "12px",
//             fontWeight: "500"
//           }}>
//             Copyright © 2025 Yiyang Liu.
//              {/* All rights reserved. */}
//           </div>
          
//           <div style={{
//             display: "flex",
//             gap: "20px",
//             alignItems: "center"
//           }}>
//             <span style={{
//               color: "#64748b",
//               fontSize: "12px"
//             }}>
//               Made with ❤️ in Toronto
//             </span>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// }




import React from 'react';
import PersonalWebsite from './components/PersonalWebsite';

function App() {
  return <PersonalWebsite />;
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutMe from './components/AboutMe';
// import ResearchPage from './components/ResearchPage';
// import ProjectsPage from './components/ProjectsPage';
// import SkillsPage from './components/SkillsPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AboutMe />} />
//         <Route path="/research" element={<ResearchPage />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//         <Route path="/skills" element={<SkillsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

