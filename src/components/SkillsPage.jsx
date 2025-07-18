// // src/components/SkillsPage.jsx
// import React from 'react';
// import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
// import { SiJavascript, SiTypescript } from 'react-icons/si';

// const SkillsPage = () => {
//   const skills = [
//     { name: "React", icon: <FaReact /> },
//     { name: "JavaScript", icon: <SiJavascript /> },
//     { name: "TypeScript", icon: <SiTypescript /> },
//     { name: "Node.js", icon: <FaNodeJs /> },
//     { name: "Python", icon: <FaPython /> },
//     { name: "HTML/CSS", icon: <FaHtml5 /> },
//   ];

//   return (
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
// };

// // export default SkillsPage;
// export default function SkillsPage() {
//   // 组件内容
// }

import React from 'react';

export default function SkillsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '40px 20px' }}>
      <h1>Skills Page</h1>
      <p>Skills content will go here...</p>
    </div>
  );
}