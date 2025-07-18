// // src/components/ProjectsPage.jsx
// import React from 'react';

// const ProjectsPage = () => {
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
// };

// // export default ProjectsPage;
// export default function SkillsPage() {
//   // 组件内容
// }

import React from 'react';

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '40px 20px' }}>
      <h1>Projects Page</h1>
      <p>Projects content will go here...</p>
    </div>
  );
}